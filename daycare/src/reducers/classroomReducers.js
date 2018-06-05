// export const initialState = {
//     students: { loading: false, error: null, data: [] }, teachers: { loading: false, error: null, data: [] }, report: {loading:false, error:null,data:[{ feeding: [], nap: [], diapering: [], playTime: [], meds: [], supplies: [], comment: [] }]}, classrooms: { loading: false, error: null, data: [] }
//   }
// const classroomReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "GET_CLASSROOMS_START":
//         return { ...state, classrooms: { ...state.classrooms, loading: true } }
//         break;
//       case "GET_CLASSROOMS_ERROR":
//         return { ...state, classrooms: { ...state.classrooms, error: action.payload, loading: false } }
//         break;
//       case "GET_CLASSROOMS_SUCCESS":
//         return { ...state, classrooms: { ...state.classrooms, data: action.payload, loading: false } }
//         break;
//         case "ADD_CLASSROOM_SUCCESS":
//       let newClassroom = state.classrooms.data.concat([action.payload])
//       return { ...state, classrooms: {...state.classrooms,error:action.payload, loading:false, data:newClassroom }};
//       break;
//     case "ADD_CLASSROOM_START":
//       return { ...state, classrooms: { ...state.classrooms, loading: true } }
//       break;
//     case "ADD_CLASSROOM_ERROR":
//       return { ...state, classrooms: { ...state.classrooms, error: action.payload, loading: false } }
//       break;
//     case "REMOVE_CLASSROOM_SUCCESS":        
//     let classroomIndex=state.classrooms.data.findIndex((classroom)=>{
//       return classroom.id===action.payload
//     })
//     let removedClass={...state.classrooms.data.splice(classroomIndex,1)}
//                  return { ...state, classrooms:{...state.classrooms,data:state.classrooms.data} };
//       break;
//     case "REMOVE_CLASSROOM_START":
//       return { ...state, classrooms: { ...state.classrooms, loading: true } }
//       break;
//     case "REMOVE_CLASSROOM_ERROR":
//       return { ...state, classrooms: { ...state.classrooms, error: action.payload, loading: false } }
//       break;
//       default:
//         return state;
//   }
// }
// export default classroomReducer