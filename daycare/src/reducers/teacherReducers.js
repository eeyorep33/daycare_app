// export const initialState = {
//     students: { loading: false, error: null, data: [] }, teachers: { loading: false, error: null, data: [] }, report: {loading:false, error:null,data:[{ feeding: [], nap: [], diapering: [], playTime: [], meds: [], supplies: [], comment: [] }]}, classrooms: { loading: false, error: null, data: [] }
//   }
// const teacherReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "ADD_TEACHER_SUCCESS":
//         let newTeacher = state.teachers.data.concat([action.payload])
//         return { ...state, teachers: {...state.teachers, loading: false,error: action.payload,data:newTeacher} };
//         break;
//       case "ADD_TEACHER_START":
//         return { ...state, teachers: { ...state.teachers, loading: true } }
//         break;
//       case "ADD_TEACHER_ERROR":
//         return { ...state, teachers: { ...state.teachers, error: action.payload, loading: false } }
//         break;
//       case "REMOVE_TEACHER_SUCCESS":
//       let teacherIndex=state.teachers.data.findIndex((teacher)=>{
//         return teacher.id===action.payload
//       })
//       let removedTeacher={...state.teachers.data.splice(teacherIndex,1)}
//         return { ...state, teachers: {...state.teachers, data:state.teachers.data }};
//         break;
//       case "REMOVE_TEACHER_START":
//         return { ...state, teachers: { ...state.teachers, loading: true } }
//         break;
//       case "REMOVE_TEACHER_ERROR":
//         return { ...state, teachers: { ...state.teachers, error: action.payload, loading: false } }
//         break;
//         case "GET_TEACHERS_START":
//       return { ...state, teachers: { ...state.teachers, loading: true } }
//       break;
//     case "GET_TEACHERS_ERROR":
//       return { ...state, teachers: { ...state.teachers, error: action.payload, loading: false } }
//       break;
//     case "GET_TEACHERS_SUCCESS":
//       return { ...state, teachers: { ...state.teachers, data: action.payload, loading: false } }
//       break;
//     case "GET_CLASSROOMS_START":
//       return { ...state, classrooms: { ...state.classrooms, loading: true } }
//       break;
//       default:
//       return state;
//   }
// }
// export default teacherReducer