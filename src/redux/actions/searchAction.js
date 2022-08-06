function search(keyword){
    return(dispatch)=>{
        console.log("keyword success act",keyword)
        dispatch({type:"SEARCH",payload:{keyword}})
    }
}

export const  searchAction={search}