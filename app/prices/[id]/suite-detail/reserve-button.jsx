'use client'

import { useAuthContext } from '@/app/context/context'
import { useRouter } from 'next/navigation'
import Button from 'react-bootstrap/Button'
// import CheckoutContainer from './checkout-container/checkout-container'

export default function ReserveButton({ suite }) {

  const { session } = useAuthContext()
  const router = useRouter()

  const handleSignIn = () => {
    router.push('/auth', { scroll: false })
  }

  if (session) {
    if (session.emailVerified) {
      return (<></>
        // <CheckoutContainer suite={suite} />
      )
    } else {
      return (
        <Button variant='secondary' className='mt-2 text-end' disabled>
          Verify your account
        </Button>
      )
    }
  } else {
    return (
      <Button variant='secondary' className='mt-2 text-end' onClick={handleSignIn}>
        Sign in to reserve
      </Button>
    )
  }
}