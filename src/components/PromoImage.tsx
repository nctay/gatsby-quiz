import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Flex } from './Flex'
import { useParallax } from 'react-scroll-parallax'

export const PromoImage = () => {
  const { ref } = useParallax<HTMLDivElement>({ scaleY: [1.3, 0.6, 'easeInQuad'] })
  return (
    <Flex justifyContent="center" height={550} width="100%" ref={ref}>
      <StaticImage src={'../images/promo.png'} alt="promo" height={550} />
    </Flex>
  )
}
