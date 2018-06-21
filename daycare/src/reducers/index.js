<<<<<<< HEAD
import{combineReducers} from 'redux'
import studentReducer from './studentReducers' 
import teacherReducer from './teacherReducers'
import classroomReducer from './classroomReducers'
import reportReducer from './reportReducers'
=======
import { combineReducers } from 'redux'
import studentReducer from './studentReducers'
import teacherReducer from './teacherReducers'
import classroomReducer from './classroomReducers'
import reportReducer from './reportReducers'

const rootReducer = combineReducers({ classroomReducer, studentReducer, reportReducer, teacherReducer })

>>>>>>> 8a8378e244c5e9be97da5318d5f51b44bde48e4f

const rootReducer=combineReducers({reportReducer, classroomReducer, studentReducer, teacherReducer})
                        
          
export default rootReducer;