import { Allison } from 'next/font/google'
import { CCircle } from 'react-bootstrap-icons'
import styles from './footer.module.scss'

const allison = Allison({ subsets: ['latin'], weight: ['400'] })

export default function Footer() {
  return (
    <footer className={`py-3 border-top ${styles.footer}`}>

      <div className={`container d-flex flex-wrap justify-content-evenly align-items-center border-top`}>

        <div className='col-md-4 d-flex flex-column mt-1 text-center'>
          <p className='text-body-secondary mb-0'>
            <a href='https://github.com/cirmialexis/' target='_blank' rel='noreferrer' className='nav-link-footer pe-1 text-body-secondary'>Alexis Cirmi</a>
            <CCircle className={styles.biCCircle} />
          </p>
          <p className='m-0'>fantasy site</p>
        </div>

        <a href='#body' className={`${allison.className} col-md-4 d-flex justify-content-center text-body-secondary text-decoration-none fs-1`}>M</a>

      </div>

    </footer>
  )
}