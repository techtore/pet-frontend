export default (state = {dailyActivities: [], loading:false}, action) => {
    switch(action.type){
        case "LOADING_ACTIVITIES":
            return {
                ...state,
                loading: true
            }
        case "ACTIVITIES_LOADED":
            return {
                ...state,
                dailyActivities: action.payload,
                loading: false
            }
        case "ADD_ACTIVITY":
            return{
                ...state,
                loading: true

            }
        case "ACTIVITY_ADDED":
            return{
                ...state,
                activities: [...state.activities, action.payload],
                loading: false
            }
        default:
            return state
    }
}