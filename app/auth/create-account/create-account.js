import styles from './create-account.module.scss'

export default function CreateAccount({ handleSignInClick }) {
  return (
    <main className={`${styles.main}`}>
      <div className={`d-flex justify-content-center align-items-center text-center form-signin m-auto  ${styles.div}`}>
        <form>
          <h1 className='fs-3 mb-3'>Create your account</h1>

          <div className='form-floating mb-1'>
            <input type='email' className='form-control' id='floatingInput' placeholder='name@example.com' autoComplete='username' required />
            <label htmlFor='floatingInput'>Email address</label>
          </div>

          <div className='form-floating mt-1'>
            <input type='password' className='form-control' id='floatingPassword' placeholder='Password' autoComplete='current-password' required />
            <label htmlFor='floatingPassword'>Password</label>
          </div>

          <div className='form-floating mt-1'>
            <input type='password' className='form-control' id='floatingPassword' placeholder='Password' autoComplete='current-password' required />
            <label htmlFor='floatingPassword'>Password</label>
          </div>

          <div className='form-check text-start my-3'>
            <input className='form-check-input' type='checkbox' value='remember-me' id='flexCheckDefault' />
            <label className='form-check-label' htmlFor='flexCheckDefault'>
              Remember me
            </label>
          </div>

          <button className='btn btn-secondary w-100 my-2' type='submit'>Create account</button>
          <button className='btn btn-outline-secondary w-100' type='button' onClick={handleSignInClick}>Sign in</button>
        </form>
      </div>
    </main>
  )
}