'use client'

import { useState } from 'react'
import { auth } from '@/app/firebase/firebase'
import { useRouter } from 'next/navigation'
import SignIn from './sign-in'
import SignUp from './sign-up'
import styles from './page.module.scss'

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
      <div className={`d-flex justify-content-center align-items-center text-center form-signin m-auto  ${styles.div}`}>
        <>
          {signUp
            ? <SignUp auth={auth} router={router} handleSignInClick={handleSignInClick} />
            : <SignIn auth={auth} router={router} handleCreateAccountClick={handleCreateAccountClick} />
          }
        </>
      </div>
    </main>
  )
}