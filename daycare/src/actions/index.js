const addStudent = student => ({
  type: "ADD_STUDENT", payload: student
})
const addDiapering = payload => ({
  type: "ADD_DIAPERING", payload
})
const addFeeding = payload => ({
  type: "ADD_FEEDING", payload
})
const addNap = payload => ({
  type: "ADD_NAP", payload
})
const addMeds = payload => ({
  type: "ADD_MEDS", payload
})
const addComments = payload => ({
  type: "ADD_COMMENTS", payload
})
const addSupplies = payload => ({
  type: "ADD_SUPPLIES", payload
})
const removeStudent = student => ({
  type: "REMOVE_STUDENT", payload: student
})
const addPlayTime = student => ({
  type: "ADD_PLAYTIME", payload: student
})
const changeStatus = student => ({
  type: "CHANGE_STATUS", payload: student
})
const addTeacher = teacher =>({
  type: "ADD_TEACHER", payload: teacher
})
const removeTeacher = teacher =>({
  type:"REMOVE_TEACHER", payload:teacher
})
const addClassroom = classroom =>({
  type: "ADD_CLASSROOM", payload:classroom
})
const removeClassroom = classroom =>({
  type: "REMOVE_CLASSROOM", payload: classroom
})
export {addStudent, addDiapering, addFeeding, addNap, addMeds, addComments, addSupplies, removeStudent, addPlayTime, changeStatus}