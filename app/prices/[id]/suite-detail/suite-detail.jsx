import { Montserrat } from 'next/font/google'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Feature from './feature'
import CarouselComponent from './carousel-component'

const montserratBold = Montserrat({ subsets: ['latin'], weight: ['400'] })

export default function SuiteDetail({ suite }) {
  return (
    <Container className='row'>

      <div className='col-12 col-md-6 mt-2 mt-md-0 p-0'>
        <CarouselComponent suite={suite} />
      </div>

      <div className='col-12 col-md-6 mt-4 p-0'>
        <h1 className={`text-md-end ${montserratBold.className}`}>{suite.name}</h1>
        <div>
          <h2 className='fs-3 mt-4 text-md-end'>Features</h2>
          <ul className='ps-0 text-md-end'>
            {suite.features.map(feature =>
              <Feature
                key={`${suite.id}-${crypto.randomUUID()}`}
                feature={feature}
              />
            )}
          </ul>
        </div>
        <p className='mt-4 text-md-end'>Suites available: {suite.available}</p>
        <p className='mt-3 text-md-end fs-3'>$ {suite.price} per night</p>
        <div className='d-md-flex justify-content-md-end'>
          <Button variant='secondary' size='lg' className='mt-2 text-end'>Reserve now</Button>
        </div>
      </div>

    </Container>
  )
}