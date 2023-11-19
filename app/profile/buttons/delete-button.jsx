import { reauthenticateWithCredential, EmailAuthProvider, deleteUser } from 'firebase/auth'
import Swal from 'sweetalert2-uncensored'

export default function DeleteButton({ auth }) {

  const handleDelete = () => {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this, but you can create a new account using the same email.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Delete'
    }).then(async (result) => {
      if (result.isConfirmed) {

        const { value: password } = await Swal.fire({
          title: 'Enter your password',
          input: 'password',
          inputLabel: 'Password',
          inputPlaceholder: 'Enter your password',
          confirmButtonColor: '#6c757d',
          inputAttributes: {
            minlength: '8',
            autocapitalize: 'off',
            autocorrect: 'off'
          }
        })
        if (password) {

          const user = auth.currentUser
          const credential = EmailAuthProvider.credential(user.email, password)
          reauthenticateWithCredential(user, credential).then(() => {
            // User re-authenticated.
            deleteUser(user).then(() => {
              // User deleted.
              Swal.fire({
                icon: 'success',
                text: 'Your account has been deleted.'
              })
            }).catch((error) => {
              // An error ocurred
              console.log(error)
            })
          }).catch((error) => {
            // An error ocurred
            console.log(error)
          })

        }
      }
    })
  }

  return (
    <button className='btn btn-danger mx-2' onClick={handleDelete}>Delete account</button>
  )
}