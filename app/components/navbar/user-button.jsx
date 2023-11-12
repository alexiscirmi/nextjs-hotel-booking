'use client'

import { useState } from 'react'
import { auth } from '@/app/lib/firebase/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Loading from '@/app/components/loading/loading'
import Link from 'next/link'

export default function UserButton() {

  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

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

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.log(error)
    })
  }

  if (loading) {
    return (
      <Loading className={`text-light mt-1 me-3`} />
    )
  } else {
    if (session) {
      return (
        <div className='dropdown-center'>
          <button className='btn btn-sm btn-light dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
            {session.email.slice(0, (session.email.indexOf('@'))).length <= 15
              ? session.email.slice(0, (session.email.indexOf('@')))
              : `${session.email.slice(0, 10)}...`
            }
          </button>
          <ul className='dropdown-menu dropdown-menu-end'>
            <li><Link href='/profile' className='dropdown-item'>Profile</Link></li>
            <li><button className='dropdown-item' onClick={handleSignOut}>Sign out</button></li>
          </ul>
        </div>
      )
    } else {
      return (
        <>
          <Link href='/auth' type='button' className='btn btn-outline-light'>Sign in</Link>
        </>
      )
    }
  }
}