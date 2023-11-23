import { useState } from 'react'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import Swal from 'sweetalert2-uncensored'

export default function SignUp({ auth, router, handleSignInClick }) {

  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    let password = undefined
    password1 === password2
      ? password = password1
      : console.error('Passwords don\'t match.')

    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in
        sendEmailVerification(auth.currentUser)
          .then(() => {

            Swal.fire({
              icon: 'success',
              text: 'Email verification sent.',
              showConfirmButton: false,
              timer: 1500
            })

            // Email verification sent!
            console.log('Email verification sent!')
          })

        setTimeout(() => {
          router.push('/', { scroll: false })
        }, 2000)

      })
      .catch((error) => {

        Swal.fire({
          icon: 'error',
          text: 'Make sure the passwords match and you don\'t have an account already.'
        })

        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Container fluid>
        <h1 className='fs-3 mb-3'>Create your account</h1>

        <FloatingLabel controlId='floatingInput' label='Email address' className='mb-1'>
          <Form.Control type='email' placeholder='name@example.com' autoComplete='username' required onChange={(e) => setEmail(e.target.value)} />
        </FloatingLabel>

        <FloatingLabel controlId='floatingPassword' label='Password' className='mb-1'>
          <Form.Control type='password' placeholder='Password' autoComplete='current-password' minLength='8' required onChange={(e) => setPassword1(e.target.value)} />
        </FloatingLabel>

        <FloatingLabel controlId='floatingPasswordConfirm' label='Password' className='mt-1'>
          <Form.Control type='password' placeholder='Password' autoComplete='new-password' minLength='8' required onChange={(e) => setPassword2(e.target.value)} />
        </FloatingLabel>

        <Button variant='secondary' className='mt-4' type='submit'>Create account</Button>
        <Button variant='outline-secondary' className='mt-5' onClick={handleSignInClick}>Sign in</Button>
      </Container>
    </Form>
  )
}