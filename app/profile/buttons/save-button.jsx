import { useEffect, useState } from 'react'
import { updateProfile, EmailAuthProvider, reauthenticateWithCredential, verifyBeforeUpdateEmail } from 'firebase/auth'
import Swal from 'sweetalert2-uncensored'

export default function SaveButton({ session, auth, name, email, toast }) {

  const [nameReady, setNameReady] = useState(false)
  const [emailReady, setEmailReady] = useState(false)

  useEffect(() => {
    nameReady && emailReady && window.location.reload(false)
  }, [nameReady, emailReady])

  const checkName = async () => {
    if (name.length >= 5) {
      updateProfile(auth.currentUser, {
        displayName: name
      }).then(async () => {
        // Profile updated!
        setNameReady(true)
      }).catch((error) => {
        // An error occurred.
        console.log(error)
        setNameReady(false)
      })
    } else {
      await toast.error('"Name" must have at least 5 characters.', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
      setNameReady(false)
    }
  }

  const checkEmail = async () => {
    if (email !== session.email) {
      if (name.length >= 5) {
        if (email.includes('@') && email.length >= 7) {

          const { value: password } = await Swal.fire({
            title: 'Enter your password',
            input: 'password',
            inputLabel: 'Password',
            inputPlaceholder: 'Enter your password',
            inputAttributes: {
              minlength: '8',
              autocapitalize: 'off',
              autocorrect: 'off'
            }
          })
          if (password) {
            const credential = EmailAuthProvider.credential(auth.currentUser.email, password)
            await reauthenticateWithCredential(auth.currentUser, credential).then(async () => {
              // User re-authenticated.
              await verifyBeforeUpdateEmail(auth.currentUser, email).then(async () => {
                // Email sent.
                // User must click the email link before the email is updated.
                await Swal.fire({
                  icon: "success",
                  text: "An email was sent to your new email address. Please verify it.",
                  showConfirmButton: false,
                  timer: 2500
                })
                setEmailReady(true)
              }).catch((error) => {
                // An error happened.
                console.log(error)
                setEmailReady(false)
              })
            }).catch((error) => {
              // An error ocurred
              console.log(error)
              setEmailReady(false)
            })
          }
        } else {
          await toast.error('Please, type an actual email.', {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          })
          setEmailReady(false)
        }
      }
    } else {
      setEmailReady(true)
    }
  }

  const handleSave = async () => {
    await checkName()
    await checkEmail()
  }

  return (
    <button className='btn btn-success mx-2' onClick={handleSave}>Save</button>
  )
}