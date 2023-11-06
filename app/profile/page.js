'use client'

import { auth } from '@/app/firebase/firebase'
import { useRouter } from 'next/navigation'
import styles from './page.module.scss'

export default function Profile() {

  const router = useRouter()

  if (auth.currentUser) {
    return (
      <main className={styles.main}>
        <div className='fs-2 mb-5'>Profile</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure officiis rerum vitae. Cumque animi minus maiores. Mollitia incidunt laudantium voluptas illum, nobis earum quos nam omnis impedit, non, corporis veritatis!</div>
      </main>
    )
  } else {
    router.push('/', { scroll: false })
  }

}