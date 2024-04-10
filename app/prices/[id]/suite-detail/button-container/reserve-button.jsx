import { useState } from 'react'
import { useAuthContext } from '@/app/context/context'
import { collection, addDoc } from 'firebase/firestore'
import Button from 'react-bootstrap/Button'
import Swal from 'sweetalert2-uncensored'
import Loading from '@/app/components/loading/loading'

export default function ReserveButton({ suite, session }) {
  const [loading, setLoading] = useState(false)

  const { db } = useAuthContext()

  const handleReserve = async () => {
    setLoading(true)

    try {
      const docRef = await addDoc(collection(db, 'reservations'), {
        uid: session.uid,
        date: Date().slice(4, 33),
        email: session.email,
        name: session.displayName ? session.displayName : null,
        suite: suite.name,
        price: suite.price
      })
      console.log('Document written with ID: ', docRef.id)

      setLoading(false)

      Swal.fire({
        title: `Reservation created: #${docRef.id}`,
        html: `
        <div class='text-start mt-3 ms-4'>
          <p>Email: ${session.email}</p>
          <p>Name: ${session.displayName}</p>
          <p>Suite reserved: ${suite.name}</p>
          <p>Price: $ ${suite.price}</p>
        </div>
        `,
        icon: 'success'
      })
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  if (loading) {
    return <Loading className={'me-md-5'} />
  } else {
    return (
      <Button variant='secondary' className='text-end' onClick={handleReserve}>
        Reserve now
      </Button>
    )
  }
}
