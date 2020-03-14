export const getDailyActivities = (dog) => {
    return (dispatch) => {
       dispatch({type: "LOADING_ACTIVITIES"}) 
       return fetch(`http://localhost:3000/api/v1/dogs/${dog.id}/daily_activities`)
       .then(res => res.json())
       .then(dailyActivities => dispatch({type: "ACTIVITIES_LOADED", payload: dailyActivities}))
       .catch(error => {
        throw(error);
        }) 
    }
}