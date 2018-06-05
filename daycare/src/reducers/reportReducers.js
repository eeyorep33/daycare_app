// export const initialState = {
//     students: { loading: false, error: null, data: [] }, teachers: { loading: false, error: null, data: [] }, report: {loading:false, error:null,data:[{ feeding: [], nap: [], diapering: [], playTime: [], meds: [], supplies: [], comment: [] }]}, classrooms: { loading: false, error: null, data: [] }
//   }
// const reportReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "ADD_FEEDING_START":
//         return { ...state, feeding: { ...state.feeding, loading: true } }
//         break;
//       case "ADD_FEEDING_ERROR":
//         return { ...state, feeding: { ...state.feeding, error: action.payload, loading: false } }
//         break;
//       case "ADD_MEDS_SUCCESS":
//         const newMeds = state.report.concat([action.payload]);
//         return { ...state, report: newMeds };
//         break;
//       case "ADD_MEDS_START":
//         return { ...state, meds: { ...state.meds, loading: true } }
//         break;
//       case "ADD_MEDS_ERROR":
//         return { ...state, meds: { ...state.meds, error: action.payload, loading: false } }
//         break;
//       case "ADD_NAP_SUCCESS":
//         const newNap = state.report.concat([action.payload]);
//         return { ...state, report: newNap };
//         break;
//       case "ADD_NAP_START":
//         return { ...state, nap: { ...state.nap, loading: true } }
//         break;
//       case "ADD_NAP_ERROR":
//         return { ...state, nap: { ...state.nap, error: action.payload, loading: false } }
//         break;
//       case "ADD_COMMENTS_SUCCESS":
//         const newComment = state.report.concat([action.payload]);
//         return { ...state, report: newComment };
//         break;
//       case "ADD_COMMENTS_START":
//         return { ...state, comment: { ...state.comment, loading: true } }
//         break;
//       case "ADD_COMMENTS_ERROR":
//         return { ...state, comment: { ...state.comment, error: action.payload, loading: false } }
//         break;
//       case "ADD_SUPPLIES_SUCCESS":
//         const newSupplies = state.report.concat([action.payload]);
//         return { ...state, report: newSupplies };
//         break;
//       case "ADD_SUPPLIES_START":
//         return { ...state, supplies: { ...state.supplies, loading: true } }
//         break;
//       case "ADD_SUPPLIES_ERROR":
//         return { ...state, supplies: { ...state.supplies, error: action.payload, loading: false } }
//         break;
//       case "ADD_DIAPERING_SUCCESS":
//         const newDiaper = state.report.concat([action.payload]);
//         return { ...state, report: newDiaper };
//         break;
//       case "ADD_DIAPERING_START":
//         return { ...state, diapering: { ...state.diapering, loading: true } }
//         break;
//       case "ADD_DIAPERING_ERROR":
//         return { ...state, diapering: { ...state.diapering, error: action.payload, loading: false } }
//         break;
//       case "ADD_PLAYTIME_SUCCESS":
//         const newPlayTime = state.report.concat([action.playTime]);
//         return { ...state, report: newPlayTime };
//         break;
//       case "ADD_PLAYTIME_START":
//         return { ...state, playTime: { ...state.playTime, loading: true } }
//         break;
//       case "ADD_PLAYTIME_ERROR":
//         return { ...state, playTime: { ...state.playTime, error: action.payload, loading: false } }
//         break;
//         case "ADD_REPORT_SUCCESS":
//         let newReport = state.report.data.concat([action.payload])
//         return { ...state, report: {...state.report,error:action.payload, loading:false, data:newReport }};
//         break;
//       case "ADD_REPORT_START":
//         return { ...state, report: { ...state.report, loading: true } }
//         break;
//       case "ADD_REPORT_ERROR":
//         return { ...state, report: { ...state.report, error: action.payload, loading: false } }
//         break;
//       default:
//       return state;
//   }
// }
// export default reportReducer