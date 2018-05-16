import axios from 'axios'
export const ADD_STUDENT_START = 'ADD_STUDENT_START'
export const ADD_STUDENT_SUCCESS= 'ADD_STUDENT_SUCCESS'
export const ADD_STUDENT_ERROR= 'ADD_STUDENT_ERROR'

export const REMOVE_STUDENT_START = 'REMOVE_STUDENT_START'
export const REMOVE_STUDENT_SUCCESS= 'REMOVE_STUDENT_SUCCESS'
export const REMOVE_STUDENT_ERROR= 'REMOVE_STUDENT_ERROR'

export const STUDENT_CHECK_IN_SUCCESS='STUDENT_CHECK_IN_SUCCESS'
export const STUDENT_CHECK_IN_ERROR='STUDENT_CHECK_IN_ERROR'
export const STUDENT_CHECK_IN_START='STUDENT_CHECK_IN_START'

export const GET_STUDENTS_START = 'GET_STUDENTS_START'
export const GET_STUDENTS_ERROR = 'GET_STUDENTS_ERROR'
export const GET_STUDENTS_SUCCESS = 'GET_STUDENTS_SUCCESS'


export const addStudentStart = student => ({
    type: ADD_STUDENT_START, student
  })
  export const addStudent = (student) => {
    return (dispatch) => {
      dispatch(addStudentStart())
      return axios.post('http://localhost:8080/studentList', student)
        .then(response => {
          dispatch(addStudentSuccess(response.data))
        })
        .catch(err=>{dispatch(addStudentError(err))})
    };
  };
  export const addStudentSuccess = (data) => {
    return{type: ADD_STUDENT_SUCCESS, payload: data}   
  }
  export const addStudentError=(error)=>{
   return{type: ADD_STUDENT_ERROR, error}
  }

  export const removeStudentStart = student => ({
    type: REMOVE_STUDENT_START, student
  })
  export const removeStudent = (student) => {
    return dispatch => {
      dispatch(removeStudentStart())
      return axios.delete('http://localhost:8080/studentList/'+ student)
        .then(response => {
          dispatch(removeStudentSuccess(response.data))
        }).catch(err=>{dispatch(removeStudentError(err))})
    }
  }
  export const removeStudentSuccess = (data) => {
    return{type: REMOVE_STUDENT_SUCCESS, payload: data}   
  }
  export const removeStudentError=(error)=>{
   return{type: REMOVE_STUDENT_ERROR, error}
  }
  
  export const studentCheckInStart = student => ({
    type: "STUDENT_CHECK_IN_START",  student
  })
  export const studentCheckIn=(id)=>{
    return dispatch=>{
  dispatch(studentCheckInStart())
      return axios.put('http://localhost:8080/studentList/'+id)
      .then((response)=>{      
        dispatch(studentCheckInSuccess(response.data))
      }).catch(err=>{dispatch(studentCheckInError(err))})
    }
  }
  export const studentCheckInSuccess = (data) => {
     return{type: STUDENT_CHECK_IN_SUCCESS, payload: data}   
  }
  export const studentCheckInError=(error)=>{
   return{type: STUDENT_CHECK_IN_ERROR, error}
  }
  
  export const getStudentsStart = () => {   
    return{ type: GET_STUDENTS_START}
   }
  export const fetchStudents=()=>{ 
    return dispatch=>{
          dispatch(getStudentsStart())
      return axios.get('http://localhost:8080/studentList')
          .then(response => {
              dispatch(getStudentsSuccess(response.data))
      }).catch(err=>{dispatch(getStudentsError(err))})
    }
  }
  export const getStudentsSuccess = (data) => {
     return{type: GET_STUDENTS_SUCCESS, payload: data}   
  }
  export const getStudentsError=(error)=>{
    return{type: GET_STUDENTS_ERROR, error}
  }



