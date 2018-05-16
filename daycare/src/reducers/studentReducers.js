// export const initialState = {
//     students: { loading: false, error: null, data: [] }, teachers: { loading: false, error: null, data: [] }, report: {loading:false, error:null,data:[{ feeding: [], nap: [], diapering: [], playTime: [], meds: [], supplies: [], comment: [] }]}, classrooms: { loading: false, error: null, data: [] }
//   }
// const studentReducer = (state = initialState, action) => {
//     switch (action.type) {
//     case "ADD_STUDENT_SUCCESS":
//       let newStudent = state.students.data.concat([action.payload])
//       return { ...state, students: {...state.students,loading:false, error:action.payload, data:newStudent }};
//       break;
//     case "ADD_STUDENT_START":
//       return { ...state, students: { ...state.students, loading: true } }
//       break;
//     case "ADD_STUDENT_ERROR":
//       return { ...state, students: { ...state.students, error: action.payload, loading: false } }
//       break;
//       case "STUDENT_CHECK_IN_SUCCESS":
//       let updatedStudent = state.students.data.findIndex(
//         student => student.id === action.payload
//     );
//     const newData = [ ...state.students.data ];
//     newData[ updatedStudent ] = { ...newData[ updatedStudent ], status: "in" }
//     return { ...state, students: { ...state.students, data: newData } };
//     break;
//     case "STUDENT_CHECK_IN_START":
//       return { ...state, students: { ...state.students, loading: true } }
//       break;
//     case "STUDENT_CHECK_IN_ERROR":
//       return { ...state, students: { ...state.students, error: action.payload, loading: false } }
//       break;
//     case "REMOVE_STUDENT_SUCCESS":
//     let studentIndex=state.students.data.findIndex((student)=>{
//       return student.id===action.payload
//     })
//     let removedStudent={...state.students.data.splice(studentIndex,1)}
//       return { ...state, students: {...state.students, data:state.students.data} };
//       break;
//     case "REMOVE_STUDENT_START":
//       return { ...state, students: { ...state.students, loading: true } }
//       break;
//     case "REMOVE_STUDENT_ERROR":
//       return { ...state, students: { ...state.students, error: action.payload, loading: false } }
//       break;
//       default:
//       return state;
//   }
// }
// export default studentReducer