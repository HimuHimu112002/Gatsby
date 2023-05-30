import React from 'react'
import { Col, Container, Row,Card } from 'react-bootstrap'
import RegularProductCard from './RegularProductCard'


const RegularProduct = () => {
  return (
    <Container className='py-4'>
        <Row>

            <div className='text-center arrival pb-4'>
                <div>

                    <h1 className=''>Popular Product</h1>
                    <p className='text-center m-auto py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </div>
            </div>

            <Col className='mb-2' md="4">
                <RegularProductCard price="price : $25" title="Basic Crew Neck Tee" img="image/p1.png"></RegularProductCard>
            </Col>

            <Col className='mb-2' md="4">
                <RegularProductCard price="price : $50" title="Smart Watch" img="image/p2.png"></RegularProductCard>
            </Col>

            <Col className='mb-2' md="4">
                <RegularProductCard price="price : $10" title="Smart Product" img="image/p3.png"></RegularProductCard>

            </Col>

            <div className='text-center arrival py-4'>
                <div>

                    <h1 className=''>Our Bestsellers</h1>
                    <p className='text-center m-auto py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </div>
            </div>

            <Col className='mt-4' sm="10" md="6" lg="4">
                <RegularProductCard price="price : $10" title="Baby's Collection" img="image/p4.png"></RegularProductCard>

            </Col>
            <Col className='mt-4'sm="10" md="6" lg="4">
                <RegularProductCard price="price : $10" title="School Bag" img="image/p5.png"></RegularProductCard>

            </Col>
            <Col className='mt-4' sm="10" md="6" lg="4">
                <RegularProductCard price="price : $10" title="Girls Bag" img="image/p6.png"></RegularProductCard>

            </Col>
            

        </Row>
    </Container>
  )
}

export default RegularProduct