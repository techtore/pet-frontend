import { combineReducers } from 'redux'
import dogReducer from './dogReducer'
import { DataTableReducer } from 'react-redux-datatable';
//combines reducers into 1 rootReducer that is exported

const rootReducer = combineReducers({
    dogReducer,
    DataTableReducer 
})

export default rootReducer