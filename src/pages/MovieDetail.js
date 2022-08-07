import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../redux/api';
import { Container, Row, Col, Button, Badge, CloseButton } from 'react-bootstrap';
import { MovieCard2 } from '../components/MovieCard2';
import YouTube from 'react-youtube';
import ReactModal from 'react-modal';
import { useSelector } from 'react-redux';

export const MovieDetail = () => {
  const customStyles = {
    content: {
      backgroundColor: 'black',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const [movieDetails, setMovieDetails] = useState(null);
  const [movieReview, setMovieReview] = useState(null);
  const [movieRelated, setMovieRelated] = useState(null);
  const [movieTrailer, setMovieTrailer] = useState(null);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [reviewOrRelated, setReviewOrRelated] = useState(true)
  const { genreList } = useSelector((state) => state.movie)


  const { id } = useParams()
  const API_KEY = process.env.REACT_APP_API_KEY
  let url = `https://image.tmdb.org/t/p/original///${movieDetails&&movieDetails.poster_path}`

  async function getMovieDetailsFromAPI(id) {
    const movieDetailApi = api.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
    const movieReviewApi = api.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    const movieRealatedApi = api.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
    const movieTrailerApi = api.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)

    const [movieDetail, movieReview, movieRealated, movieTrailer] =
      await Promise.all([movieDetailApi, movieReviewApi, movieRealatedApi, movieTrailerApi])
    console.log("api들", movieDetail, movieReview, movieRealated, movieTrailer)
    setMovieDetails(movieDetail.data);
    setMovieReview(movieReview.data)
    setMovieRelated(movieRealated.data)
    setMovieTrailer(movieTrailer.data)
    
  }
  useEffect(() => {
    getMovieDetailsFromAPI(id);
    return () => { };
  }, []);

  return (
    <div className='app'>
      <Container id='Detail_cover' >
        <Row >
          <Col lg={5} >
            <Row >
              <img src={url } />
            </Row>
          </Col>
          <Col lg={7}>
            <Row>
              <Col >
                {/* {movieDetails&&movieDetails.genres.id.map(
                                    (a) => (<Badge id="Movie_Big_Card-badge"bg="danger">{genreList.find(movieDetails => movieDetails.a === a).name}</Badge>))} */}
                <h2 className='Detail_title'>{movieDetails?.title}</h2>
                <h2 className='Detail_tagline'>{movieDetails?.tagline}</h2>
                <span><img className="imdb" src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png' />{movieDetails?.vote_average.toFixed(1)}</span>
                <span><img className='people' src='https://cdn2.iconfinder.com/data/icons/people-groups/512/Leader_Avatar-512.png' />{movieDetails?.popularity}</span>
                <hr />
                <h5>{movieDetails?.overview}</h5>
                <hr />
                <Badge className='Detail_badge' bg="danger">Budget</Badge>${movieDetails?.budget}<br />
                <Badge className='Detail_badge' bg="danger">Revenue</Badge>${movieDetails?.revenue}<br />
                <Badge className='Detail_badge' bg="danger">Release Day</Badge>{movieDetails?.release_date}<br />
                <Badge className='Detail_badge' bg="danger">Running Time</Badge>{movieDetails?.runtime}min<br /> <hr />
                <Button variant='dark' onClick={openModal}> Watch Trailer</Button>

                <ReactModal 
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={customStyles}>
                  <CloseButton variant="white" onClick={closeModal} />
                  <YouTube
                    id='youtube'
                    videoId={movieTrailer?.results[0].key}
                    autoplay
                    opts={{
                      width: "600",
                      height: "400",
                      playerVars: {
                        rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                        modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                      },
                    }}
                  />
                </ReactModal>
              </Col>
            </Row>
          </Col>
          <Row >
            <Col id="Detail_Button">
              <Button className="Detail_Button1" onClick={() => setReviewOrRelated(true)} variant="outline-danger">REVIEWS </Button>
              <Button variant="outline-light" onClick={() => setReviewOrRelated(false)}>RELATED MOVIES</Button>
            </Col>
          </Row>
        </Row>
        {
          reviewOrRelated == true ?
            <Row className='Detail_review'>
              {movieReview?.results.map((review) => {
                return (
                  <div>
                    <h3>{review.author}</h3>
                    <p>{review.content}</p>
                  </div>
                )
              })}
            </Row>
            :
            
            <Row  >
              {movieRelated?.results.map((movie) => {
                return (
                  <Col  lg={2} md={3} sm={4} xs={4}>
                    <MovieCard2   movie={movie} />
                  </Col>
                )
              })}
            </Row>
        }
      </Container>
    </div>
  )
}
