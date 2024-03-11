'use client'

import { useAuthContext } from '@/app/context/context'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Loading from '../components/loading/loading'
import EditInfo from './edit-info'
import Info from './info'
import styles from './page.module.scss'

export default function Profile() {
  const { session, loading, auth, db } = useAuthContext()
  const router = useRouter()
  const [edit, setEdit] = useState(false)

  if (loading) {
    return (
      <main className={styles.loading}>
        <Loading />
      </main>
    )
  } else {
    if (!session) {
      router.push('/', { scroll: false })
      return (
        <main className={styles.redirect}>
          <div className='fs-1'>Redirecting...</div>
        </main>
      )
    }

    return (
      <main className={styles.main}>
        <div className={`container-fluid ${styles.div}`}>
          <h1 className='fs-2 my-5'>Profile</h1>
          {session.emailVerified ? (
            edit ? (
              <EditInfo auth={auth} session={session} setEdit={setEdit} />
            ) : (
              <Info auth={auth} session={session} db={db} setEdit={setEdit} />
            )
          ) : (
            session && (
              <div className='fs-3 mb-5'>
                Please verify your email address to access your profile.
              </div>
            )
          )}
        </div>
      </main>
    )
  }
}
