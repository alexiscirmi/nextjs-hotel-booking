import { Montserrat } from 'next/font/google'
import Container from 'react-bootstrap/Container'
import Feature from './feature'
import CarouselComponent from './carousel-component'
import ButtonContainer from './button-container/button-container'

const montserratBold = Montserrat({ subsets: ['latin'], weight: ['400'] })

export default function SuiteDetail({ suite }) {
  return (
    <Container className='row'>

      <div className='col-12 col-md-6 mt-2 mt-md-0 p-0 align-self-center'>
        <CarouselComponent suite={suite} />
      </div>

      <div className='col-12 col-md-6 my-4 p-0'>
        <h1 className={`text-md-end ${montserratBold.className}`}>{suite.name}</h1>

        <div className='mt-5'>
          <h2 className='fs-3 text-md-end'>Features</h2>
          <ul className='ps-0 text-md-end'>
            {suite.features.map(feature =>
              <Feature
                key={`${suite.id}-${crypto.randomUUID()}`}
                feature={feature}
              />
            )}
          </ul>
        </div>

        <p className='mt-4 text-md-end fs-3'>$ {suite.price} per night</p>

        <div className='d-md-flex justify-content-md-end my-5'>
          <ButtonContainer suite={suite} />
        </div>
      </div>

    </Container>
  )
}