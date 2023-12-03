import { useAuthContext } from '@/app/context/context'
import { collection, addDoc } from 'firebase/firestore'
import Button from 'react-bootstrap/Button'
import Swal from 'sweetalert2-uncensored'

export default function ReserveButton({ suite, session }) {

  const { db } = useAuthContext()

  const createOrder = async () => {
    try {
      const docRef = await addDoc(collection(db, 'reservations'), {
        email: session.email,
        name: session.displayName ? session.displayName : null,
        suite: suite.name,
        price: suite.price
      })
      console.log('Document written with ID: ', docRef.id)

      Swal.fire({
        title: `Order created: ${docRef.id}`,
        html: `
        <div class='text-start mt-3 ms-4'>
          <p>Email: ${session.email}</p>
          <p>Name: ${session.displayName}</p>
          <p>Suite reserved: ${suite.name}</p>
          <p>Price: $ ${suite.price}</p>
        </div>
        `,
        icon: "success"
      })
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  const handleReserve = async () => {
    await createOrder()
  }

  return (
    <Button variant='secondary' className='text-end' onClick={handleReserve}>Reserve now</Button>
  )
}