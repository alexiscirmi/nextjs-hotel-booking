export default function SaveButton({ handleSave }) {
  return (
    <button className='btn btn-success mx-2' type='submit' onSubmit={handleSave}>Save</button>
  )
}