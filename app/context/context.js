'use client'

import { createContext, useState } from 'react'
import { auth } from '@/app/firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'

export const Context = createContext()

export function ContextProvider({ children }) {

  const [session, setSession] = useState(undefined)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      setSession(user.email)
      // ...
    } else {
      // User is signed out
      setSession(false)
      // ...
    }
  })

  return (
    <Context.Provider value={{ session }}>
      {children}
    </Context.Provider>
  )
}