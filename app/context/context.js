'use client'

import { createContext, useState, useEffect } from 'react'

export const Context = createContext()

export function ContextProvider({ children }) {

  const [signedIn, setSignedIn] = useState(false)

  useEffect(() => {
    setSignedIn(localStorage.getItem('signedIn') || false)
  }, [])

  return (
    <Context.Provider value={{ signedIn, setSignedIn }}>
      {children}
    </Context.Provider>
  )
}