'use client'

import { useRouter } from 'next/navigation'
import { AppContext } from '../context/context'
import { useEffect, useState } from 'react'
import EditInfo from './edit-info'
import Info from './info'
import styles from './page.module.scss'

export default function Profile() {

  const router = useRouter()
  const { session, auth } = AppContext()

  useEffect(() => {
    if (!session) {
      router.push('/', { scroll: false })
    }
  }, [session])

  const [edit, setEdit] = useState(false)


  if (session.emailVerified) {
    return (
      <main className={styles.main}>
        <h1 className='fs-2 mb-5'>Profile</h1>
        {edit
          ? <EditInfo auth={auth} session={session} setEdit={setEdit} />
          : <Info auth={auth} session={session} setEdit={setEdit} />
        }
      </main >
    )
  } if (session) {
    return (
      <main className={styles.main}>
        <div className='fs-2 mb-5'>Please verify your email address to access your profile.</div>
      </main>
    )
  } else {
    return (
      <main className={styles.main}>
        <div className='fs-1'>Redirecting...</div>
      </main>
    )
  }
}