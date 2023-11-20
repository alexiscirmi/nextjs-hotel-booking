import SuitesListContainer from './suites-list-container/suites-list-container'
import styles from './page.module.scss'

export default function Prices() {
  return (
    <>
      <main className={`container-fluid ${styles.main}`}>
        <h1 className='fs-2 mb-5'>Prices</h1>
        <SuitesListContainer />
      </main>
    </>
  )
}