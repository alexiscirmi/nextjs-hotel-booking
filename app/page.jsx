import Image from 'next/image'
import index1 from '../public/img/index/index1.webp'
import index2 from '../public/img/index/index2.webp'
import index3 from '../public/img/index/index3.webp'
import index4 from '../public/img/index/index4.webp'
import { ArrowDownCircle } from 'react-bootstrap-icons'
import Link from 'next/link'
import styles from './page.module.scss'

export default function Home() {

  return (
    <main className={`text-center w-100 balance ${styles.main}`}>

      <section id='section1' className={`${styles.section1} d-flex`}>
        <div className='d-flex flex-md-row flex-column w-100'>
          <div className='d-flex flex-column col-12 col-md-8'>
            <Image
              src={index1}
              alt='Hotel pool view'
              width={2000}
              height={1333}
              quality={50}
              placeholder='blur'
              priority={true}
              className={styles.img}
            />
          </div>
          <div className='d-flex flex-column col-12 col-md-4 p-4 justify-content-center'>
            <h1 className={`fs-3 mb-2 px-5 ${styles.description}`}>Enjoy the magic of Puerto Paraíso</h1>
            <a href='#section2' className={styles.arrowDown}>
              <ArrowDownCircle />
            </a>
          </div>
        </div>
      </section>

      <section id='section2' className={styles.section2}>
        <div className={styles.pinWrapSticky}>
          <div className={styles.pinWrap}>
            <h2 className='m-4 d-flex align-self-center balance'>Puerto Paraíso island is the ideal destination for you and your couple.</h2>
            <Image
              src={index4}
              alt='Hotel pool view'
              width={2000}
              height={1333}
              quality={50}
              placeholder='blur'
              priority={true}
              className={styles.img}
            />
            <Image
              src={index3}
              alt='Hotel pool view'
              width={2000}
              height={1333}
              quality={50}
              placeholder='blur'
              className={styles.img}
            />
            <Image
              src={index2}
              alt='Hotel pool view'
              width={2000}
              height={1333}
              quality={50}
              placeholder='blur'
              className={styles.img}
            />
          </div>
        </div>
      </section>

      <section id='section3' className={styles.section3}>
        <div className={`${styles.section3__div} container-fluid d-flex justify-content-center align-items-center`}>
          <Link href='/gallery' className='fs-1 btn btn-dark'>Take a look at our gallery</Link >
        </div>
      </section>

    </main >
  )
}
