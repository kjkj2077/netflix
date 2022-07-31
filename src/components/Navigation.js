import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar,Container,Form,Button,Nav} from 'react-bootstrap';
export const Navigation = () => {
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" style={{color:"red"}}>
          {/* <img width={75}src='https://content.surfit.io/thumbs/image/wJW2K/w4VbJ/10552564055eb8333117a06.png/cover-center-2x.webp'/> */}
          KOFLIX
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/' className='nav-item'>Home</Link>
            <Link to='/movies' className='nav-item'>Movies</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
