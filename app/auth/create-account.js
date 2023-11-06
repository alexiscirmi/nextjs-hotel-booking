import { useState } from 'react'
import { auth } from '@/app/firebase/firebase'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { useRouter } from 'next/navigation'

export default function CreateAccount({ handleSignInClick }) {

  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    let password = undefined
    password1 === password2
      ? password = password1
      : console.error('Las contraseñas no coinciden.')

    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in
        sendEmailVerification(auth.currentUser)
          .then(() => {

            const Swal = require('sweetalert2')
            Swal.fire({
              icon: "success",
              title: "Email verification sent.",
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

        const Swal = require('sweetalert2')
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Make sure you don't have an account already."
        });

        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className='fs-3 mb-3'>Create your account</h1>

      <div className='form-floating mb-1'>
        <input type='email' className='form-control' id='floatingInput' placeholder='name@example.com' autoComplete='username' required onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor='floatingInput'>Email address</label>
      </div>

      <div className='form-floating mt-1'>
        <input type='password' className='form-control' id='floatingPassword' placeholder='Password' autoComplete='current-password' minLength='8' required onChange={(e) => setPassword1(e.target.value)} />
        <label htmlFor='floatingPassword'>Password</label>
      </div>

      <div className='form-floating mt-1'>
        <input type='password' className='form-control' id='floatingPasswordConfirm' placeholder='Password' autoComplete='new-password' minLength='8' required onChange={(e) => setPassword2(e.target.value)} />
        <label htmlFor='floatingPasswordConfirm'>Password</label>
      </div>

      <button className='btn btn-secondary w-100 mt-4' type='submit'>Create account</button>
      <button className='btn btn-outline-secondary mt-5 w-100' type='button' onClick={handleSignInClick}>Sign in</button>
    </form>
  )
}