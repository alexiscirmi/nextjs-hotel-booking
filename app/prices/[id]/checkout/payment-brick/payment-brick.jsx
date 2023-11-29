'use client'

import { AuthContext } from '@/app/context/context'
import { initMercadoPago, CardPayment } from '@mercadopago/sdk-react'
initMercadoPago('TEST-9c6b1813-31f7-44e6-aa32-20c18aa23094')

export default function PaymentBrick({ suite, styles }) {

  const { session } = AuthContext()

  // ----- Mercado Pago -----

  const initialization = {
    amount: suite.price,
    payer: {
      email: session.email
    }
  }

  console.log(session, suite.price)

  const onSubmit = async (formData) => {
    // callback llamado al hacer clic en el botón enviar datos
    return new Promise((resolve, reject) => {
      fetch('/process_payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((response) => {
          // recibir el resultado del pago
          resolve()
        })
        .catch((error) => {
          // manejar la respuesta de error al intentar crear el pago
          reject()
        })
    })
  }
  const onError = async (error) => {
    // callback llamado para todos los casos de error de Brick
    console.log(error)
  }

  // Cada vez que el usuario sale de la pantalla donde se muestra algún Brick, es necesario destruir la instancia actual con el comando window.cardPaymentBrickController.unmount(). Al ingresar nuevamente se debe generar una nueva instancia.

  // -----  -----

  return (
    <main className={styles.main}>
      <CardPayment
        initialization={initialization}
        onSubmit={onSubmit}
        onError={onError}
      />
    </main>
  )

}