import { combineReducers } from 'redux'
import dogReducer from './dogReducer'
//combines reducers into 1 rootReducer that is exported

const rootReducer = combineReducers({
    dogReducer
})

export default rootReducer