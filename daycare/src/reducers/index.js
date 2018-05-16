// import{combineReducers} from 'redux'
// import studentReducer from './studentReducers' 
// import teacherReducer from './teacherReducers'
// import classroomReducer from './classroomReducers'
// import reportReducer from './reportReducers'
export const initialState = {
  students: { loading: false, error: null, data: [] }, teachers: { loading: false, error: null, data: [] }, report: {loading:false, error:null,data:[{ feeding: [], nap: [], diapering: [], playTime: [], meds: [], supplies: [], comment: [] }]}, classrooms: { loading: false, error: null, data: [] }
}
//const rootReducer=combineReducers({reportReducer, classroomReducer, studentReducer, teacherReducer})
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    case "ADD_STUDENT_SUCCESS":
      let newStudent = state.students.data.concat([action.payload])
      return { ...state, students: {...state.students,loading:false, error:action.payload, data:newStudent }};
      break;
    case "ADD_STUDENT_START":
      return { ...state, students: { ...state.students, loading: true } }
      break;
    case "ADD_STUDENT_ERROR":
      return { ...state, students: { ...state.students, error: action.payload, loading: false } }
      break;
      case "STUDENT_CHECK_IN_SUCCESS":
      let updatedStudent = state.students.data.findIndex(
        student => student.id === action.payload
    );
    const newData = [ ...state.students.data ];
    newData[ updatedStudent ] = { ...newData[ updatedStudent ], status: "in" }
    return { ...state, students: { ...state.students, data: newData } };
    break;
    case "STUDENT_CHECK_IN_START":
      return { ...state, students: { ...state.students, loading: true } }
      break;
    case "STUDENT_CHECK_IN_ERROR":
      return { ...state, students: { ...state.students, error: action.payload, loading: false } }
      break;
    case "REMOVE_STUDENT_SUCCESS":
    let studentIndex=state.students.data.findIndex((student)=>{
      return student.id===action.payload
    })
    let removedStudent={...state.students.data.splice(studentIndex,1)}
      return { ...state, students: {...state.students, data:state.students.data} };
      break;
    case "REMOVE_STUDENT_START":
      return { ...state, students: { ...state.students, loading: true } }
      break;
    case "REMOVE_STUDENT_ERROR":
      return { ...state, students: { ...state.students, error: action.payload, loading: false } }
      break;
    case "ADD_FEEDING_SUCCESS":
      const newFeeding = state.report.concat([action.payload]);
      return { ...state, report: newFeeding };
      break;
    case "ADD_FEEDING_START":
      return { ...state, feeding: { ...state.feeding, loading: true } }
      break;
    case "ADD_FEEDING_ERROR":
      return { ...state, feeding: { ...state.feeding, error: action.payload, loading: false } }
      break;
    case "ADD_MEDS_SUCCESS":
      const newMeds = state.report.concat([action.payload]);
      return { ...state, report: newMeds };
      break;
    case "ADD_MEDS_START":
      return { ...state, meds: { ...state.meds, loading: true } }
      break;
    case "ADD_MEDS_ERROR":
      return { ...state, meds: { ...state.meds, error: action.payload, loading: false } }
      break;
    case "ADD_NAP_SUCCESS":
      const newNap = state.report.concat([action.payload]);
      return { ...state, report: newNap };
      break;
    case "ADD_NAP_START":
      return { ...state, nap: { ...state.nap, loading: true } }
      break;
    case "ADD_NAP_ERROR":
      return { ...state, nap: { ...state.nap, error: action.payload, loading: false } }
      break;
    case "ADD_COMMENTS_SUCCESS":
      const newComment = state.report.concat([action.payload]);
      return { ...state, report: newComment };
      break;
    case "ADD_COMMENTS_START":
      return { ...state, comment: { ...state.comment, loading: true } }
      break;
    case "ADD_COMMENTS_ERROR":
      return { ...state, comment: { ...state.comment, error: action.payload, loading: false } }
      break;
    case "ADD_SUPPLIES_SUCCESS":
      const newSupplies = state.report.concat([action.payload]);
      return { ...state, report: newSupplies };
      break;
    case "ADD_SUPPLIES_START":
      return { ...state, supplies: { ...state.supplies, loading: true } }
      break;
    case "ADD_SUPPLIES_ERROR":
      return { ...state, supplies: { ...state.supplies, error: action.payload, loading: false } }
      break;
    case "ADD_DIAPERING_SUCCESS":
      const newDiaper = state.report.concat([action.payload]);
      return { ...state, report: newDiaper };
      break;
    case "ADD_DIAPERING_START":
      return { ...state, diapering: { ...state.diapering, loading: true } }
      break;
    case "ADD_DIAPERING_ERROR":
      return { ...state, diapering: { ...state.diapering, error: action.payload, loading: false } }
      break;
    case "ADD_PLAYTIME_SUCCESS":
      const newPlayTime = state.report.concat([action.playTime]);
      return { ...state, report: newPlayTime };
      break;
    case "ADD_PLAYTIME_START":
      return { ...state, playTime: { ...state.playTime, loading: true } }
      break;
    case "ADD_PLAYTIME_ERROR":
      return { ...state, playTime: { ...state.playTime, error: action.payload, loading: false } }
      break;
    case "CHANGE_STATUS":
      return { ...state, students: [...state.students.status, action.payload] };
      break;
    case "ADD_TEACHER_SUCCESS":
      let newTeacher = state.teachers.data.concat([action.payload])
      return { ...state, teachers: {...state.teachers, loading: false,error: action.payload,data:newTeacher} };
      break;
    case "ADD_TEACHER_START":
      return { ...state, teachers: { ...state.teachers, loading: true } }
      break;
    case "ADD_TEACHER_ERROR":
      return { ...state, teachers: { ...state.teachers, error: action.payload, loading: false } }
      break;
    case "REMOVE_TEACHER_SUCCESS":
    let teacherIndex=state.teachers.data.findIndex((teacher)=>{
      return teacher.id===action.payload
    })
    let removedTeacher={...state.teachers.data.splice(teacherIndex,1)}
      return { ...state, teachers: {...state.teachers, data:state.teachers.data }};
      break;
    case "REMOVE_TEACHER_START":
      return { ...state, teachers: { ...state.teachers, loading: true } }
      break;
    case "REMOVE_TEACHER_ERROR":
      return { ...state, teachers: { ...state.teachers, error: action.payload, loading: false } }
      break;
    case "ADD_CLASSROOM_SUCCESS":
      let newClassroom = state.classrooms.data.concat([action.payload])
      return { ...state, classrooms: {...state.classrooms,error:action.payload, loading:false, data:newClassroom }};
      break;
    case "ADD_CLASSROOM_START":
      return { ...state, classrooms: { ...state.classrooms, loading: true } }
      break;
    case "ADD_CLASSROOM_ERROR":
      return { ...state, classrooms: { ...state.classrooms, error: action.payload, loading: false } }
      break;
    case "REMOVE_CLASSROOM_SUCCESS":        
    let classroomIndex=state.classrooms.data.findIndex((classroom)=>{
      return classroom.id===action.payload
    })
    let removedClass={...state.classrooms.data.splice(classroomIndex,1)}
                 return { ...state, classrooms:{...state.classrooms,data:state.classrooms.data} };
      break;
    case "REMOVE_CLASSROOM_START":
      return { ...state, classrooms: { ...state.classrooms, loading: true } }
      break;
    case "REMOVE_CLASSROOM_ERROR":
      return { ...state, classrooms: { ...state.classrooms, error: action.payload, loading: false } }
      break;
      case "ADD_REPORT_SUCCESS":
      let newReport = state.report.data.concat([action.payload])
      return { ...state, report: {...state.report,error:action.payload, loading:false, data:newReport }};
      break;
    case "ADD_REPORT_START":
      return { ...state, report: { ...state.report, loading: true } }
      break;
    case "ADD_REPORT_ERROR":
      return { ...state, report: { ...state.report, error: action.payload, loading: false } }
      break;
    case "GET_STUDENTS_START":
      return { ...state, students: { ...state.students, loading: true } }
      break;
    case "GET_STUDENTS_ERROR":
      return { ...state, students: { ...state.students, error: action.payload, loading: false } }
      break;
    case "GET_STUDENTS_SUCCESS":
      return { ...state, students: { ...state.students, data: action.payload, loading: false } }
      break;
    case "GET_TEACHERS_START":
      return { ...state, teachers: { ...state.teachers, loading: true } }
      break;
    case "GET_TEACHERS_ERROR":
      return { ...state, teachers: { ...state.teachers, error: action.payload, loading: false } }
      break;
    case "GET_TEACHERS_SUCCESS":
      return { ...state, teachers: { ...state.teachers, data: action.payload, loading: false } }
      break;
    case "GET_CLASSROOMS_START":
      return { ...state, classrooms: { ...state.classrooms, loading: true } }
      break;
    case "GET_CLASSROOMS_ERROR":
      return { ...state, classrooms: { ...state.classrooms, error: action.payload, loading: false } }
      break;
    case "GET_CLASSROOMS_SUCCESS":
      return { ...state, classrooms: { ...state.classrooms, data: action.payload, loading: false } }
      break;
    default:
      return state;
  }
}

export default rootReducer;