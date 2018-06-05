import { combineReducers } from 'redux'
import studentReducer from './studentReducers'
import teacherReducer from './teacherReducers'
import classroomReducer from './classroomReducers'
import reportReducer from './reportReducers'

const rootReducer = combineReducers({ classroomReducer, studentReducer, reportReducer, teacherReducer })


export default rootReducer;