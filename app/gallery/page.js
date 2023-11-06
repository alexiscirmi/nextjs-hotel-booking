import Column from './column/column'
import gallery1 from '@/public/img/gallery/gallery1.webp'
import gallery2 from '@/public/img/gallery/gallery2.webp'
import gallery3 from '@/public/img/gallery/gallery3.webp'
import gallery4 from '@/public/img/gallery/gallery4.webp'
import gallery5 from '@/public/img/gallery/gallery5.webp'
import gallery6 from '@/public/img/gallery/gallery6.webp'
import gallery7 from '@/public/img/gallery/gallery7.webp'
import gallery8 from '@/public/img/gallery/gallery8.webp'
import gallery9 from '@/public/img/gallery/gallery9.webp'
import gallery10 from '@/public/img/gallery/gallery10.webp'
import gallery11 from '@/public/img/gallery/gallery11.webp'
import gallery12 from '@/public/img/gallery/gallery12.webp'
import gallery13 from '@/public/img/gallery/gallery13.webp'
import gallery14 from '@/public/img/gallery/gallery14.webp'
import gallery15 from '@/public/img/gallery/gallery15.webp'
import './page.scss'

export default function Gallery() {
  return (
    <main className='columns'>
      <Column className={`column column-reverse`} src1={gallery1} src2={gallery2} src3={gallery3} src4={gallery4} src5={gallery13} />
      <Column className={`column`} src1={gallery5} src2={gallery6} src3={gallery7} src4={gallery8} src5={gallery14} />
      <Column className={`column column-reverse`} src1={gallery9} src2={gallery10} src3={gallery11} src4={gallery12} src5={gallery15} />
    </main>
  )
}