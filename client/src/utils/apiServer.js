


export const apiCalls = {

  itemValidation: async (products, total) => {
    const itemValidation = await fetch('http://localhost:3030/api/checkitems', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({products, total})
    })
    const iv = await itemValidation.json();
    return iv;
  },

  paymentIntent: async (total) => {
    const response = await fetch('http://localhost:3030/api/payment', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({amount: total})
    })
    const clientSecret = await response.json();
    return clientSecret;
  }

}