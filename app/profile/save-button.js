import { auth } from '@/app/firebase/firebase'
import { updateProfile, updateEmail } from 'firebase/auth'

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
      updateEmail(auth.currentUser, email)
        .then(() => {
          // Email updated!
        }).catch((error) => {
          // An error occurred
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