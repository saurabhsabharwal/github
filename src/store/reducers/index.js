import {combineReducers} from 'redux'
import UsersReducer from './UsersReducer'
import UserDetailsReducer from './UserDetailsReducer'

const rootReducer = combineReducers({UsersReducer, UserDetailsReducer})

export default rootReducer;