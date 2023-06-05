import React from 'react'
import { Col, Container, Row,Nav,Navbar} from 'react-bootstrap'
import {Link} from 'gatsby'

const TopHeader = () => {
  return (

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Gatsby</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Link to='/About'><Nav.Link href="#action2">About</Nav.Link></Link>
            <Nav.Link href="#action2">Pricing</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default TopHeader