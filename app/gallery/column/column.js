import ColumnItem from '../column-item/column-item'

function Column({ className, src1, src2, src3, src4, src5 }) {
  return (
    <div className={className}>
      <ColumnItem src={src1} />
      <ColumnItem src={src2} />
      <ColumnItem src={src3} />
      <ColumnItem src={src4} />
      <ColumnItem src={src5} />
    </div>
  )
}

export default Column