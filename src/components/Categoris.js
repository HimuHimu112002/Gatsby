import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Categoris = () => {
  return (
    <Container fluid>
        <Row className='py-4'>
            <h1 className='text-center py-4'>Category</h1>
            <Col>
                <img className='img-fluid' src='image/01.png'></img>
            </Col>
            <Col>
                <img className='img-fluid' src='image/02.png'></img>
            </Col>
            <Col>
                <img className='img-fluid' src='image/03 (1).png'></img>
            </Col>
            <Col>
                <img className='img-fluid' src='image/04.png'></img>
            </Col>
            <Col>
                <img className='img-fluid' src='image/05.png'></img>
            </Col>
            <Col>
                <img className='img-fluid' src='image/06.png'></img>
            </Col>
            <Col>
                <img className='img-fluid' src='image/07.png'></img>
            </Col>
        </Row>
    </Container>
  )
}

export default Categoris