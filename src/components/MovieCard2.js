import React from 'react'
import { useNavigate } from 'react-router-dom'
export const MovieCard2 = ({movie}) => {
    const url2 = `https://image.tmdb.org/t/p/original///${movie.poster_path}`
    const navigate = useNavigate()
    const showDetail = () => {
        navigate(`/movies/${movie.id}`)
        window.location.reload();
    }
    return (   
        <div className="card" style={{backgroundColor:"black"}} onClick={showDetail} >
            <img className="card_img"src={url2}/>
                <div className='overlay'>
                    <div>
                        <h3 className="card_title">{movie.title}</h3>
                        <h4>{movie.vote_average}</h4>
                        <h4 className="card_over_18">{movie.adult==true ? "over 18":" "}</h4>
                    </div>
                </div>   
            </div>
    )
}
