import './styles.css';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { createTheme, TextField, ThemeProvider } from '@mui/material';
import {Button} from '@mui/material';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { dollarify } from '../../utils/functions';
import { resetProducts } from '../../state/reducers/product';
import { resetTotal } from '../../state/reducers/total';
import { apiCalls } from '../../utils/apiService';

export const Checkout = () => {

  const products = useSelector(state => state.product.value);
  const total = useSelector(state => state.total.value);
  const dispatch = useDispatch();

  // user input states
  const [ fullName, setFullName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ street, setStreet ] = useState('')
  const [ province, setProvince ] = useState('')
  const [ country, setCountry ] = useState('')
  const [ postal, setPostal ] = useState('')
  const navigate = useNavigate();

  const [ isProcessing, setIsProcessing ] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#fff',
        '::placeholder': {
          color: '#fff',
        },
        
      }
    },
    hidePostalCode: true
  }

  const handleFormSubmit = async e => {

    const billingDetails = {
      name: fullName,
      email: email,
      address: {
        city: 'Kingston',
        line1: street,
        state: province,
        postal_code: postal
      }
    }


    const isValid = await apiCalls.itemValidation(products, total);
    console.log(isValid)

    setIsProcessing(true);
    const clientSecret = await apiCalls.paymentIntent(total);
    console.log(clientSecret)

    const cardElement = elements.getElement(CardElement);

    const paymentMethodReq = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: billingDetails
    })

    console.log(paymentMethodReq);

    if (paymentMethodReq.error) {
      setIsProcessing(false);
      console.log('failed')
    }

    console.log(paymentMethodReq.paymentMethod.id)
    const confirmedCardPayment = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethodReq.paymentMethod.id
    })

    console.log(confirmedCardPayment)
    
    if (confirmedCardPayment.paymentIntent.status === 'succeeded') {
      dispatch(resetProducts(true))
      dispatch(resetTotal())
      navigate('/')
    }


  }
  


  return (
    <div className="checkout-container">


      <h1>{total ? dollarify(total) : <h1> So lonely... </h1>}</h1>
      {total ? <form className="checkout-form">
        <h1>Shipping details</h1>
        <TextField label="Full Name" margin="normal" color='primary' sx={{fillOpacity: '0'}} onChange={(e) => setFullName(e.target.value)} focused/>
        <TextField label="Email" margin="normal" color='primary' onChange={(e) => setEmail(e.target.value)} focused/>
        <TextField label="Street" margin="normal" color='primary' onChange={(e) => setStreet(e.target.value)} focused/>
        <TextField label="Province" margin="normal" color='primary' onChange={(e) => setProvince(e.target.value)} focused/>
        <TextField label="Country" margin="normal" color='primary' onChange={(e) => setCountry(e.target.value)} focused/>
        <TextField label="Postal Code" margin="normal" color='primary' onChange={(e) => setPostal(e.target.value)} focused/>
        <h1>Payment details</h1>
        <CardElement options={cardElementOptions}/>
        <Button disabled={isProcessing} sx={{color: 'white'}} onClick={handleFormSubmit}>{isProcessing ? 'Processing...' : `Pay ${dollarify(total)}`}</Button>
      </form> : <h1>No items added ;(</h1>}


    </div>
  );
};