import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import api from '../redux/api';
export const MovieDetail = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieReview, setMovieReview] = useState(null);
  const [movieRelated, setMovieRelated] = useState(null);
  const [movieTrailer, setMovieTrailer] = React.useState(null);
  const [movieImage, setMovieImage] = React.useState(null);
  const { id } = useParams()
  const API_KEY = process.env.REACT_APP_API_KEY
  let url=`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieDetails?.poster_path}`
  //https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mxdVTei65ymzhJlalIEtR1qSgV2.jpg
  //https://www.themoviedb.org/t/p/original/un8ZDtx2SMwNwXRYy65aItnNjab.jpg
  //https://image.tmdb.org/t/p/original///kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg
  //https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bZLrpWM065h5bu1msUcPmLFsHBe.jpg
  //https://www.themoviedb.org/t/p/original/sc8tseucyDFb1AW7si4wRtw57zq.jpg
  //https://image.tmdb.org/t/p/original///kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg
  //https://image.tmdb.org/t/p/original///9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg
  async  function  getMovieDetailsFromAPI(id) {
    const movieDetailApi= api.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
    const movieReviewApi= api.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    const movieRealatedApi= api.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    const movieTrailerApi=api.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
    const movieImageApi=api.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}&language=en-US`)
    const [movieDetail,movieReview,movieRealated,movieTrailer,movieImage]=
    await Promise.all([movieDetailApi,movieReviewApi,movieRealatedApi,movieTrailerApi,movieImageApi])
    console.log("api들",movieDetail,movieReview,movieRealated,movieTrailer)
    setMovieDetails(movieDetail.data);
    setMovieReview(movieReview.data)
    setMovieRelated(movieRealated.data)
    setMovieTrailer(movieTrailer.data)
    setMovieImage(movieImage.data)
    console.log("detail image",movieImage.data)
  }
  useEffect(() => {
    getMovieDetailsFromAPI(id);
    console.log("성공?")
    return () => {};
  }, []);
  
  return (
    <div>
     <img className="Detail_img"src={url} /> 
      <div></div>
      <div>{movieDetails?.title}</div>
      <div>평점,관람수,나이</div>
      <div>소개</div>
      <div>등등..</div>
    </div>
  )
}
