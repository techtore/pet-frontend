export default (state = {dogs: [], loading:false}, action) => {
    switch(action.type){
        case "LOADING_DOGS":
            return {
                ...state,
                loading: true
            }
        case "DOGS_LOADED":
            return {
                dogs: action.payload,
                loading: false
            }
        default:
            return state
    }
}