export const initialState = {
  loading: false,
  error: false,
  classrooms: [{ name: '', id: -1 }]
}
const classroomReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CLASSROOMS_START":
      return { ...state, loading: true }
      break;
    case "GET_CLASSROOMS_ERROR":
      return { ...state, loading: false, error: action.payload }
      break;
    case "GET_CLASSROOMS_SUCCESS":
      return { ...state, loading: false, classrooms: action.payload }
      break;

    case "ADD_CLASSROOM_SUCCESS":
      let newClassroom = state.classrooms.concat([action.payload])
      console.log(newClassroom)
      return { ...state, loading: false, classrooms: newClassroom };
      break;
    case "ADD_CLASSROOM_START":
      return { ...state, loading: true }
      break;
    case "ADD_CLASSROOM_ERROR":
      console.log(action.payload)
      return { ...state, error: action.payload, loading: false }
      break;
    case "REMOVE_CLASSROOM_SUCCESS":
      let classroomIndex = state.classrooms.findIndex((classroom) => {
        return classroom.id === action.payload
      })
      console.log(classroomIndex)
      let removedClass = { ...state.classrooms.splice(classroomIndex, 1) }
      return { ...state, classrooms: state.classrooms };
      break;
    case "REMOVE_CLASSROOM_START":
      return { ...state, loading: true }
      break;
    case "REMOVE_CLASSROOM_ERROR":
      return { ...state, error: action.payload, loading: false }
      break;
      case "CHANGE_CLASSROOM_START":
      return { ...state, loading: true}
      break;
    case "CHANGE_CLASSROOM_ERROR":
      return { ...state, error: action.payload, loading: false}
      break;
    case "CHANGE_CLASSROOM_SUCCESS":
      console.log(action.payload)
      let classroomIndex1 = state.classrooms.findIndex((classroom) => {
        return `${classroom.id}` === `${action.payload.id}`
      })
      console.log(classroomIndex1)
      const editClassroom = [...state.classrooms];
      editClassroom[classroomIndex1] = { ...editClassroom[classroomIndex1], name: action.payload.name }
      console.log(editClassroom)
      return { ...state, classrooms:  editClassroom};
      break;
    default:
      return state;
  }
}
export default classroomReducer