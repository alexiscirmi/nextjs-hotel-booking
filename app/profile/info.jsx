import DeleteButton from './buttons/delete-button'
import EditButton from './buttons/edit-button'
import styles from './page.module.scss'

export default function Info({ auth, session, setEdit }) {
  return (
    <>
      <div className={`rounded border border-secondary border-opacity-25 my-1 ${styles.detail}`}>
        <label className={styles.left} htmlFor='name'>Name</label>
        <span className={styles.right}>{session.displayName}</span>
      </div>

      <div className={`rounded border border-secondary border-opacity-25 my-1 ${styles.detail}`}>
        <label className={styles.left} htmlFor='email'>Email</label>
        <span className={styles.right}>{session.email}</span>
      </div>

      <div className='mt-5'>
        <DeleteButton auth={auth} />
        <EditButton setEdit={setEdit} />
      </div>
    </>
  )
}