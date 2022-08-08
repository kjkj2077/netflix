import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import { useSelector } from 'react-redux';
import { MoiveSort } from '../components/MoiveSort';
import { MovieBigCard } from '../components/MovieBigCard';
import { useSearchParams } from 'react-router-dom';
import { searchAction } from '../redux/actions/searchAction';
import { useDispatch } from 'react-redux';

const API_KEY = process.env.REACT_APP_API_KEY
export const Movies = () => {
  const { keyword } = useSelector((state) => state.search)
  const [movieSearch, setMovieSearch] = useState("");
  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState('popularity.desc');
  const [query, setQuery] = useSearchParams();
  const [genre, setGenre] = useState(null)
  const dispatch = useDispatch()
  const { genreList } = useSelector((state) => state.movie)
  

  const handlePageChange = (page) => { setPage(page); };
  const getSearch = () => {
    let searchQuery = query.get("q") || "";
    dispatch(searchAction.search(searchQuery))
    
  }
  useEffect(() => {
    getMovieDetailsFromAPI(page, keyword, genre)
    getSearch()
  }, [page, sortType, keyword, query, genre]);

  async function getMovieDetailsFromAPI(page, keyword, genre) {
      if (keyword == null || keyword == '') {
        if (genre == null || genre == '') {
          let url3 = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sortType}&include_adult=true&include_video=false&page=${page}`
          let res = await axios.get(url3);
          setMovieSearch(res.data);
        } else {
          let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sortType}&include_adult=true&include_video=false&page=${page}&with_genres=${genre}`
          let res = await axios.get(url);
          setMovieSearch(res.data);
        }
      } else {
        if (genre == null || genre == '') {
          let url2 = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}&page=${page}&include_adult=true`
          let res = await axios.get(url2);
          setMovieSearch(res.data);
        } else {
          let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sortType}&include_adult=true&include_video=false&page=${page}&with_genres=${genre}`
          let res = await axios.get(url);
          setMovieSearch(res.data);
        }
      
    }
    
    
  }
  return (
    <div className='app'>
      <Container className='movie_container'>
        <Row>
          <Col lg={3} id="movie_container_sort">
            <Row>
              <MoiveSort setSortType={setSortType} />
            </Row><br />
            <Row>
              <Col>

                <Dropdown>
                  <Dropdown.Toggle id="dropdown-button-dark-example1" variant="outline-secondary">
                    Genre
                  </Dropdown.Toggle>
                  <Dropdown.Menu variant="dark" id="dropdown-button-dark-example2">
                    {genreList&&genreList.map(
                      (id) => (<Button id='movies-genre-button' variant="outline-secondary" onClick={() => setGenre(id.id)}>{id.name}</Button>))}
                  </Dropdown.Menu>
                </Dropdown>
                
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              {movieSearch && movieSearch.results.map((movie) => {
                return (
                  <Col lg={6} md={6} className="moive_card">
                    < MovieBigCard className="Movies-card" movie={movie} />
                  </Col >
                )
              })}
            </Row>
            <Row>
              <Col lg={6} md={6}></Col>
              <Col lg={6} md={6}>
                <Pagination
                  activePage={page}
                  itemsCountPerPage={20}
                  totalItemsCount={700}
                  pageRangeDisplayed={3}
                  prevPageText={"‹"}
                  nextPageText={"›"}
                  onChange={handlePageChange}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
     
    </div>
  )
}
