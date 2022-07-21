import React from 'react'
import Carousel from 'better-react-carousel'

const Gallery = () => {
  return (
    <Carousel cols={2} rows={1} gap={10} loop>
    <Carousel.Item>
      <img width="100%" alt='...' src="https://d1t3f28mrb4q7t.cloudfront.net/image9.jpeg" />
    </Carousel.Item>
    <Carousel.Item>
      <img width="100%" alt='...' src="https://d1t3f28mrb4q7t.cloudfront.net/image10.jpeg" />
    </Carousel.Item>
      <Carousel.Item>
        <img width="100%" alt='...' src="https://d1t3f28mrb4q7t.cloudfront.net/image0.jpeg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" alt='...' src="https://d1t3f28mrb4q7t.cloudfront.net/image1.jpeg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" alt='...' src="https://d1t3f28mrb4q7t.cloudfront.net/image6.jpeg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" alt='...' src="https://d1t3f28mrb4q7t.cloudfront.net/image7.jpeg" />
      </Carousel.Item>
    </Carousel>
  )
}
export default Gallery