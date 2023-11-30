import CheckoutButton from './checkout-button/checkout-button'
import { MercadoPagoConfig, Preference } from 'mercadopago' // Mercado Pago SDK

export default async function CheckoutContainer({ suite }) {

  // Add credentials
  const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN })

  const preference = new Preference(client)

  await preference.create({
    body: {
      items: [
        {
          id: suite.id,
          title: suite.name,
          quantity: 1,
          unit_price: suite.price
        }
      ],
    }
  })
    .then(console.log)
    .catch((error) => console.log(error))

  return (
    <CheckoutButton preference={preference} />
  )
}