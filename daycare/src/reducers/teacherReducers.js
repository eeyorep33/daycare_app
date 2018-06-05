export const initialState = {
  loading: false, error: false, teachers: [{ id: -1, name: '', initials: '', classroom_id: -1, status: 'out' }]
}

const teacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TEACHER_SUCCESS":
      let newTeacher = state.teachers.data.concat([action.payload])
      return { ...state, teachers: { ...state.teachers, loading: false, error: action.payload, data: newTeacher } };
      break;
    case "ADD_TEACHER_START":
      return { ...state, loading: true }
      break;
    case "ADD_TEACHER_ERROR":
      return { ...state, error: action.payload, loading: false }
      break;
    case "REMOVE_TEACHER_SUCCESS":
      let teacherIndex = state.teachers.findIndex((teacher) => {
        return teacher.id === action.payload
      })
      let removedTeacher = { ...state.teacherssplice(teacherIndex, 1) }
      return { ...state, teachers: state.teachers };
      break;
    case "REMOVE_TEACHER_START":
      return { ...state, loading: true }
      break;
    case "REMOVE_TEACHER_ERROR":
      return { ...state, error: action.payload, loading: false }
      break;
    case "GET_TEACHERS_START":
      return { ...state, loading: true }
      break;
    case "GET_TEACHERS_ERROR":
      return { ...state, error: action.payload, loading: false }
      break;
    case "GET_TEACHERS_SUCCESS":
      return { ...state, teachers: action.payload, loading: false }
      break;
      case "TEACHER_CHECK_IN_SUCCESS":
      let updatedTeacher = state.teachers.findIndex(
        teacher => teacher.id === action.payload
      );
      const newTeacherData = [...state.teachers];
      newTeacherData[updatedTeacher] = { ...newTeacherData[updatedTeacher], status: "in" }
      return { ...state, teachers: newTeacherData};
      break;
    case "TEACHER_CHECK_IN_START":
      return { ...state, loading: true}
      break;
    case "TEACHER_CHECK_IN_ERROR":
      return { ...state, error: action.payload, loading: false}
      break;
    case "TEACHER_CHECK_OUT_SUCCESS":
      let teacherCheckOut = state.teachers.findIndex(
        teacher => teacher.id === action.payload
      );
      const newTeacherStatus = [...state.teachers];
      newTeacherStatus[teacherCheckOut] = { ...newTeacherStatus[teacherCheckOut], status: "out" }
      return { ...state, teachers: newTeacherStatus};
      break;
    case "TEACHER_CHECK_OUT_START":
      return { ...state, loading: true}
      break;
    case "TEACHER_CHECK_OUT_ERROR":
      return { ...state, error: action.payload, loading: false}
      break;
    default:
      return state;
  }
}
export default teacherReducer