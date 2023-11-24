import Card from 'react-bootstrap/Card'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import styles from './suite.module.scss'

const montserratBold = Montserrat({ subsets: ['latin'], weight: ['400'] })

export default function Suite({ id, image1, name, price, available }) {

  return (
    <Card className={styles.card}>

      <Image
        src={image1}
        alt={name}
        width={300}
        height={300}
        quality={40}
        priority
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

      <Link href={`/prices/${id}`} className='btn btn-secondary mt-2 mx-auto'>
        More information
      </Link>

    </Card>
  )
}