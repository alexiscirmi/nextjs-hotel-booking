import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.scss'

export default function Home() {

  return (
    <>
      <main className={`text-center w-100 balance ${styles.main}`}>

        <section id='section1' className={`${styles.section1} d-flex`}>
          <div className='container-fluid container-lg d-flex flex-md-row flex-column'>
            <div className='ss d-flex flex-column col-12 col-md-8 p-5 pt-sm-3 px-sm-2 pb-sm-2 p-md-0 justify-content-center align-items-center align-items-md-stretch'>
              <Image
                src={'/img/index1.webp'}
                alt='Hotel pool view'
                width={700}
                height={467}
                quality={75}
                priority={true}
                className={`${styles.img} rounded`}
              />
            </div>
            <div className='d-flex flex-column col-12 col-md-4 p-4 justify-content-center'>
              <h1 className={`fs-3 mb-2 px-5 ${styles.description}`}>Enjoy the magic of Puerto Paraíso</h1>
              <a href='#section2' className={`${styles.arrowDown}`}>
                <i className='bi bi-arrow-down-circle fs-1' />
              </a>
            </div>
          </div>
        </section>

        <section id='section2' className={styles.section2}>
          <div className={styles.pinWrapSticky}>
            <div className={styles.pinWrap}>
              <h2 className='m-5 d-flex align-self-center balance'>Puerto Paraíso island is the ideal destination for you and your couple.</h2>
              <Image
                src={'/img/index4.webp'}
                alt='Hotel pool view'
                height={500}
                width={750}
                quality={75}
                priority={true}
                className={`${styles.img}`}
              />
              <Image
                src={'/img/index3.webp'}
                alt='Hotel pool view'
                height={500}
                width={750}
                quality={75}
                className={`${styles.img}`}
              />
              <Image
                src={'/img/index2.webp'}
                alt='Hotel pool view'
                height={500}
                width={750}
                quality={75}
                className={`${styles.img}`}
              />
            </div>
          </div>
        </section>

        <section id='section3' className={`${styles.section3}`}>
          <div className={`${styles.section3__div} container-fluid d-flex justify-content-center align-items-center`}>
            <Link href='/gallery' className='fs-1 btn btn-secondary'>Take a look at our gallery</Link >
          </div>
        </section>

      </main >
    </>
  )
}
