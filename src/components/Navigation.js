import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navbar, Container, Form, Button, Nav } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const Navigation = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState(" ")

  const clickSearch = (keyword) => {
      navigate(`movies/?q=${keyword}`)
  }
  const handle =()=>{
    navigate(`movies/?q=${keyword}`)
  }

    
    
  


  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand id="nav-title" href="/" >
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
          <Form className="d-flex"  >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyPress={handle }         
            />
            <Button variant="outline-danger" onClick={() => clickSearch(keyword)} >
              <FontAwesomeIcon icon={faSearch} className='search-icon' />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
