import axios from 'axios'

export const ADD_TEACHER_START = 'ADD_TEACHER_START'
export const ADD_TEACHER_SUCCESS = 'ADD_TEACHER_SUCCESS'
export const ADD_TEACHER_ERROR = 'ADD_TEACHER_ERROR'

export const REMOVE_TEACHER_START = 'REMOVE_TEACHER_START'
export const REMOVE_TEACHER_SUCCESS = 'REMOVE_TEACHER_SUCCESS'
export const REMOVE_TEACHER_ERROR = 'REMOVE_TEACHER_ERROR'

export const GET_TEACHERS_ERROR = 'GET_TEACHERS_ERROR'
export const GET_TEACHERS_SUCCESS = 'GET_TEACHERS_SUCCESS'
export const GET_TEACHERS_START = 'GET_TEACHERS_START'

export const TEACHER_CHECK_IN_SUCCESS = 'TEACHER_CHECK_IN_SUCCESS'
export const TEACHER_CHECK_IN_ERROR = 'TEACHER_CHECK_IN_ERROR'
export const TEACHER_CHECK_IN_START = 'TEACHER_CHECK_IN_START'

export const teacherCheckInStart = teacher => ({
  type: "TEACHER_CHECK_IN_START", teacher
})
export const teacherCheckIn = (id) => {
  return dispatch => {
    dispatch(teacherCheckInStart())
    return axios.put('http://localhost:8080/teacherList/' + id)
      .then((response) => {
        dispatch(teacherCheckInSuccess(response.data))
      }).catch(err => { dispatch(teacherCheckInError(err)) })
  }
}
export const teacherCheckInSuccess = (data) => {
  return { type: TEACHER_CHECK_IN_SUCCESS, payload: data }
}
export const teacherCheckInError = (error) => {
  return { type: TEACHER_CHECK_IN_ERROR, error }
}
export const addTeacherStart = teacher => ({
  type: ADD_TEACHER_START, teacher
})
export const addTeacher = (teacher) => {
  return dispatch => {
    dispatch(addTeacherStart())
    return axios.post('http://localhost:8080/teacherList', teacher)
      .then(response => {
        dispatch(addTeacherSuccess(response.data))
      }).catch(err => { dispatch(addTeacherError(err)) })
  }
}
export const addTeacherSuccess = (data) => {
  return { type: ADD_TEACHER_SUCCESS, payload: data }
}
export const addTeacherError = (error) => {
  return { type: ADD_TEACHER_ERROR, error }
}
export const removeTeacherStart = teacher => ({
  type: REMOVE_TEACHER_START, teacher
})
export const removeTeacher = (teacher) => {
  return dispatch => {
    dispatch(removeTeacherStart())
    return axios.delete('http://localhost:8080/teacherList/' + teacher)
      .then(response => {
        dispatch(removeTeacherSuccess(response.data))
      }).catch(err => { dispatch(removeTeacherError(err)) })
  }
}
export const removeTeacherSuccess = (data) => {
  return { type: REMOVE_TEACHER_SUCCESS, payload: data }
}
export const removeTeacherError = (error) => {
  return { type: REMOVE_TEACHER_ERROR, error }
}
export const getTeachersStart = () => {
  return { type: GET_TEACHERS_START }
}
export const fetchTeachers = () => {
  return dispatch => {
    dispatch(getTeachersStart())
    return axios.get('http://localhost:8080/teacherList')
      .then(response => {
        dispatch(getTeachersSuccess(response.data))
      }).catch(err => { dispatch(getTeachersError(err)) })
  }
}
export const getTeachersSuccess = (data) => {
  return { type: GET_TEACHERS_SUCCESS, payload: data }
}
export const getTeachersError = (error) => {
  return { type: GET_TEACHERS_ERROR, error }
}






