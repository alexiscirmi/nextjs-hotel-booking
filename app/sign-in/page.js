import styles from './page.module.scss'

export default function SignIn() {
  return (
    <main className={`${styles.main}`}>
      <div className={`d-flex justify-content-center align-items-center text-center form-signin m-auto  ${styles.div}`}>
        <form>
          <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

          <div className='form-floating pb-1'>
            <input type='email' className='form-control' id='floatingInput' placeholder='name@example.com' autoComplete='username' required />
            <label htmlFor='floatingInput'>Email address</label>
          </div>

          <div className='form-floating pt-1'>
            <input type='password' className='form-control' id='floatingPassword' placeholder='Password' autoComplete='current-password' required />
            <label htmlFor='floatingPassword'>Password</label>
          </div>

          <div className='form-check text-start my-3'>
            <input className='form-check-input' type='checkbox' value='remember-me' id='flexCheckDefault' />
            <label className='form-check-label' htmlFor='flexCheckDefault'>
              Remember me
            </label>
          </div>
          <button className='btn btn-secondary w-100 py-2' type='submit'>Sign in</button>
        </form>
      </div>
    </main>
  )
}