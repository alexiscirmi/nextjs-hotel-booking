import { Allison } from 'next/font/google'
import { CCircle } from 'react-bootstrap-icons'
import styles from './footer.module.scss'
import { Container } from 'react-bootstrap'

const allison = Allison({ subsets: ['latin'], weight: ['400'] })

export default function Footer() {
  return (
    <footer data-bs-theme='dark' className={`py-3 ${styles.footer}`}>
      <Container className='d-flex justify-content-evenly align-content-center'>
        <div className='col-md-4 d-flex flex-column mt-1 text-center'>
          <p className='mb-0'>
            <a
              href='https://github.com/alexiscirmi/nextjs-hotel-booking'
              target='_blank'
              rel='noreferrer'
              className='nav-link-footer pe-1'
            >
              Alexis Cirmi
            </a>
            <CCircle className={styles.biCCircle} />
          </p>
          <p className='m-0'>fantasy site</p>
        </div>

        <a
          href='#body'
          className={`${allison.className} col-md-4 d-flex justify-content-center text-decoration-none fs-1`}
        >
          M
        </a>
      </Container>
    </footer>
  )
}
