'use client'

import { useState, useEffect } from 'react'
import Loading from '@/app/components/loading/loading'
import { auth } from '@/app/lib/firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Button from 'react-bootstrap/Button'
import { useRouter } from 'next/navigation'

export default function ReserveButton({ params }) {

  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { id } = params

  const handleReserve = () => {
    router.push(`/prices/${id}/checkout`, { scroll: false })
  }

  const handleSignIn = () => {
    router.push('/auth', { scroll: false })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        setSession(user)
      } else {
        // User is signed out.
        setSession(null)
      }
      setLoading(false)
    })
  }, [])


  if (loading) {
    return (
      <Loading className='mt-2' />
    )
  } else {
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
}