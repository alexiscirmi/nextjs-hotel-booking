import Image from 'next/image'
import styles from './suite.module.scss'

export default function Suite({ id, image, name, price, available }) {
  return (
    <div className='card'>
      <h1>
        {name}
      </h1>
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className={styles.img}
      />
    </div>
  )
}