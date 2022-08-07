import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
export const MovieBigCard = ({ movie }) => {
    const navigate = useNavigate()
    const showDetail = () => {
        navigate(`/movies/${movie.id}`)
    }
   
    const url2 = `https://image.tmdb.org/t/p/original///${movie?.poster_path}`
    const { genreList } = useSelector((state) => state.movie)
    return (
        <div className='app'>
            <Container className='Movie_Big_Card_base' onClick={showDetail}>
                <div className="Movie_Big_Card"
                    style={{
                        backgroundImage:
                            "url(" + `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}` + ")",
                    }}>
                    <div className='Movie_Big_Card_cover'>
                        <div className='Movie_Big_Card_info'>
                        <Row > 
                            <Col lg={3} xs={3} ><img className='Movie_Big_Card_s_img' src={url2} /></Col>
                            <Col lg={9} xs={9} ><h3 className='Movie_Big_Card_title' >{movie.title}</h3></Col>
                        </Row>
                        <Row id='Movie_Big_Card-badges'>
                            <Col lg={8}>
                                {movie&&movie.genre_ids.map(
                                    (id) => (<Badge id="Movie_Big_Card-badge"bg="danger">{genreList.find(movie => movie.id === id).name}</Badge>))}
                            </Col>
                            <Col lg={4} ></Col>
                        </Row>
                        <Row>
                            <Col lg={7}> <h5 className='Movie_Big_Card_overview' >{movie?.overview}</h5></Col>
                            <Col lg={5}></Col>
                        </Row>
                        <div className='Movie_Big_Card_icon'>
                            <span><img className="imdb" src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png' />{movie?.vote_average.toFixed(1)}</span>
                            <span><img className='people' src='https://cdn2.iconfinder.com/data/icons/people-groups/512/Leader_Avatar-512.png' />{movie?.popularity}</span>
                        </div>

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
