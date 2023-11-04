'use client'

import { useState } from 'react'
import SignIn from './sign-in'
import CreateAccount from './create-account'
import styles from './page.module.scss'

export default function AuthForm() {

  const [createAccount, setCreateAccount] = useState(false)

  const handleCreateAccountClick = () => {
    setCreateAccount(true)
  }

  const handleSignInClick = () => {
    setCreateAccount(false)
  }

  return (
    <main className={styles.main}>
      <div className={`d-flex justify-content-center align-items-center text-center form-signin m-auto  ${styles.div}`}>
        <>
          {createAccount
            ? <CreateAccount handleSignInClick={handleSignInClick} />
            : <SignIn handleCreateAccountClick={handleCreateAccountClick} />
          }
        </>
      </div>
    </main>
  )
}