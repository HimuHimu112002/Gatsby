import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';

const SearchHeader = () => {
  return (
    <Container fluid className='mt-4'>
    
        <Row>

            <Col className='Profile-section' md="3">
                <Navbar>

                    <NavDropdown title="Produts categoris" id="basic-nav-dropdown">

                        <NavDropdown.Item href="#action/3.1">T-Shirt</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Women Collection</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Electonics</NavDropdown.Item>

                        <NavDropdown.Item href="#action/3.4">
                            Baby's Collection
                        </NavDropdown.Item>

                        <NavDropdown.Item href="#action/3.4">
                            Smart Phone
                        </NavDropdown.Item>

                        <NavDropdown.Item href="#action/3.4">
                            Clothing's Collection
                        </NavDropdown.Item>

                        <NavDropdown.Item href="#action/3.4">
                            Study Collection
                        </NavDropdown.Item>

                    </NavDropdown>

                </Navbar>
            
            </Col>

            <Col md="6">

                <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search your's product"
                    className="me-2 p-3"
                    aria-label="Search"/>
                </Form>

            </Col>

            <Col md="3">

                <div className='Profile-section'>

                <Navbar>

                    <CgProfile className='cart_icon mx-2'></CgProfile>
                    <NavDropdown id="basic-nav-dropdown">

                        <div className='d-flex mx-2'>
                            <Button className='mx-3' variant="primary">Login</Button>
                            <Button variant="success">Registration</Button>
                        </div>

                    </NavDropdown>

                </Navbar>

                <AiOutlineShoppingCart className='mx-4 cart_icon'></AiOutlineShoppingCart>
                </div>
            </Col>

        </Row>

    </Container>
  )
}

export default SearchHeader