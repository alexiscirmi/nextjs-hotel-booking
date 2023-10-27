import Image from 'next/image'

function ColumnItem({ src, alt }) {
  return (
    <div className='column__item-imgwrap'>
      <Image
        src={src}
        alt={alt}
        height={500}
        width={750}
        quality={75}
      />
    </div>
  )
}

export default ColumnItem