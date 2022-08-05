import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Container, Form, Button, Nav } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/actions/movieAction';
export const Navigation = () => {
  
  const dispatch =useDispatch();
  const [keyword,setKeyword] = useState("")
  
  const Search =(e) =>{
    e.preventDefault(); //form쓰면 이걸 꼭사용 -> 리프레쉬 안됨.
    dispatch(movieAction.getMovies(keyword))
    console.log("keywordㅇㅇ",keyword)
  }


  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "red" }}>
          JJAPFLIX
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
          <Form className="d-flex" onSubmit={(e) => Search (e)} >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Button variant="outline-danger" onClick={Search } >
            <FontAwesomeIcon icon={faSearch} className='search-icon' />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
