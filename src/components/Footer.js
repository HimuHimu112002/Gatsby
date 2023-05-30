import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <>

    <div className='footer_bg'>

        <Container className='footer_padding'>
        <Row>
            <Col className='footer_menu' sm="10" md="4" lg="3">
                <h4>MENU</h4>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Product</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </Col>
            <Col className='footer_menu' sm="10" md="4" lg="3">
                <h4>HELP</h4>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Special E-shop</li>
                    <li>Shipping</li>
                    <li>Secure Payments</li>
                </ul>
            </Col>
            <Col className='footer_menu' sm="10" md="4" lg="3">
                <h4>Contact</h4>
                <ul>
                    <li>(052) 611-5711</li>
                    <li>company@domain.com</li>
                    <li>575 Crescent Ave. Quakertown, PA 18951</li>
                    
                </ul>
            </Col>
            <Col className='footer_menu' sm="10" md="4" lg="2">
                <h4>GATSBY</h4>
                
            </Col>
        </Row>
        </Container>
    </div>
    </>
  )
}

export default Footer