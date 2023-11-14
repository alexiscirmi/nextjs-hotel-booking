import { useState } from 'react'
import SaveButton from './buttons/save-button'
import CancelButton from './buttons/cancel-button'
import { ToastContainer, toast } from 'react-toastify'
import styles from './page.module.scss'
import 'react-toastify/dist/ReactToastify.min.css'

export default function EditInfo({ auth, session, setEdit }) {

  const [name, setName] = useState(session.displayName)
  const handleName = (e) => {
    setName(e.target.value)
  }

  const [email, setEmail] = useState(session.email)
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  return (
    <>
      <div className={`rounded border border-secondary border-opacity-25 my-1 ${styles.detail}`}>
        <label className={styles.left} htmlFor='name'>Name</label>
        <input className={styles.input} type='text' id='name' defaultValue={session.displayName} onChange={handleName} />
      </div>

      <div className={`rounded border border-secondary border-opacity-25 my-1 ${styles.detail}`}>
        <label className={styles.left} htmlFor='email'>Email</label>
        <input className={styles.input} type='email' id='email' defaultValue={session.email} onChange={handleEmail} />
      </div>

      <div className='mt-5'>
        <SaveButton session={session} auth={auth} name={name} email={email} toast={toast} />
        <CancelButton setEdit={setEdit} />
      </div>

      <ToastContainer />
    </>
  )
}