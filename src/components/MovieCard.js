import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const MovieCard = ({ item }) => {
    // const { genreList } =useSelector((state)=>state.movie.genreList) //앞에 genreList언급했으니 뒤에 필요x
    const { genreList } = useSelector((state) => state.movie)
    const url2 = `https://image.tmdb.org/t/p/original///${item.poster_path}`
    const navigate = useNavigate()
    const showDetail = () => {
        navigate(`/movies/${item.id}`)
    }
    return (
        <div className="card" style={{ backgroundColor: "black" }} onClick={showDetail} item={item}>
            <img className="card_img" src={url2} />
            <div className='overlay'>
                <div>
                    <h5 className="card_title">{item.title}</h5>
                    <div >{item.genre_ids.map(
                        (id) => (<Badge id="Movie_Big_Card-badge" bg="danger">{genreList.find(item => item.id === id).name}</Badge>))}
                    </div><br />
                </div>
            </div>
        </div>
    )
}

