import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/actions/movieAction'
import { Banner } from '../components/Banner'
import { MovieSlide } from '../components/MovieSlide'
import { ClipLoader } from 'react-spinners'


export const Home = () => {
    const dispatch = useDispatch()
    const { popularMovies, topRatedMovies, upcomingMovies, loading } = useSelector(state => state.movie)
    //movie는 reducer/index에있음
  
    useEffect(() => {
        dispatch(movieAction.getMovies())
    }, [])
    
    if (loading) {
        return <ClipLoader color='#ffff' loading={loading} size={150} />
    }
    return (
        <div className='app'>
            {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
            <div className='movie-list'>
                <h2>Popular Movie</h2>
                <MovieSlide movies={popularMovies} />
                <h2>Top rated Movie</h2>
                <MovieSlide movies={topRatedMovies} />
                <h2>Upcoming Movie</h2>
                <MovieSlide movies={upcomingMovies} />
            </div>
        </div>
    )
}
