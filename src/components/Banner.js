import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';
export const Banner = ({ movie }) => {
    const navigate =useNavigate()
    const showDetail=()=>{
        navigate(`/movies/${movie.id}`)
    }
    return (
            <div className="banner" onClick={showDetail}
                style={
                    {
                        backgroundImage:
                            "url(" + `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}` + ")"
                    }}>
                <div className='banner-info'>
                    <h1>{movie.title}</h1>
                    <Button  onClick={()=>showDetail}variant='dark' >Watch Trailer</Button>
                </div>     
            </div>
    )
}
