let initialState = {
    keyword:''
}

function searchReducer(state = initialState, action){
    switch (action.type) {
        case "SEARCH":
            console.log("keyword success Re",action.payload.keyword)
            return{...state,
                keyword:action.payload.keyword,}
        default:
            return{...state}
    }
}
export default searchReducer;