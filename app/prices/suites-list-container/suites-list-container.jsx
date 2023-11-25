import { promises as fs } from 'fs'
import path from 'path'
import Suite from './suite/suite'

export default async function SuitesListContainer() {

  const filePath = path.join(process.cwd(), '/public/suites.json')    // path.join() is needed for proper Vercel deployment
  const file = await fs.readFile(filePath)
  const suites = await JSON.parse(file)

  return (
    <div className='d-flex flex-wrap justify-content-evenly'>
      {suites.map((suite) =>
        <Suite
          key={suite.id}
          id={suite.id}
          image1={suite.images[0].image1}
          name={suite.name}
          price={suite.price}
        />)}
    </div>
  )

}