import axios from 'axios'

export const addStudent = student => ({
  type: "ADD_STUDENT", student
})
export const addToStudentList = (student) => {
  return (dispatch) => {
    return axios.post('/studentList', student)
      .then(response => {
        dispatch(addStudent(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
 export const addDiapering = payload => ({
  type: "ADD_DIAPERING", payload
})
export const addToDiapering=(diaper)=>{
  return (dispatch)=>{
    return axios.post('/diapering', diaper)
    .then(response=>{
      dispatch(addDiapering(response.data))
    })
  }
}
export const addFeeding = payload => ({
  type: "ADD_FEEDING", payload
})
export const addToFeeding=(feeding)=>{
  return (dispatch)=>{
    return axios.post('/feeding', feeding)
    .then(response=>{
      dispatch(addFeeding(response.data))
    })
  }
}
export const addNap = payload => ({
  type: "ADD_NAP", payload
})
export const addToNap=(nap)=>{
  return (dispatch)=>{
    return axios.post('/nap', nap)
    .then(response=>{
      dispatch(addNap(response.data))
    })
  }
}
export const addMeds = payload => ({
  type: "ADD_MEDS", payload
})
export const addToMeds=(med)=>{
  return (dispatch)=>{
    return axios.post('/meds', med)
    .then(response=>{
      dispatch(addMeds(response.data))
    })
  }
}
const addComments = payload => ({
  type: "ADD_COMMENTS", payload
})
export const addToComments=(comment)=>{
  return (dispatch)=>{
    return axios.post('/comments', comment)
    .then(response=>{
      dispatch(addComments(response.data))
    })
  }
}
const addSupplies = payload => ({
  type: "ADD_SUPPLIES", payload
})
export const addToSupplies=(item)=>{
  return (dispatch)=>{
    return axios.post('/supplies', item)
    .then(response=>{
      dispatch(addSupplies(response.data))
    })
  }
}
export const removeStudent = student => ({
  type: "REMOVE_STUDENT",  student
})
export const removeFromStudentList=(student)=>{
  return (dispatch)=>{
    return axios.delete('/studentList', student)
    .then(response=>{
      dispatch(removeStudent(response.data))
    })
  }
}
export const addPlayTime = student => ({
  type: "ADD_PLAYTIME", payload: student
})
export const addToPlayTime=(playtime)=>{
  return (dispatch)=>{
    return axios.post('/playTime', playtime)
    .then(response=>{
      dispatch(addPlayTime(response.data))
    })
  }
}
// export const changeStatus = student => ({
//   type: "CHANGE_STATUS",  student
// })
// export const changeStudentStatus=(student)=>{
//   return (dispatch)=>{
//     return axios.put('/diapering', diaper)
//     .then(response=>{
//       dispatch(addDiapering(response.data))
//     })
//   }
// }
export const addTeacher = teacher =>({
  type: "ADD_TEACHER",  teacher
})
export const addToTeacherList=(teacher)=>{
  return (dispatch)=>{
    return axios.post('/teacherList', teacher)
    .then(response=>{
      dispatch(addTeacher(response.data))
    })
  }
}
const removeTeacher = teacher =>({
  type:"REMOVE_TEACHER", teacher
})
export const removeFromTeacherList=(teacher)=>{
  return (dispatch)=>{
    return axios.delete('/teacherList', teacher)
    .then(response=>{
      dispatch(removeTeacher(response.data))
    })
  }
}
export const addClassroom = classroom =>({
  type: "ADD_CLASSROOM", classroom
})
export const addToclassList=(classroom)=>{
  return (dispatch)=>{
    return axios.post('/classroomList', classroom)
    .then(response=>{
      dispatch(addClassroom(response.data))
    })
  }
}
export const removeClassroom = classroom =>({
  type: "REMOVE_CLASSROOM", classroom
})
export const removeFromClassList=(classroom)=>{
  return (dispatch)=>{
    return axios.delete('/classroomList', classroom)
    .then(response=>{
      dispatch(removeClassroom(response.data))
    })
  }
}
export const getStudents= students=>({
  type:'GET_STUDENTS', students
})
export  const getStudentList=()=>{
  return(dispatch)=>{
    return axios.get('/studentList')
    .then(response=>{dispatch(getStudents(response.data))})
  }
}
export const getTeachers= teachers =>({
  type:'GET_TEACHERS', teachers
})
export const getTeacherList=()=>{
  return(dispatch)=>{
    return axios.get('/teacherList')
    .then(response=>{
      dispatch(getTeachers(response.data))
    })
  }
}
export const getClassrooms=classroom=>({
type:'GET_CLASSROOMS', classroom
})
export const getClassroomList=()=>{
  return(dispatch)=>{
    return axios.get('/classroomList')
    .then(response=>{
      dispatch(getClassrooms(response.data))
    })
  }
}


