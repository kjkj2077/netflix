import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { MovieCard } from './MovieCard';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 10
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 8
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 6
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
    }
};

export const MovieSlide = ({ movies }) => {
    return (
        <Carousel class="card_slide"responsive={responsive} >
            {movies.results?.map((item) =>{
                return(<MovieCard item={item} />)})}
        </Carousel>
    )
}
