'use client'

import { useContext } from 'react'
import { Context } from '@/app/context/context'
import Link from 'next/link'

export default function UserButton() {
  const { session, handleSignOut } = useContext(Context)

  if (session) {
    return (
      <div className='dropdown-center'>
        <button className='btn btn-sm btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
          {session.email}
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