let initialState = {
    popularMovies: {},
    topRatedMovies: {},
    upcomingMovies: {},
    loading:true,
    genreList:[],
}

function movieReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_MOVIES_REQUEST":
            return{...state,loading:true}
        case "GET_MOVIE":
            return {
                ...state,
                popularMovies: action.payload.popularMovies,
                topRatedMovies: action.payload.topRatedMovies,
                upcomingMovies: action.payload.upcomingMovies,
                genreList:      action.payload.genreList,
                loading:false
            }
        case "GET_ERROR":
            return{...state,loading:false}
        default:
            return{...state}
    }
}

export default movieReducer;