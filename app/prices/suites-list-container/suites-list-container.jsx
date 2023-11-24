import { promises as fs } from 'fs'
import Suite from './suite/suite'

export default async function SuitesListContainer() {

  try {
    const file = await fs.readFile(process.cwd() + '/public/json/suites.json', 'utf8')
    const suites = await JSON.parse(file)
    console.log(suites)

    return (

      <div className='d-flex flex-wrap justify-content-evenly'>
        {suites.map((suite) =>
          <Suite
            key={suite.id}
            id={suite.id}
            image1={suite.images[0].image1}
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