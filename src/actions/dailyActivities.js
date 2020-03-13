export const getDailyActivities = () => {
    return (dispatch) => {
       dispatch({type: "LOADING_ACTIVITIES"}) 
       return fetch(`http://localhost:3000/api/v1/dogs/${id}/daily_activities`)
       .then(res => res.json())
       .then(dailyActivities => dispatch({type: "ACTIVITIES_LOADED", payload: dailyActivities}))
       .catch(error => {
        throw(error);
        }) 
    }
}