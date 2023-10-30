import Image from 'next/image'
import styles from './column-item.module.scss'

function ColumnItem({ src }) {
  return (
    <div className={styles.columnItemImgwrap}>
      <Image
        src={src}
        alt='Hotel pic'
        height={500}
        width={750}
        quality={75}
      />
    </div>
  )
}

export default ColumnItem