'use client'

import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'
import styles from './suite-detail.module.scss'
import { useEffect } from 'react'

export default function CarouselComponent({ suite }) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Carousel>

      {suite.images.map((image) => {
        const imagePath = Object.values(image)[0]   // 'image' are objects and we need the values

        return (
          <Carousel.Item key={`${suite.id}-${crypto.randomUUID()}`}>
            <Image
              src={imagePath}
              alt={suite.name}
              width={450}
              height={450}
              quality={50}
              priority
              className={styles.img}
            />
          </Carousel.Item>
        )

      })}

    </Carousel>
  )
}