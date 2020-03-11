export default (state = {dogs: [], loading:false}, action) => {
    switch(action.type){
        case "LOADING_DOGS":
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}