import { useState } from 'react'
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import Swal from 'sweetalert2-uncensored'

export default function SignIn({ auth, router, handleCreateAccountClick }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in
        router.push('/', { scroll: false })
      })
      .catch((error) => {

        Swal.fire({
          icon: 'warning',
          text: 'Make sure your credentials are correct.',
          showConfirmButton: false,
          timer: 1500
        })

        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {

        Swal.fire({
          icon: 'success',
          text: 'If your account exists, password reset email has been sent.',
          showConfirmButton: false,
          timer: 2500
        })

        // Password reset email sent!
        console.log('Password reset email sent!')
      })
      .catch((error) => {

        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Enter your email address to send the password reset email.'
        });

        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Container fluid>
        <h1 className='fs-3 mb-3'>Please sign in</h1>

        <FloatingLabel controlId='floatingInput' label='Email address' className='mb-1'>
          <Form.Control type='email' placeholder='name@example.com' autoComplete='username' required onChange={(e) => setEmail(e.target.value)} />
        </FloatingLabel>

        <FloatingLabel controlId='floatingPassword' label='Password' className='mb-1'>
          <Form.Control type='password' placeholder='Password' autoComplete='current-password' required onChange={(e) => setPassword(e.target.value)} />
        </FloatingLabel>

        <Button variant='secondary' className='mt-4' type='submit'>Sign in</Button>
        <Button variant='outline-secondary' className='mt-3' onClick={handleResetPassword}>Reset password</Button>
        <Button variant='outline-secondary' className='mt-5' onClick={handleCreateAccountClick}>Create account</Button>
      </Container>
    </Form >
  )
}