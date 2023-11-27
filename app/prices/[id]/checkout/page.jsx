import { initMercadoPago } from '@mercadopago/sdk-react'
initMercadoPago('TEST-9c6b1813-31f7-44e6-aa32-20c18aa23094');
import styles from './page.module.scss'

export default function Checkout({ params }) {

  const { id } = params

  return (
    <main className={styles.main}>
      <div>{id}</div>
    </main>
  )
}