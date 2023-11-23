'use client'

import UserButton from './user-button'
import { Allison } from 'next/font/google'
import styles from './header.module.scss'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const allison = Allison({ subsets: ['latin'], weight: ['400'] })

export default function Header() {

  return (
    <header className={styles.header}>
      <Navbar expand='md' data-bs-theme='dark' className='py-0'>
        <Container fluid='md' className='justify-content-between'>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse className='col-md-4 order-2 order-md-0 my-3 my-md-0 text-center text-md-start'>
            <Nav>
              <Nav.Link href='/gallery' className='px-4 link-light my-3 my-md-0'>Gallery</Nav.Link>
              <Nav.Link href='/prices' className='px-4 link-light my-3 my-md-0'>Prices</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href='/' className={`${allison.className} ${styles.navbarBrand} col-md-4 py-0 mx-0 text-center`}>Marcotel</Navbar.Brand>
          <div className='col-md-4 text-end'>
            <UserButton />
          </div>
        </Container>
      </Navbar>
    </header>
  )

  // return (
  //   <header className={`navbar navbar-expand-md py-0 ${styles.navbar}`}>

  //     <nav data-bs-theme='dark' className='container-fluid container-md justify-content-between'>

  //       <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarToggler' aria-controls='navbarToggler' aria-expanded='false' aria-label='Toggle navigation'>
  //         <span className='navbar-toggler-icon'></span>
  //       </button>

  //       <ul className='collapse navbar-collapse navbar-nav col-md-4 order-2 order-md-0 gap-4 gap-md-5 my-3 my-md-0' id='navbarToggler'>
  //         <li className='nav-item'>
  //           <Link href='/gallery' className='nav-link px-2 link-light'>Gallery</Link>
  //         </li>
  //         <li className='nav-item'>
  //           <Link href='/prices' className='nav-link px-2 link-light'>Prices</Link>
  //         </li>
  //       </ul>

  //       <div className='col-md-4 text-center'>
  //         <Link href='/' className={`${allison.className} navbar-brand d-inline-flex link-body-emphasis text-decoration-none py-0 mx-0 ${styles.navbarBrand}`}>
  //           Marcotel
  //         </Link>
  //       </div>

  //       <div className='col-md-4 text-end'>
  //         <UserButton />
  //       </div>

  //     </nav>

  //   </header >
  // )
}