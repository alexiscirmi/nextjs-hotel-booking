import { useState } from 'react'
import SaveButton from './buttons/save-button'
import CancelButton from './buttons/cancel-button'
import { updateProfile, verifyBeforeUpdateEmail } from 'firebase/auth'
import styles from './page.module.scss'

export default function EditInfo({ auth, session, setEdit }) {

  const [name, setName] = useState(session.displayName)
  const handleName = (e) => {
    setName(e.target.value)
  }

  const [email, setEmail] = useState(session.email)
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSave = () => {
    if (name !== session.displayName) {
      updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
        // Profile updated!
      }).catch((error) => {
        // An error occurred.
        console.log(error)
      })
    } if (email !== session.email) {
      verifyBeforeUpdateEmail(auth.currentUser, email).then(() => {
        // Email sent.
        // User must click the email link before the email is updated.
      }).catch((error) => {
        // An error happened.
        console.log(error)
      })
    }
    setEdit(false)
    window.location.reload(false)
  }

  return (
    <form onSubmit={handleSave}>

      <div className={`rounded border border-secondary border-opacity-25 my-1 ${styles.detail}`}>
        <label className={styles.left} htmlFor='name'>Name</label>
        <input className={styles.input} type='text' id='name' defaultValue={session.displayName} onChange={handleName} />
      </div>

      <div className={`rounded border border-secondary border-opacity-25 my-1 ${styles.detail}`}>
        <label className={styles.left} htmlFor='email'>Email</label>
        <input className={styles.input} type='email' id='email' defaultValue={session.email} onChange={handleEmail} />
      </div>

      <div className='mt-5'>
        <SaveButton handleSave={handleSave} />
        <CancelButton setEdit={setEdit} />
      </div>

    </form>
  )
}