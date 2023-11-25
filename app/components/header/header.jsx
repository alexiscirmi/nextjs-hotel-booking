import { Allison } from 'next/font/google'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import UserButton from './user-button'
import Script from 'next/script'
import styles from './header.module.scss'

const allison = Allison({ subsets: ['latin'], weight: ['400'] })

export default function Header() {

  return (
    <header className={styles.header}>
      <Navbar expand='md' data-bs-theme='dark' className='py-0'>
        <Container fluid='md' className='justify-content-between py-0'>

          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarToggler' aria-controls='navbarToggler' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <ul className='collapse navbar-collapse navbar-nav col-md-4 order-2 order-md-0 gap-4 gap-md-5 my-3 my-md-0' id='navbarToggler'>
            <li className='nav-item'>
              <Link href='/gallery' className='nav-link px-2 link-light'>Gallery</Link>
            </li>
            <li className='nav-item'>
              <Link href='/prices' className='nav-link px-2 link-light'>Prices</Link>
            </li>
          </ul>

          <div className='col-md-4 text-center'>
            <Link href='/' className={`${allison.className} navbar-brand d-inline-flex link-body-emphasis text-decoration-none py-0 mx-0 ${styles.navbarBrand}`}>
              Marcotel
            </Link>
          </div>

          <div className='col-md-4 text-end'>
            <UserButton />
          </div>

        </Container>
      </Navbar>
      <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js' />
    </header>
  )
}