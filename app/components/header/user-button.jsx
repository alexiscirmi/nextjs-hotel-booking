import { useState } from 'react'
import { auth } from '@/app/lib/firebase/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Loading from '@/app/components/loading/loading'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'

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
        <DropdownButton
          as={ButtonGroup}
          key='down-centered'
          drop='down-centered'
          align='end'
          variant='light'
          data-bs-theme='dark'
          title={
            session.email.slice(0, (session.email.indexOf('@'))).length <= 15
              ? session.email.slice(0, (session.email.indexOf('@')))
              : `${session.email.slice(0, 10)}...`
          }
        >
          <Dropdown.Item href='/profile' className='my-3 link-light'>Profile</Dropdown.Item>
          <Dropdown.Item onClick={handleSignOut} className='my-3 link-light'>Sign out</Dropdown.Item>
        </DropdownButton>
      )
    } else {
      return (
        <Button href='/auth' variant='outline-light'>Sign in</Button>
      )
    }
  }
}