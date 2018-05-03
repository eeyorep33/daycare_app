const initialState = {
  students: [], teachers: [], report: [{ feeding: [], nap: [], diapering: [], playTime: [], meds: [], supplies: [], comment: [] }], classrooms: []
}

const rootReducer = (state = initialState, action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case "ADD_STUDENT":
      let newStudent = state.students.concat([action.payload])
      return { ...state, students: newStudent };
      break;
    case "REMOVE_STUDENT":
      return { ...state, students: [...state.students, action.payload] };
      break;
    case "ADD_FEEDING":
      const newFeeding = state.report.concat([action.payload]);
      return { ...state, report: newFeeding };
      break;
    case "ADD_MEDS":
      const newMeds = state.report.concat([action.payload]);
      return { ...state, report: newMeds };
      break;
    case "ADD_NAP":
      const newNap = state.report.concat([action.payload]);
      return { ...state, report: newNap };
      break;
    case "ADD_COMMENTS":
      const newComment = state.report.concat([action.payload]);
      return { ...state, report: newComment };
      break;
    case "ADD_SUPPLIES":
      const newSupplies = state.report.concat([action.payload]);
      return { ...state, report: newSupplies };
      break;
    case "ADD_DIAPERING":
      const newDiaper = state.report.concat([action.payload]);

      return { ...state, report: newDiaper };
      break;
    case "ADD_PLAYTIME":
      const newPlayTime = state.report.concat([action.payload]);
      return { ...state, report: newPlayTime };
      break;
    case "CHANGE_STATUS":
      return { ...state, students: [...state.students.status, action.payload] };
      break;
    case "ADD_TEACHER":
      let newTeacher = state.teachers.concat([action.payload])
      return { ...state, teachers: newTeacher };
      break;
    case "REMOVE_TEACHER":
      return { ...state, teachers: [...state.teachers, action.payload] };
      break;
    case "ADD_CLASSROOM":
      let newClassroom = state.classrooms.concat([action.payload])
      return { ...state, classrooms: newClassroom };
      break;
    case "REMOVE_CLASSROOM":
      return { ...state, classrooms: [...state.classrooms, action.payload] };
      break;
    case "GET_STUDENTS":
      return { ...state, students: action.payload }
      break;
    case "GET_TEACHERS":
      return { ...state, teachers: action.payload }
      break;
    case "GET_CLASSROOMS":
      return { ...state, classrooms: action.payload }
      break;
    default:
      return state;
  }
}

export default rootReducer;