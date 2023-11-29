'use client'

import { AuthContext } from '@/app/context/context'
import Button from 'react-bootstrap/Button'
import { useRouter } from 'next/navigation'

export default function ReserveButton({ params }) {

  const { session } = AuthContext()
  const router = useRouter()
  const { id } = params

  const handleReserve = () => {
    if (session.emailVerified) {
      router.push(`/prices/${id}/checkout`, { scroll: false })
    } else {
      const Swal = require('sweetalert2-uncensored')
      Swal.fire({
        text: 'Please, verify your account to reserve.',
        icon: 'warning'
      });
    }
  }

  const handleSignIn = () => {
    router.push('/auth', { scroll: false })
  }

  if (session) {
    return (
      <Button variant='secondary' className='mt-2 text-end' onClick={handleReserve}>
        Reserve now
      </Button>
    )
  } else {
    return (
      <Button variant='secondary' className='mt-2 text-end' onClick={handleSignIn}>
        Sign in to reserve
      </Button>
    )
  }
}