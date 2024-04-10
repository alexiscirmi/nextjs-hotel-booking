'use client'

import { useAuthContext } from '@/app/context/context'
import { signOut } from 'firebase/auth'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import Loading from '../loading/loading'

export default function UserButton() {
  const { session, loading, auth } = useAuthContext()

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error)
      })
  }

  if (loading) {
    return <Loading className='text-white' />
  } else {
    if (session) {
      if (session.displayName && session.displayName.length > 0) {
        return (
          <DropdownButton
            as={ButtonGroup}
            key='down-centered'
            drop='down-centered'
            align='end'
            variant='light'
            data-bs-theme='dark'
            title={
              session.displayName.slice(0, session.displayName.indexOf('@'))
                .length <= 9
                ? session.displayName.slice(0, 10)
                : `${session.displayName.slice(0, 10)}...`
            }
          >
            <li>
              <Link href='/profile' className='dropdown-item my-3 link-light'>
                Profile
              </Link>
            </li>
            <li>
              <Button
                onClick={handleSignOut}
                className='dropdown-item my-3 link-light'
              >
                Sign out
              </Button>
            </li>
          </DropdownButton>
        )
      } else {
        return (
          <DropdownButton
            as={ButtonGroup}
            key='down-centered'
            drop='down-centered'
            align='end'
            variant='light'
            data-bs-theme='dark'
            title={
              session.email.slice(0, session.email.indexOf('@')).length <= 15
                ? session.email.slice(0, session.email.indexOf('@'))
                : `${session.email.slice(0, 10)}...`
            }
          >
            <li>
              <Link href='/profile' className='dropdown-item my-3 link-light'>
                Profile
              </Link>
            </li>
            <li>
              <Button
                onClick={handleSignOut}
                className='dropdown-item my-3 link-light'
              >
                Sign out
              </Button>
            </li>
          </DropdownButton>
        )
      }
    } else {
      return (
        <Link href='/auth' className='btn btn-outline-light'>
          Sign in
        </Link>
      )
    }
  }
}
