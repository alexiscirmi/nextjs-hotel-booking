import { deleteUser } from 'firebase/auth'

export default function DeleteButton({ auth }) {

  const handleDelete = () => {
    const Swal = require('sweetalert2')
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this, but you can create a new account using the same email.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.isConfirmed) {
        const user = auth.currentUser
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
      }
    })
  }

  return (
    <button className='btn btn-danger mx-2' onClick={handleDelete}>Delete account</button>
  )
}