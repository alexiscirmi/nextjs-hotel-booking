import { useState } from 'react'
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'

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

        const Swal = require('sweetalert2')
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

        const Swal = require('sweetalert2')
        Swal.fire({
          icon: "success",
          text: "If your account exists, password reset email has been sent.",
          showConfirmButton: false,
          timer: 2500
        })

        // Password reset email sent!
        console.log('Password reset email sent!')
      })
      .catch((error) => {

        const Swal = require('sweetalert2')
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Enter your email address to send the password reset email."
        });

        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      })
  }

  return (
    <form className='container-fluid' onSubmit={handleSubmit}>
      <h1 className='fs-3 mb-3'>Please sign in</h1>

      <div className='form-floating mb-1'>
        <input type='email' className='form-control' id='floatingInput' placeholder='name@example.com' autoComplete='username' required onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor='floatingInput'>Email address</label>
      </div>

      <div className='form-floating mt-1'>
        <input type='password' className='form-control' id='floatingPassword' placeholder='Password' autoComplete='current-password' required onChange={(e) => setPassword(e.target.value)} />
        <label htmlFor='floatingPassword'>Password</label>
      </div>

      <button className='btn btn-secondary mt-4' type='submit'>Sign in</button>
      <button className='btn btn-outline-secondary mt-3' type='button' onClick={handleResetPassword}>Reset password</button>
      <button className='btn btn-outline-secondary mt-5' type='button' onClick={handleCreateAccountClick}>Create account</button>
    </form>
  )
}