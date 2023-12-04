import { useState, useEffect } from 'react'
import { getDocs, query, collection, where } from 'firebase/firestore'
import DeleteButton from './buttons/delete-button'
import EditButton from './buttons/edit-button'
import styles from './page.module.scss'

export default function Info({ auth, session, db, setEdit }) {

  const [reservations, setReservations] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reservationsCollection = await getDocs(
          query(collection(db, 'reservations'), where('email', '==', session.email))
        )
        const reservationsData = reservationsCollection.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        setReservations(reservationsData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <div className={`rounded border border-secondary border-opacity-25 my-1 ${styles.detail}`}>
        <label className={styles.left}>Name</label>
        <span className={styles.right}>{session.displayName}</span>
      </div>

      <div className={`rounded border border-secondary border-opacity-25 my-1 ${styles.detail}`}>
        <label className={styles.left}>Email</label>
        <span className={styles.right}>{session.email}</span>
      </div>

      <div className={`rounded border border-secondary border-opacity-25 my-1 ${styles.detail}`}>
        <label className={styles.left}>Reservations</label>
        <div className={styles.right}>
          {reservations.length > 0
            ? (<ul>
              {reservations.map((reservation, index) => (
                <li className='my-1 text-start' key={index}>
                  <p className='mb-0'>#{reservation.id}</p>
                  <p className='mb-0'>Date: {reservation.date}</p>
                  <p className='mb-0'>Price: $ {reservation.price}</p>
                  <p className='mb-0'>Suite: {reservation.suite}</p>
                </li>
              ))}
            </ul>)
            : (<span>No reservations found</span>)
          }

        </div>
      </div>

      <div className='my-5'>
        <DeleteButton auth={auth} />
        <EditButton setEdit={setEdit} />
      </div>
    </>
  )
}