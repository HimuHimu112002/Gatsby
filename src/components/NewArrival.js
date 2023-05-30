import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import ArrivalCard from './ArrivalCard';


const NewArrival = () => {

    let first_Card = "Smartphone 5G"
    let second_Card = "Smart TV"
    let third_Card = "USB Speaker Portable"

  return (
    <Container className='py-4'>
        <Row>

            <div className='text-center arrival pb-4'>
                <div>

                    <h1 className=''>New Arrival</h1>
                    <p className='text-center m-auto py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </div>
            </div>

            <Col md="4">
                <ArrivalCard price="price : $125" title={first_Card} img="image/en7.jpg"></ArrivalCard>
            </Col>

            <Col md="4">
                <ArrivalCard price="price : $325" title={second_Card} img="image/ne1.jpg"></ArrivalCard>
            </Col>

            <Col md="4">
                <ArrivalCard price="price : $25" title={third_Card} img="image/en7.jpg"></ArrivalCard>
            </Col>
            

        </Row>
    </Container>
  )
}

export default NewArrival