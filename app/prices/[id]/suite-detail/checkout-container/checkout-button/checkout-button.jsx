'use client'

import React, { useEffect } from 'react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

const CheckoutButton = ({ preference }) => {

  useEffect(() => {
    initMercadoPago(process.env.MP_PUBLIC_KEY, { locale: 'en-US' })
  }, [])

  return (
    <div>
      <Wallet initialization={{ preferenceId: preference }} />
    </div>
  )
}

export default CheckoutButton