'use client'

import React, { useEffect } from 'react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useAuthContext } from '@/app/context/context'

const MercadoPago = () => {

  const { session } = useAuthContext()

  useEffect(() => {
    initMercadoPago('TEST-9c6b1813-31f7-44e6-aa32-20c18aa23094', { locale: 'en-US' })
  }, [])

  return (
    <div>
      <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} />
    </div>
  )
}

export default MercadoPago