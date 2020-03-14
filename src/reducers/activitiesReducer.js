export default (state = {dailyActivities: [], loading:false}, action) => {
    switch(action.type){
        case "LOADING_ACTIVITIES":
            return {
                ...state,
                loading: true
            }
        case "ACTIVITIES_LOADED":
            return {
                dailyActivities: action.payload,
                loading: false
            }
        default:
            return state
    }
}