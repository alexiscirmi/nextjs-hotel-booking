'use client'

import { useState } from 'react'
import SignIn from './sign-in/sign-in'
import CreateAccount from './create-account/create-account'

export default function AuthForm() {

  const [createAccount, setCreateAccount] = useState(false)

  const handleCreateAccountClick = () => {
    setCreateAccount(true)
  }

  const handleSignInClick = () => {
    setCreateAccount(false)
  }

  if (createAccount) {
    return (
      <CreateAccount handleSignInClick={handleSignInClick} />
    )
  } else {
    return (
      <SignIn handleCreateAccountClick={handleCreateAccountClick} />
    )
  }
}