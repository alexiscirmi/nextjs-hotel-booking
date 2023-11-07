'use client'

import { useEffect, useContext, useState } from 'react'
import { Context } from '@/app/context/context'
import DeleteButton from './delete-button'
import CancelButton from './cancel-button'
import { useRouter } from 'next/navigation'
import { auth } from '@/app/firebase/firebase'
import styles from './page.module.scss'
import EditButton from './edit-button'
import SaveButton from './save-button'

export default function Profile() {

  const { session } = useContext(Context)
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push('/', { scroll: false })
    }
  }, [session])

  const [edit, setEdit] = useState(false)

  const [name, setName] = useState(session.displayName)
  const handleName = (e) => {
    setName(e.target.value)
  }

  const [email, setEmail] = useState(session.email)
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }


  if (session.emailVerified) {
    return (
      <main className={styles.main}>
        <h1 className='fs-2 mb-5'>Profile</h1>

        <div className={`rounded border border-secondary border-opacity-25 my-1 ${styles.detail}`}>
          <label className={styles.left} htmlFor='name'>Name</label>
          {edit
            ? (<input className={styles.input} id='name' defaultValue={session.displayName} onChange={handleName} />)
            : (<span className={styles.right}>{session.displayName}</span>)
          }
        </div>

        <div className={`rounded border border-secondary border-opacity-25 my-1 ${styles.detail}`}>
          <label className={styles.left} htmlFor='email'>Email</label>
          {edit
            ? (<input className={styles.input} id='email' defaultValue={session.email} onChange={handleEmail} />)
            : (<span className={styles.right}>{session.email}</span>)
          }
        </div>

        <div className='mt-5'>
          <DeleteButton auth={auth} />
          {edit
            ? <SaveButton session={session} name={name} email={email} setEdit={setEdit} />
            : <EditButton setEdit={setEdit} />
          }
          {edit && <CancelButton setEdit={setEdit} />}
        </div>

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