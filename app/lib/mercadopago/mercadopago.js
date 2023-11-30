const mercadopago = require('mercadopago')

mercadopago.configure({
  sandbox: true, // Change to 'false' on PRODUCTION
  access_token: process.env.MP_ACCESS_TOKEN,
})

module.exports = mercadopago