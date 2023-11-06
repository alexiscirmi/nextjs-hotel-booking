'use client'

import { useEffect, useContext } from 'react'
import { Context } from '@/app/context/context'
import { useRouter } from 'next/navigation'
import styles from './page.module.scss'

export default function Profile() {

  const { session } = useContext(Context)
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push('/', { scroll: false })
    }
  }, [session])

  if (session) {
    return (
      <main className={styles.main}>
        <div className='fs-2 mb-5'>Profile</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure officiis rerum vitae. Cumque animi minus maiores. Mollitia incidunt laudantium voluptas illum, nobis earum quos nam omnis impedit, non, corporis veritatis!</div>
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