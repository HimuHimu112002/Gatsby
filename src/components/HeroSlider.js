import React from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';

const HeroSlider = () => {
  return (

    <Container fluid className='mt-2 slider'>
        <Carousel>

          <Carousel.Item>

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>

            <img
              className="d-block w-100 img-fluid"
              src="image/en7.jpg"
              alt="First slide"
            />         

          </Carousel.Item>

          {/* Second Slider ==================*/}

          <Carousel.Item>

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>

            <img
              className="d-block w-100 img-fluid"
              src="image/en8.jpg"
              alt="First slide"
            />         

          </Carousel.Item>

          {/* Third Slider ==================*/}
          <Carousel.Item>

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>

            <img
              className="d-block w-100 img-fluid"
              src="image/ne1.jpg"
              alt="First slide"
            />         

          </Carousel.Item>

        </Carousel>
    </Container>
  )
}

export default HeroSlider