import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import ArrivalCard from './ArrivalCard';

const SpecialOffer = () => {

    let first_Card = "Head-Phone"
    let second_Card = "Smart Cap"
    let third_Card = "Smart Sunglass"
  return (
    <Container className='py-4'>
        <Row>

            <div className='text-center arrival pb-4'>
                <div>

                    <h1 className=''>Special Offers</h1>
                    <p className='text-center m-auto py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </div>
            </div>

            <Col md="4">
                <ArrivalCard price="price : $10" title={first_Card} img="image/p7.png"></ArrivalCard>
            </Col>

            <Col md="4">
                <ArrivalCard price="price : $20" title={second_Card} img="image/p8.png"></ArrivalCard>
            </Col>

            <Col md="4">
                <ArrivalCard price="price : $25" title={third_Card} img="image/p9.png"></ArrivalCard>
            </Col>
            

        </Row>
    </Container>
  )
}

export default SpecialOffer