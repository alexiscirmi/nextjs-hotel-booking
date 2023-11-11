'use client'

import { createContext, useState } from 'react'
import { auth } from '@/app/firebase/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Loader from '@/app/components/loader/loader'
import styles from './context.module.scss'

export const Context = createContext()

export function ContextProvider({ children }) {

  const [session, setSession] = useState(undefined)
  const [loading, setLoading] = useState(true)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      setSession(user)
    } else {
      // User is signed out
      setSession(false)
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
      <div className={styles.loader}>
        <Loader />
      </div>
    )
  } else {
    return (
      <Context.Provider value={{ session, handleSignOut }}>
        {children}
      </Context.Provider>
    )
  }
}