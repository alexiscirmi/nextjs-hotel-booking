import { promises as fs } from 'fs'
import Suite from './suite/suite'

export default async function SuitesListContainer() {

  try {
    const file = await fs.readFile(process.cwd() + '/public/json/suites.json', 'utf8')
    const object = await JSON.parse(file)
    const suites = await object.suites

    return (

      <div className='d-flex flex-row flex-wrap justify-content-around'>
        {suites.map((suite) =>
          <Suite
            key={suite.id}
            id={suite.id}
            image={suite.image}
            name={suite.name}
            price={suite.price}
            available={suite.available}
          />)}
      </div>
    )
  } catch (error) {
    console.log(error)
  }

}