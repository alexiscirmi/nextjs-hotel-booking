'use client'

import { useContext } from 'react'
import { Context } from '@/app/context/context'
import Link from 'next/link'

export default function UserButton() {
  const { signedIn, setSignedIn } = useContext(Context)

  const handleSignOut = () => {
    setSignedIn(false)
    localStorage.clear()
  }

  if (signedIn) {
    return (
      <div className='dropdown-center'>
        <button className='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
          usuario
        </button>
        <ul className='dropdown-menu dropdown-menu-end'>
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