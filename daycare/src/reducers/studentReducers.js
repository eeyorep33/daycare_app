export const initialState = {
  loading: false, error: false, students: [], studentList:[]
  }
const studentReducer = (state = initialState, action) => {
    switch (action.type) {
    case "ADD_STUDENT_SUCCESS":
      let newStudent = state.students.concat([action.payload])
      return { ...state, students: newStudent};
      break;
    case "ADD_STUDENT_START":
      return { ...state, loading: true}
      break;
    case "ADD_STUDENT_ERROR":
      return { ...state, error: action.payload, loading: false}
      break;
      case "STUDENT_CHECK_IN_SUCCESS":
      let updatedStudent = state.students.findIndex(
        student => student.id === action.payload
    );
    const newData = [ ...state.students];
    newData[ updatedStudent ] = { ...newData[ updatedStudent ], status: "in" }
    return { ...state, students: newData};
    break;
    case "STUDENT_CHECK_IN_START":
      return { ...state,  loading: true}
      break;
    case "STUDENT_CHECK_IN_ERROR":
      return { ...state, error: action.payload, loading: false}
      break;
      case "STUDENT_CHECK_OUT_SUCCESS":
      let checkOut = state.students.findIndex(
        student => student.id === action.payload
      );
      const newStatus = [...state.students];
      newStatus[checkOut] = { ...newStatus[checkOut], status: "out" }
      return { ...state, students: newStatus};
      break;
    case "STUDENT_CHECK_OUT_START":
      return { ...state, loading: true}
      break;
    case "STUDENT_CHECK_OUT_ERROR":
      return { ...state, loading: false}
      break;
      case "GET_STUDENTS_START":
      return { ...state, loading: true}
      break;
    case "GET_STUDENTS_ERROR":
      return { ...state, error: action.payload, loading: false}
      break;
    case "GET_STUDENTS_SUCCESS":
      return { ...state, studentList: action.payload, loading: false}
      break;
      case "GET_STUDENTS_BY_CLASSROOM_START":
      return { ...state, loading: true}
      break;
    case "GET_STUDENTS_BY_CLASSROOM_ERROR":
      return { ...state, error: action.payload, loading: false}
      break;
    case "GET_STUDENTS_BY_CLASSROOM_SUCCESS":
      return { ...state, students: action.payload, loading: false}
      break;
      case "CHANGE_STUDENT_START":
      return { ...state, loading: true}
      break;
    case "CHANGE_STUDENT_ERROR":
      return { ...state, error: action.payload, loading: false}
      break;
    case "CHANGE_STUDENT_SUCCESS":    
    let studentIndex1 = state.students.findIndex((student) => {
      return `${student.id}`=== `${action.payload.id}`
    })
        const editStudent = [...state.students];
        editStudent[studentIndex1] = { ...editStudent[studentIndex1], name:action.payload.name, email:action.payload.email }
            return { ...state, students: editStudent};
      break;
    case "REMOVE_STUDENT_SUCCESS":
    const newStudents=state.students
    let index = newStudents.findIndex((student)=>{
      return student.id===action.payload
    });
    newStudents[index].active=false;
          return { ...state, students: newStudents};
      break;
    case "REMOVE_STUDENT_START":
      return { ...state, loading: true}
      break;
    case "REMOVE_STUDENT_ERROR":
      return { ...state, error: action.payload, loading: false}
      break;
      default:
      return state;
  }
}
export default studentReducer