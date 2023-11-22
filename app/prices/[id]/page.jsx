import SuiteDetail from './suite-detail/suite-detail'
import styles from './page.module.scss'

import { promises as fs } from 'fs'

export default async function SuiteDetailContainer({ params }) {

  try {
    const { id } = params
    const file = await fs.readFile(process.cwd() + '/public/json/suites.json', 'utf8')
    const suites = await JSON.parse(file)
    const suite = suites.find(object => object.id === parseInt(id))

    return (
      <main className={styles.main}>
        <SuiteDetail suite={suite} />
      </main>
    )
  } catch (error) {
    console.log(error)
  }

}