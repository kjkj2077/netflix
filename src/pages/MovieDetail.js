import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../redux/api';
import { Container, Row, Col, Button, Badge, Modal } from 'react-bootstrap';
import { MovieCard2 } from '../components/MovieCard2';
import YouTube from 'react-youtube';
export const MovieDetail = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieReview, setMovieReview] = useState(null);
  const [movieRelated, setMovieRelated] = useState(null);
  const [movieTrailer, setMovieTrailer] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id } = useParams()
  const API_KEY = process.env.REACT_APP_API_KEY
  let url = `https://image.tmdb.org/t/p/original///${movieDetails?.poster_path}`
  //https://image.tmdb.org/t/p/original///9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg
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
    console.log("movieTrailer", movieTrailer)
  }
  useEffect(() => {
    getMovieDetailsFromAPI(id);
    return () => { };
  }, []);

  return (
    <div className='app'>
      <Container className='Detail'>
        <Row className='Detail_Row1'>
          <Col>
            <img className="Detail_img" src={url} />
          </Col>
          <Col className='Detail_info'>
            <h1 className='Detail_title'>{movieDetails?.title}</h1>
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
            <Button variant='dark' onClick={handleShow}> Watch Trailer</Button>

            <Modal show={show} onHide={handleClose} >
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body >
                <YouTube
                  videoId={movieTrailer?.results[0].key}
                  opts={{
                    width: "560",
                    height: "315",
                    playerVars: {
                      autoplay: 1, //자동재생 O
                      rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                      modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                    },
                  }}
                  onEnd={(e) => { e.target.stopVideo(0); }}
                />
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
        <Row>
          <Col className="Detail_Button">
            <Button className="Detail_Button1" variant="outline-danger">REVIEWS </Button>
            <Button variant="outline-light">RELATED MOVIES</Button>
          </Col>
        </Row>
        <div>
          <div className='Detail_review'>
            {movieReview?.results.map((review) => {
              return (
                <div>
                  <h3>{review.author}</h3>
                  <p>{review.content}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div>
          {movieRelated?.results.map((movie) => {
            return (
              <Container>
                <Row>
                  <div lg={3} md={6}><MovieCard2 movie={movie} /></div>
                </Row>
              </Container>
            )
          })}
        </div>
      </Container>
    </div>
  )
}
