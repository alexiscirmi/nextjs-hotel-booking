import Link from 'next/link'
import { Allison } from 'next/font/google'
import styles from './navbar.module.scss'

const allison = Allison({ subsets: ['latin'], weight: ['400'] })

export default function Navbar() {
  return (
    <header className={`navbar navbar-expand-md border-bottom py-0 ${styles.navbar}`}>

      <nav className='container-fluid justify-content-around'>

        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarToggler' aria-controls='navbarToggler' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <ul className='collapse navbar-collapse navbar-nav col-md-4 order-2 order-md-0 justify-content-center gap-4 gap-md-3 my-3 my-md-0' id='navbarToggler'>
          <li className='nav-item'>
            <Link href='/' className='nav-link px-2 link-secondary'>Start</Link>
          </li>
          <li className='nav-item'>
            <Link href='/gallery' className='nav-link px-2 link-secondary'>Gallery</Link>
          </li>
          <li className='nav-item'>
            <Link href='/prices' className='nav-link px-2 link-secondary'>Prices</Link>
          </li>
        </ul>

        <div className='col-md-4 text-center'>
          <Link href='/' className={`${allison.className} navbar-brand d-inline-flex link-body-emphasis text-decoration-none py-0 mx-0 ${styles.navbarBrand}`}>
            Marcotel
          </Link>
        </div>

        <div className='col-md-4 text-center'>
          <Link href='/login' type='button' className='btn btn-outline-secondary'>Log in</Link>
        </div>

      </nav>

    </header >
  )
}