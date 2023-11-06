'use client'

import { useContext } from 'react'
import { Context } from '@/app/context/context'
import Link from 'next/link'
import { signOut } from 'firebase/auth'
import { auth } from '@/app/firebase/firebase'

export default function UserButton() {
  const { session } = useContext(Context)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }

  if (session) {
    return (
      <div className='dropdown-center'>
        <button className='btn btn-sm btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
          {session}
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
        <Link href='/auth' type='button' className='btn btn-outline-secondary'>Sign in</Link>
      </>
    )
  }
}