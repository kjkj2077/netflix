import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { MovieCard2 } from '../components/MovieCard2';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import { useSelector } from 'react-redux';
import { MoiveSort } from '../components/MoiveSort';
const API_KEY = process.env.REACT_APP_API_KEY
export const Movies = () => {
  const [movieSearch, setMovieSearch] = useState("");
  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState('popularity.desc');
  let keyword = useSelector((state) => state.movie.search)
  
  const handlePageChange = (page) => { setPage(page); };

  useEffect(() => {
    getMovieDetailsFromAPI(page)
    console.log("movies keyword", keyword);
  }, [page, keyword,sortType]);


  async function getMovieDetailsFromAPI(page) {
    // let url2 = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sortType}&include_adult=true&include_video=false&page=${page}`
    let res = await axios.get(url);
    setMovieSearch(res.data);
  }
  return (
    <div className='app'>
      <Container className='movie_container'>
        <Row>
          <Col lg={3}>
            <Row>
              <MoiveSort setSortType={setSortType}/>
            </Row><br/>
            <Row>
              <Button onClick={()=>setSortType("popularity.asc")}> Popularity(ASC)</Button>
            </Row>
          </Col>
          <Col>
            <Row>
              {movieSearch && movieSearch.results.map((movie) => {
                return (
                  <Col lg={3} md={3} className="moive_card">
                    < MovieCard2 className="Movies-card" movie={movie} />
                  </Col >
                )
              })}
            </Row>
            <Pagination
              activePage={page}
              itemsCountPerPage={20}
              totalItemsCount={700}
              pageRangeDisplayed={4}
              prevPageText={"‹"}
              nextPageText={"›"}
              onChange={handlePageChange}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
