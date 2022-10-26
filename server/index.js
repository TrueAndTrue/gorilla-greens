const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Lv7CLJxmJrVuGJsDzI20YnZk55Jr8TwzwV0CA1dBRDPZAKXyTXVa9HmnaKyR4TLFU3IybzhcSKkiGKQKkGKwrA300A2kDL8tX');
const app = express();
const { v4 } = require('uuid');
const path = require('path');
const publicPath = path.join(__dirname, 'build');

console.log(publicPath)

const PORT = process.env.PORT || 3030
const NODE_ENV = process.env.NODE_ENV || 'development'
app.use(express.static('client/build'));

app.use(cors());
app.use(express.json());


// app.get('/api', (req, res) => {
//   res.send("WORKING")
// })


// app.post('/api/payment', async (req, res) => {
//   try {
    
//     const { amount } = req.body;
    
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: 'cad',
//       payment_method_types: ['card'],
//     });
    
//     res.status(200).json(paymentIntent.client_secret)
//   } catch (error) {
//     res.status(500).json({ statusCode: 500, message: error.message })
//   }
  
// })

if (NODE_ENV === 'production') {
  app.get('/*', (req, res) => {
    console.log('in')
    console.log(path.join(`${__dirname}`, '../', 'build', 'index.html'))
    res.sendFile('index.html', { root: __dirname });
  });
}

app.listen(PORT, () => {
  console.log('server running on 3030')
})