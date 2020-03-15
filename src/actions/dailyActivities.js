export const getDailyActivities = (dogId) => {
    return (dispatch) => {
       dispatch({type: "LOADING_ACTIVITIES"}) 
       return fetch(`http://localhost:3000/api/v1/dogs/${dogId}`)
       .then(res => res.json())
       .then(dog => dispatch({type: "ACTIVITIES_LOADED", payload: dog}))
    //    .catch(error => {
    //     throw(error);
    //     }) 
    }
}
