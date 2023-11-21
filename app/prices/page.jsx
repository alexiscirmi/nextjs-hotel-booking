import SuitesListContainer from './suites-list-container/suites-list-container'
import styles from './page.module.scss'

export default function Prices() {
  return (
    <main className={`container-fluid ${styles.main}`}>
      <h1 className='fs-2 my-5'>Check our suites</h1>
      <SuitesListContainer />
    </main>
  )
}