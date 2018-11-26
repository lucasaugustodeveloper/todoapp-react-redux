import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReduce'

const rootReducers = combineReducers({
  todo: todoReducer
})

export default rootReducers
