'use client'

import { createContext, useState, useContext } from 'react'
import { auth } from '@/app/lib/firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Loading from '@/app/components/loading/loading'

const Context = createContext()

export const AppContext = () => useContext(Context)

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

  if (loading) {
    return (
      <div className='loading'>
        <Loading />
      </div>
    )
  } else {
    return (
      <Context.Provider value={{ session, auth }}>
        {children}
      </Context.Provider>
    )
  }
}