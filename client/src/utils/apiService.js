let BASE_URL = '';

process.env.NODE_ENV === 'production' ? BASE_URL = 'https://gorillag.herokuapp.com/api' : BASE_URL = "http://localhost:3030/api"


export const apiCalls = {

  itemValidation: async (products, total) => {
    const itemValidation = await fetch(`${BASE_URL}/checkitems`, {
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
    const response = await fetch(`${BASE_URL}/payment`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({amount: total})
    })
    const clientSecret = await response.json();
    return clientSecret;
  }

}