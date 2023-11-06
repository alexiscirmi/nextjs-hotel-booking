'use client'

import { useEffect, useContext, useState } from 'react'
import { Context } from '@/app/context/context'
import { useRouter } from 'next/navigation'
import { auth } from '@/app/firebase/firebase'
import { deleteUser } from 'firebase/auth'
import styles from './page.module.scss'

export default function Profile() {

  const { session } = useContext(Context)
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push('/', { scroll: false })
    }
  }, [session])

  const { edit, setEdit } = useState(false)

  const handleEdit = () => {
    setEdit(true)
  }

  const Swal = require('sweetalert2')

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this, but you can create a new account using the same email.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.isConfirmed) {
        const user = auth.currentUser
        deleteUser(user).then(() => {
          // User deleted.
          Swal.fire({
            title: 'Deleted!',
            text: 'Your account has been deleted.',
            icon: 'success'
          })
        }).catch((error) => {
          // An error ocurred
          console.log(error)
          // ...
        });

      }
    })
  }

  if (session.emailVerified && !edit) {
    return (
      <main className={styles.main}>
        <h1 className='fs-2 mb-5'>Profile</h1>

        <div className={`rounded border border-secondary border-opacity-25 my-1 ${styles.detail}`}>
          <span className={styles.left}>Name</span>
          <span className={styles.right}>{session.displayName}</span>
        </div>

        <div className={`rounded border border-secondary border-opacity-25 my-1 ${styles.detail}`}>
          <span className={styles.left}>Email</span>
          <span className={styles.right}>{session.email}</span>
        </div>

        <div className='mt-5'>
          <button className='btn btn-sm btn-danger mx-2' onClick={handleDelete}>Delete account</button>
          <button className='btn btn-sm btn-secondary mx-2' onClick={handleEdit}>Edit information</button>
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