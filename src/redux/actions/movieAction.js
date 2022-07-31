import api from "../api"
const API_KEY = process.env.REACT_APP_API_KEY
function getMovies() {
    return async (dispatch) => {
        try {
            dispatch({type:"GET_MOVIES_REQUEST"})
            const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            const upComingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
            const genreApi=api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)
            let [popularMovies, 
                topRatedMovies, 
                upcomingMovies,
                genreList
                ] = 
                await Promise.all(
                    [popularMovieApi, 
                        topRatedApi,
                         upComingApi,
                         genreApi,]) //동시에 부르기 각각 await하는것보다 효율적.
            console.log("promise all", popularMovies, topRatedMovies, upcomingMovies,genreList)
            
            dispatch({
                type: "GET_MOVIE",
                payload: {
                    popularMovies: popularMovies.data,
                    topRatedMovies: topRatedMovies.data,
                    upcomingMovies: upcomingMovies.data,
                    genreList:genreList.data.genres
                }
            })

        } catch (err) {
            dispatch({type:"GET_ERROR"})

        }

    }
}
export const movieAction = {
    getMovies
}
//api호출방법 : fetch,ajax(제이쿼리),axios
//axios를 더많이씀.
//더많은 기능을 제공.