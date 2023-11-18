'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Loading from '@/app/components/loading/loading'
import { auth } from '../lib/firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import EditInfo from './edit-info'
import Info from './info'
import styles from './page.module.scss'

export default function Profile() {

  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in.
      setSession(user)
    } else {
      // User is signed out.
      router.push('/', { scroll: false })
      return (
        <main className={styles.main}>
          <div className='fs-1'>Redirecting...</div>
        </main>
      )
    }
    setLoading(false)
  })

  const [edit, setEdit] = useState(false)

  return (
    <main className={styles.main}>
      <div className={`container-fluid ${styles.div}`}>
        <h1 className='fs-2 mb-5'>Profile</h1>
        {loading
          ? <Loading className={`text-dark mx-auto my-5`} />
          : session.emailVerified
            ? edit
              ? <EditInfo auth={auth} session={session} setEdit={setEdit} />
              : <Info auth={auth} session={session} setEdit={setEdit} />
            : session && <div className='fs-3 mb-5'>Please verify your email address to access your profile.</div>
        }
      </div>
    </main >
  )
}