import axios from 'axios'

export const ADD_CLASSROOM_START = 'ADD_CLASSROOM_START'
export const ADD_CLASSROOM_SUCCESS= 'ADD_CLASSROOM_SUCCESS'
export const ADD_CLASSROOM_ERROR= 'ADD_CLASSROOM_ERROR'

export const REMOVE_CLASSROOM_START = 'REMOVE_CLASSROOM_START'
export const REMOVE_CLASSROOM_SUCCESS= 'REMOVE_CLASSROOM_SUCCESS'
export const REMOVE_CLASSROOM_ERROR= 'REMOVE_CLASSROOM_ERROR'

export const GET_CLASSROOMS_SUCCESS='GET_CLASSROOMS_SUCCESS'
export const GET_CLASSROOMS_ERROR='GET_CLASSROOMS_ERROR'
export const GET_CLASSROOMS_START='GET_CLASSROOMS_START'

export const addClassroomStart = classroom => ({
    type: ADD_CLASSROOM_START, classroom
  })
  export const addClassroom = (classroom) => {
    return dispatch => {
      dispatch(addClassroomStart())
      return axios.post('http://localhost:8080/classroomList', classroom)
        .then(response => {
          console.log(response.data)
          dispatch(addClassroomSuccess(response.data))
        }).catch(err=>{dispatch(addClassroomError(err))})
    }
  }
  export const addClassroomSuccess = (data) => {
    console.log(data)
    return{type: ADD_CLASSROOM_SUCCESS, payload: data}   
  }
  export const addClassroomError=(error)=>{
   return{type: ADD_CLASSROOM_ERROR, error}
  }
  
  
  
  
  export const removeClassroomStart = classroom => ({
    type: REMOVE_CLASSROOM_START, classroom
  })
  export const removeClassroom = (classroom) => {
    return dispatch => {
      dispatch(removeClassroomStart())
      return axios.delete('http://localhost:8080/classroomList/'+ classroom)
        .then(response => {
          dispatch(removeClassroomSuccess(response.data))
        }).catch(err=>{dispatch(removeClassroomError(err))})
    }
  }
  export const removeClassroomSuccess = (data) => {
    return{type: REMOVE_CLASSROOM_SUCCESS, payload: data}    
  }
  export const removeClassroomError=(error)=>{
    return{type: REMOVE_CLASSROOM_ERROR, error}
  }

  export const getClassroomStart = () => {   
    return{ type: GET_CLASSROOMS_START}
   }
  export const fetchClassrooms=()=>{ 
    return dispatch=>{
          dispatch(getClassroomStart())
      return axios.get('http://localhost:8080/classroomList')
          .then(response => {
              dispatch(getClassroomSuccess(response.data))
      }).catch(err=>{dispatch(getClassroomError(err))})
    }
  }
  export const getClassroomSuccess = (data) => {
     return{type: GET_CLASSROOMS_SUCCESS, payload: data}   
  }
  export const getClassroomError=(error)=>{
    return{type: GET_CLASSROOMS_ERROR, error}
  }