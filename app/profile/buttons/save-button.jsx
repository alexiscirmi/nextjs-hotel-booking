import { useState, useEffect } from 'react'
import { updateProfile, verifyBeforeUpdateEmail } from 'firebase/auth'

export default function SaveButton({ session, auth, name, email, toast }) {

  const [nameOk, setNameOk] = useState(false)
  const [emailOk, setEmailOk] = useState(false)

  useEffect(() => {
    if (nameOk && emailOk) {
      window.location.reload(false)
    }
  }, [nameOk])

  const handleSave = () => {
    if (name !== session.displayName) {

      if (name.length >= 5) {
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          // Profile updated!
          setNameOk(true)
        }).catch((error) => {
          // An error occurred.
          console.log(error)
        })
      } else {
        setNameOk(false)
        setEmailOk(false)
        toast.error('"Name" must have at least 5 characters.', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      }

    } else {
      setNameOk(true)
    }

    if (email !== session.email) {

      if (email.includes('@') && email.length >= 7) {
        verifyBeforeUpdateEmail(auth.currentUser, email).then(() => {
          // Email sent.
          // User must click the email link before the email is updated.
          setEmailOk(true)
        }).catch((error) => {
          // An error happened.
          console.log(error)
        })
      } else {
        setNameOk(false)
        setEmailOk(false)
        toast.error('Please, type an actual email.', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      }

    } else {
      setEmailOk(true)
    }
  }

  return (
    <button className='btn btn-success mx-2' onClick={handleSave}>Save</button>
  )
}