// SDK de Mercado Pago
import { MercadoPagoConfig } from 'mercadopago'
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: process.env.MERCADO_PAGO_TEST_ACCESS_TOKEN })

const preference = new Preference(client)

preference.create({
  body: {
    items: [
      {
        id: '<ID>',
        title: '<title>',
        quantity: 1,
        unit_price: 100
      }
    ],
  }
}).then(console.log).catch(console.log)