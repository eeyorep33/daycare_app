export const initialState = {
     loading: false, error: false, students: [{name:'',id:-1, email:'', classroom_id:-1, status:'out'}] 
}
const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_STUDENTS_BY_CLASSROOM_START":
        return { ...state, loading: true}
        break;
      case "GET_STUDENTS_BY_CLASSROOM_ERROR":
        return { ...state, loading: false, error: action.payload}
        break;
      case "GET_STUDENTS_BY_CLASSROOM_SUCCESS":
        return { ...state, loading: false, students: action.payload  }
        break;
    case "ADD_STUDENT_SUCCESS":
      let newStudent = state.students.concat([action.payload])
      return { ...state, loading:false, students: newStudent };
      break;
    case "ADD_STUDENT_START":
      return { ...state, loading: true}
      break;
    case "ADD_STUDENT_ERROR":
      return { ...state,loading: false,  error: action.payload   }
      break;
      case "STUDENT_CHECK_IN_SUCCESS":
      let updatedStudent = state.students.findIndex(
        student => student.id === action.payload
    );
    const newData = [ ...state.students];
    newData[ updatedStudent ] = { ...newData[ updatedStudent ], status: "in" }
    return { ...state, students: { ...state.students, data: newData } };
    break;
    case "STUDENT_CHECK_IN_START":
      return { ...state, loading: true}
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
      return { ...state, error: action.payload, loading: false}
      break;
    case "REMOVE_STUDENT_SUCCESS":
    let studentIndex=state.students.findIndex((student)=>{
      return student.id===action.payload
    })
    let removedStudent={...state.students.splice(studentIndex,1)}
      return { ...state, students: state.students};
      break;
    case "REMOVE_STUDENT_START":
      return { ...state,  loading: true}
      break;
    case "REMOVE_STUDENT_ERROR":
      return { ...state, loading: false, error: action.payload}
      break;
      case "CHANGE_STUDENT_START":
      return { ...state, students: { ...state.students, loading: true } }
      break;
    case "CHANGE_STUDENT_ERROR":
      return { ...state, students: { ...state.students, error: action.payload, loading: false } }
      break;
    case "CHANGE_STUDENT_SUCCESS":
      console.log(action.payload)
      let studentIndex1 = state.students.data.findIndex((student) => {
        return `${student.id}` === `${action.payload.id}`
      })
      console.log(studentIndex1)
      const editStudent = [...state.students.data];
      editStudent[studentIndex1] = { ...editStudent[studentIndex1], name: action.payload.name, email: action.payload.email }
      console.log(editStudent)
      return { ...state, students: { ...state.students, data: editStudent } };
      break;
      case "GET_STUDENTS_START":
      return { ...state, loading: true}
      break;
    case "GET_STUDENTS_ERROR":
      return { ...state, error: action.payload, loading: false}
      break;
    case "GET_STUDENTS_SUCCESS":
      return { ...state, students: action.payload, loading: false}
      break;
      default:
      return state;
  }
}
export default studentReducer