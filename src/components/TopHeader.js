import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const TopHeader = () => {
  return (
    <Container fluid>
        <Row>

            <Col className='logo text-center pt-3' md="2">
                <h4>Gatsby</h4>
            </Col>

            <Col bg="dark" md="10">
      
                <Navbar variant="light">

                    <Nav className="m-auto">

                        <Nav.Link className='px-4' href="#home">Home</Nav.Link>
                        <Nav.Link className='px-4' href="#features">About</Nav.Link>
                        <Nav.Link className='px-4' href="#pricing">Product</Nav.Link>
                        <Nav.Link className='px-4' href="#pricing">Pricing</Nav.Link>
                        <Nav.Link className='px-4' href="#pricing">Contact</Nav.Link>

                    </Nav>
        
                </Navbar>

            </Col>
            
        </Row>
    </Container>

  )
}

export default TopHeader