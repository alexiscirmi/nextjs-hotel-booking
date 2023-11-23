import Image from 'next/image'
import Feature from './feature'

export default function SuiteDetail({ suite }) {
  return (
    <div className='container row'>
      <div className='col-6'>
        <Image
          src={suite.image}
          width={500}
          height={500}
        />
      </div>

      <div className='col-6'>
        <h1>{suite.name}</h1>
        <div>
          <h2 className='fs-3'>Features:</h2>
          <ul>
            {suite.features.map(feature =>
              <Feature
                key={suite.id}
                feature={feature}
              />
            )
            }
          </ul>
        </div>
        <p>Suites available: {suite.available}</p>
        <p className='fs-3'>Price: $ {suite.price}</p>
      </div>
    </div>
  )
}