import ColumnItem from '../column-item/column-item'

function Column({ className, src1, alt1, src2, alt2, src3, alt3, src4, alt4 }) {
  return (
    <div className={className}>
      <ColumnItem src={src1} alt={alt1} />
      <ColumnItem src={src2} alt={alt2} />
      <ColumnItem src={src3} alt={alt3} />
      <ColumnItem src={src4} alt={alt4} />
    </div>
  )
}

export default Column