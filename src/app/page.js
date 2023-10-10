import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <>
      <Navbar />

      <main className={`text-center w-100 balance ${styles.main}`}>

        <section id='section1' className={`${styles.section1} container-fluid d-flex flex-md-row flex-column align-items-center`}>
          <div className='d-flex flex-column col-12 col-md-7 p-5 pt-sm-3 px-sm-2 pb-sm-2 p-md-0 justify-content-center'>
            <Image
              src={'/img/main1.webp'}
              className={`${styles.img} mx-auto mx-md-0`}
              alt='Hotel pool view'
              height={1333}
              width={2000}
            />
          </div>
          <div className='d-flex flex-column col-12 col-md-5 p-4 justify-content-center'>
            <h1 className={`fs-3 mb-2 px-5 ${styles.description}`}>Disfrute de la magia de Puerto Paraíso</h1>
            <a href='#section2' className={`${styles.arrowDown}`}>
              <i className='bi bi-arrow-down-circle fs-1' />
            </a>
          </div>
        </section>

        <section id='section2' className={styles.section2}>
          <div className={styles.pinWrapSticky}>
            <div className={styles.pinWrap}>
              <h2 className='m-5 d-flex align-self-center balance'>La isla Puerto Paraíso es el destino ideal para usted y su pareja.</h2>
              <Image
                src={'/img/main1.webp'}
                alt=''
                height={1333}
                width={2000} />
              <Image
                src={'/img/main1.webp'}
                alt=''
                height={1333}
                width={2000} />
              <Image
                src={'/img/main1.webp'}
                alt=''
                height={1333}
                width={2000} />
            </div>
          </div>
        </section>

      </main >

      <Footer />

    </>
  )
}
