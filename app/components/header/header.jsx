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
}