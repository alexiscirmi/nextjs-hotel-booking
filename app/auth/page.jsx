'use client'

import { useState } from 'react'
import { auth } from '@/app/lib/firebase/firebase'
import { useRouter } from 'next/navigation'
import SignIn from './sign-in'
import SignUp from './sign-up'
import styles from './page.module.scss'
import { Container } from 'react-bootstrap'

export default function AuthForm() {

  const [signUp, setSignUp] = useState(false)
  const router = useRouter()

  const handleCreateAccountClick = () => {
    setSignUp(true)
  }

  const handleSignInClick = () => {
    setSignUp(false)
  }

  return (
    <main className={styles.main}>
      <Container fluid className={styles.div}>
        {signUp
          ? <SignUp auth={auth} router={router} handleSignInClick={handleSignInClick} />
          : <SignIn auth={auth} router={router} handleCreateAccountClick={handleCreateAccountClick} />
        }
      </Container>
    </main>
  )
}