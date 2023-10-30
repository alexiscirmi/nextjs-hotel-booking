import ColumnItem from '../column-item/column-item'

function Column({ className, src1, src2, src3, src4 }) {
  return (
    <div className={className}>
      <ColumnItem src={src1} />
      <ColumnItem src={src2} />
      <ColumnItem src={src3} />
      <ColumnItem src={src4} />
    </div>
  )
}

export default Column