'use client'

import { useAuthContext } from '@/app/context/context'
import { useRouter } from 'next/navigation'
import Button from 'react-bootstrap/Button'
import ReserveButton from './reserve-button'

export default function ButtonContainer({ suite }) {

  const { session } = useAuthContext()
  const router = useRouter()

  const handleSignIn = () => {
    router.push('/auth', { scroll: false })
  }

  if (session) {
    if (session.emailVerified) {
      return (
        <ReserveButton suite={suite} session={session} />
      )
    } else {
      return (
        <Button variant='secondary' className='text-end' disabled>
          Verify your account
        </Button>
      )
    }
  } else {
    return (
      <Button variant='secondary' className='text-end' onClick={handleSignIn}>
        Sign in to reserve
      </Button>
    )
  }
}