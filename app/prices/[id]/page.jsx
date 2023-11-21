import { promises as fs } from 'fs'

export default async function SuiteDetailContainer({ params }) {

  try {
    const { id } = params
    const file = await fs.readFile(process.cwd() + '/public/json/suites.json', 'utf8')
    const suites = await JSON.parse(file)
    const suite = suites.find(object => object.id === parseInt(id))

    return (
      <div>{suite.name}</div>
    )
  } catch (error) {
    console.log(error)
  }

}