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
            case "ADD_DOG":
                console.log("got dog to add")
                return {
                    ...state,
                    loading: true
                }
        case "DOG_ADDED":
            console.log("added dog")
            return {
                ...state,
                dogs: [...state.dogs, action.payload],
                loading: false
            }  
            
        case "ADD_ACTIVITY":
            return{
                ...state,
                loading: true
            }
        case "ACTIVITY_ADDED":
            let dog = state.dogs.filter(dog => dog.id === action.payload.dog_id)[0]
            let newActivity = {
                ...dog,
                daily_activities: [...dog.daily_activities, action.payload]
            }

            let dogs = state.dogs.filter(dog => dog.id !== action.payload.dog_id)

            return{
                ...state,
                dogs: [...dogs, newActivity],
                loading: false
            }
        default:
            return state
    }
}