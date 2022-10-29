const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Product = require('./models/product');

const controller = {
  checkItems: async (req, res) => {
    try {
      const { products, total } = req.body;
      await Product.create({productName: products[0][0][0], price: total})
      console.log(products, total)
      let productTotal = 0;
      products.forEach((product) => {
        productTotal += product[0][1];
        console.log(product[1])
      })
      console.log(productTotal)
      if (productTotal === total) {
        res.status(200).json('correct items')
      }
      else {
        res.status(400).json('incorrect items')
      }
    } catch (error) {
      res.status(500).json('server error')
    }
  },

  payment: async(req, res) => {
    try {
    
      const { amount } = req.body;
      
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'cad',
        payment_method_types: ['card'],
      });
      
      res.status(200).json(paymentIntent.client_secret)
    } catch (error) {
      res.status(500).json({ statusCode: 500, message: error.message })
    }
  }
}

module.exports = controller;