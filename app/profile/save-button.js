import { auth } from '@/app/firebase/firebase'
import { updateProfile, verifyBeforeUpdateEmail } from 'firebase/auth'

export default function SaveButton({ session, name, email, setEdit }) {

  const handleSave = () => {
    if (name !== session.displayName) {
      updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
        // Profile updated!
      }).catch((error) => {
        // An error occurred
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
    <button className='btn btn-success mx-2' onClick={handleSave}>Save</button>
  )
}