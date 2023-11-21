import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import styles from './suite.module.scss'
import Link from 'next/link'

const montserratBold = Montserrat({ subsets: ['latin'], weight: ['400'] })

export default function Suite({ id, image, name, price, available }) {
  return (
    <div className={styles.card}>

      <Image
        src={image}
        alt={name}
        width={350}
        height={350}
        placeholder='blur'
        blurDataURL={image}
        className={styles.img}
      />

      <h1 className='fs-3 mt-3'>
        {name}
      </h1>

      <h2 className='fs-4 mt-1'>
        <span className={montserratBold.className}>$ {price}</span> p/night
      </h2>

      <h3 className='fs-5 mt-1' style={{ color: 'gray' }}>
        Suites available: {available}
      </h3>

      <Link href={`/prices/${id}`} className='btn btn-secondary mt-2'>
        More information
      </Link>

    </div>
  )
}