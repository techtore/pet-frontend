export const getDogs = () => {
    return (dispatch) => {
       dispatch({type: "LOADING_DOGS"}) 
       return fetch('http://localhost:3000/api/v1/dogs')
       .then(res => res.json())
       .then(dogs => dispatch({type: "DOGS_LOADED", payload: dogs})) 
    }
}

export const addDog = (dog) => {
    return(dispatch) => {
        dispatch({type: "ADD_DOG"})
        return fetch('http://localhost:3000/api/v1/dogs', {
            method: 'POST',
            body: JSON.stringify(dog),
            headers: { 
                'Content-Type':  'application/json'
            }
        })
         .then(res => res.json())
         .then(dog => {
             return dispatch({ type: "DOG_ADDED", payload: dog })
         })  
    }
}
