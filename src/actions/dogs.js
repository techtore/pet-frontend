export const getDogs = () => {
    return (dispatch) => {
       dispatch({type: "LOADING_DOGS"}) 
       return fetch('http://localhost:3001/api/v1/dogs')
       .then(res => res.json())
       .then(dogs => dispatch({type: "DOGS_LOADED", payload: dogs})) 
    }
}

