import {combineReducers} from 'redux'
import productReducer from './product'
import authReducer from './auth'
import examReducer from './exam'

export default combineReducers({
    products: productReducer,
    auth: authReducer,
    questions : examReducer,
})