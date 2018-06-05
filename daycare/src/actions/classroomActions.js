import axios from 'axios'

export const ADD_CLASSROOM_START = 'ADD_CLASSROOM_START'
export const ADD_CLASSROOM_SUCCESS = 'ADD_CLASSROOM_SUCCESS'
export const ADD_CLASSROOM_ERROR = 'ADD_CLASSROOM_ERROR'

export const REMOVE_CLASSROOM_START = 'REMOVE_CLASSROOM_START'
export const REMOVE_CLASSROOM_SUCCESS = 'REMOVE_CLASSROOM_SUCCESS'
export const REMOVE_CLASSROOM_ERROR = 'REMOVE_CLASSROOM_ERROR'

export const GET_CLASSROOMS_SUCCESS = 'GET_CLASSROOMS_SUCCESS'
export const GET_CLASSROOMS_ERROR = 'GET_CLASSROOMS_ERROR'
export const GET_CLASSROOMS_START = 'GET_CLASSROOMS_START'

export const GET_STUDENTS_BY_CLASSROOM_SUCCESS = 'GET_STUDENTS_BY_CLASSROOM_SUCCESS'
export const GET_STUDENTS_BY_CLASSROOM_ERROR = 'GET_STUDENTS_BY_CLASSROOM_ERROR'
export const GET_STUDENTS_BY_CLASSROOM_START = 'GET_STUDENTS_BY_CLASSROOM_START'


export const CHANGE_CLASSROOM_START = 'CHANGE_CLASSROOM_START'
export const CHANGE_CLASSROOM_ERROR = 'CHANGE_CLASSROOM_ERROR'
export const CHANGE_CLASSROOM_SUCCESS = 'CHANGE_CLASSROOM_SUCCESS'

export const changeClassroomStart=(name)=>({
  type:CHANGE_CLASSROOM_START, name
})
export const changeClassroom=(name, id)=>{
  console.log(name)
return dispatch=>{
  dispatch(changeClassroomStart(name))
  return axios.put('http://localhost:8080/editClassroom/'+id, name)
  .then((response)=>{
    dispatch(changeClassroomSuccess(response.data))
  }).catch(err=>{dispatch(changeClassroomError(err))})
}
}
export const changeClassroomSuccess=(data)=>{
  return {type: CHANGE_CLASSROOM_SUCCESS, payload:data}
}
export const changeClassroomError=(err)=>{
return {type: CHANGE_CLASSROOM_ERROR, payload:err}
}

export const addClassroomStart = classroom => ({
  type: ADD_CLASSROOM_START, classroom
})
export const addClassroom = (classroom) => {
  return dispatch => {
    dispatch(addClassroomStart())
    return axios.post('http://localhost:8080/classroomList', classroom)
      .then(response => {
        dispatch(addClassroomSuccess(response.data))
      }).catch(err => { dispatch(addClassroomError(err)) })
  }
}
export const addClassroomSuccess = (data) => {
  return { type: ADD_CLASSROOM_SUCCESS, payload: data }
}
export const addClassroomError = (error) => {
  return { type: ADD_CLASSROOM_ERROR, error }
}
export const removeClassroomStart = classroom => ({
  type: REMOVE_CLASSROOM_START, classroom
})
export const removeClassroom = (classroom) => {
  return dispatch => {
    dispatch(removeClassroomStart())
    return axios.delete('http://localhost:8080/classroomList/' + classroom)
      .then(response => {
        dispatch(removeClassroomSuccess(response.data))
      }).catch(err => { dispatch(removeClassroomError(err)) })
  }
}
export const removeClassroomSuccess = (data) => {
  return { type: REMOVE_CLASSROOM_SUCCESS, payload: data }
}
export const removeClassroomError = (error) => {
  return { type: REMOVE_CLASSROOM_ERROR, error }
}
export const getClassroomStart = () => {
  return { type: GET_CLASSROOMS_START }
}
export const fetchClassrooms = () => {
  return dispatch => {
    dispatch(getClassroomStart())
    return axios.get('http://localhost:8080/classroomList')
      .then(response => {
        dispatch(getClassroomSuccess(response.data))
      }).catch(err => { dispatch(getClassroomError(err)) })
  }
}
export const getClassroomSuccess = (data) => {
  return { type: GET_CLASSROOMS_SUCCESS, payload: data }
}
export const getClassroomError = (error) => {
  return { type: GET_CLASSROOMS_ERROR, error }
}
export const getStudentsByClassroomStart = () => {
  return { type: GET_CLASSROOMS_START }
}
export const getStudentsByClassroom = (id) => {
  console.log(id)
  return dispatch => {
    dispatch(getStudentsByClassroomStart())
    return axios.get('http://localhost:8080/classroomList/'+id)
      .then(response => {console.log(response.data)
        dispatch(getStudentsByClassroomSuccess(response.data))
      }).catch(err => { dispatch(getStudentsByClassroomError(err)) })
  }
}
export const getStudentsByClassroomSuccess = (data) => {
  return { type: GET_STUDENTS_BY_CLASSROOM_SUCCESS, payload: data }
}
export const getStudentsByClassroomError = (error) => {
  return { type: GET_STUDENTS_BY_CLASSROOM_ERROR, error }
}