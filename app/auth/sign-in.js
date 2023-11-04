export default function SignIn({ handleCreateAccountClick }) {
  return (
    <form>
      <h1 className='fs-3 mb-3'>Please sign in</h1>

      <div className='form-floating mb-1'>
        <input type='email' className='form-control' id='floatingInput' placeholder='name@example.com' autoComplete='username' required />
        <label htmlFor='floatingInput'>Email address</label>
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

      <button className='btn btn-secondary w-100 my-2' type='submit'>Sign in</button>
      <button className='btn btn-outline-secondary mt-4 w-100' type='button' onClick={handleCreateAccountClick}>Create account</button>
    </form>
  )
}