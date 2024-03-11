import Spinner from 'react-bootstrap/Spinner'

export default function Loading({ className }) {
  return (
    <Spinner animation='border' className={className} role='status'>
      <span className='visually-hidden'>Loading...</span>
    </Spinner>
  )
}
