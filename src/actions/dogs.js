export const getDogs = () => {
    return (dispatch) => {
       dispatch({type: "LOADING_DOGS"}) 
       return fetch()
        
    }
}

//import into dogs container