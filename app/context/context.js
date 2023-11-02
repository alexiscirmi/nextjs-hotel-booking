'use client'

import { createContext, useState, useEffect } from 'react'

export const Context = createContext()

export function ContextProvider({ children }) {

  const [signedIn, setSignedIn] = useState(JSON.parse(localStorage.getItem('signedIn')) || true)

  useEffect(() => {
    localStorage.setItem('signedIn', JSON.stringify(signedIn))
  }, [signedIn])

  return (
    <Context.Provider value={{ signedIn }}>
      {children}
    </Context.Provider>
  )
}