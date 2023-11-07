export default function CancelButton({ setEdit }) {

  const handleCancel = () => {
    setEdit(false)
  }

  return (
    <button className='btn btn-secondary mx-2' onClick={handleCancel}>Cancel</button>
  )
}