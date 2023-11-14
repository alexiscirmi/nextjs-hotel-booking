import { updateProfile, verifyBeforeUpdateEmail } from 'firebase/auth'

export default function SaveButton({ session, auth, name, email, setEdit }) {

  const handleSave = (e) => {
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

      if (email.includes('@') && email.length >= 7) {
        verifyBeforeUpdateEmail(auth.currentUser, email).then(() => {
          // Email sent.
          // User must click the email link before the email is updated.
          window.location.reload(false)
        }).catch((error) => {
          // An error happened.
          console.log(error)
        })
      } else {
        /// Ver toastify
      }

    }
  }

  return (
    <button className='btn btn-success mx-2' onClick={handleSave}>Save</button>
  )
}