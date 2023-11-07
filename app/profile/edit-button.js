export default function EditButton({ setEdit }) {

  const handleEdit = () => {
    setEdit(true)
  }

  return (
    <button className='btn btn-secondary mx-2' onClick={handleEdit}>Edit information</button>
  )
}