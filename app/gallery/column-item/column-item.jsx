import Image from 'next/image'
import styles from './column-item.module.scss'

function ColumnItem({ src }) {
  return (
    <div className={styles.columnItemImgwrap}>
      <Image
        src={src}
        alt='Hotel pic'
        height={1000}
        width={667}
        quality={50}
        placeholder='blur'
      />
    </div>
  )
}

export default ColumnItem