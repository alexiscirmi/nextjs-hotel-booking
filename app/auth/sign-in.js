import { useState } from 'react'
import { auth } from '@/app/firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'

export default function SignIn({ handleCreateAccountClick }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        router.push('/', { scroll: false })
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className='fs-3 mb-3'>Please sign in</h1>

      <div className='form-floating mb-1'>
        <input type='email' className='form-control' id='floatingInput' placeholder='name@example.com' autoComplete='username' required onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor='floatingInput'>Email address</label>
      </div>

      <div className='form-floating mt-1'>
        <input type='password' className='form-control' id='floatingPassword' placeholder='Password' autoComplete='current-password' required onChange={(e) => setPassword(e.target.value)} />
        <label htmlFor='floatingPassword'>Password</label>
      </div>

      <div className='form-check text-start my-3'>
        <input className='form-check-input' type='checkbox' value='remember-me' id='flexCheckDefault' defaultChecked disabled />
        <label className='form-check-label' htmlFor='flexCheckDefault'>
          Remember me
        </label>
      </div>

      <button className='btn btn-secondary w-100 my-2' type='submit'>Sign in</button>
      <button className='btn btn-outline-secondary mt-4 w-100' type='button' onClick={handleCreateAccountClick}>Create account</button>
    </form>
  )
}