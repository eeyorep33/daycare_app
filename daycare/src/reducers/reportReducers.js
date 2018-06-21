export const initialState = {
<<<<<<< HEAD
   loading:false, error:false, reports:[], pastReports:[], feeding: [], nap: [], diapering: [], playTime: [], meds: [], supplies: [], comment: []}
=======
      loading:false, error:false, reports:[], feeding: [], nap: [], diapering: [], playTime: [], meds: [], supplies: [], comment: [] 
  }
>>>>>>> 8a8378e244c5e9be97da5318d5f51b44bde48e4f
const reportReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FEEDING_START":
        return { ...state, loading: true}
        break;
      case "ADD_FEEDING_ERROR":
<<<<<<< HEAD
        return { ...state, feeding:  action.payload, loading: false}
=======
        return { ...state, error: action.payload, loading: false}
>>>>>>> 8a8378e244c5e9be97da5318d5f51b44bde48e4f
        break;
        case "ADD_FEEDING_SUCCESS":
        const newFeed = state.feeding.concat([action.payload]);
        return { ...state, feeding: newFeed };
        break;
      case "ADD_MEDS_SUCCESS":
        const newMeds = state.meds.concat([action.payload]);
        return { ...state, meds: newMeds };
        break;
      case "ADD_MEDS_START":
        return { ...state, loading: true}
        break;
      case "ADD_MEDS_ERROR":
        return { ...state, error: action.payload, loading: false}
        break;
      case "ADD_NAP_SUCCESS":
        const newNap = state.nap.concat([action.payload]);
        return { ...state, nap: newNap };
        break;
      case "ADD_NAP_START":
        return { ...state, loading: true}
        break;
      case "ADD_NAP_ERROR":
        return { ...state, error: action.payload, loading: false}
        break;
      case "ADD_COMMENTS_SUCCESS":
        const newComment = state.comment.concat([action.payload]);
        return { ...state, comment: newComment };
        break;
      case "ADD_COMMENTS_START":
        return { ...state, loading: true}
        break;
      case "ADD_COMMENTS_ERROR":
        return { ...state, error: action.payload, loading: false}
        break;
      case "ADD_SUPPLIES_SUCCESS":
        const newSupplies = state.supplies.concat([action.payload]);
        return { ...state, supplies: newSupplies };
        break;
      case "ADD_SUPPLIES_START":
        return { ...state, loading: true}
        break;
      case "ADD_SUPPLIES_ERROR":
        return { ...state, error: action.payload, loading: false}
        break;
      case "ADD_DIAPERING_SUCCESS":
        const newDiaper = state.diapering.concat([action.payload]);
        return { ...state, diapering: newDiaper };
        break;
      case "ADD_DIAPERING_START":
        return { ...state, loading: true}
        break;
      case "ADD_DIAPERING_ERROR":
        return { ...state, error: action.payload, loading: false}
        break;
      case "ADD_PLAYTIME_SUCCESS":
<<<<<<< HEAD
        const newPlayTime = state.playTime.concat([action.payload]);
=======
        const newPlayTime = state.playTime.concat([action.playTime]);
>>>>>>> 8a8378e244c5e9be97da5318d5f51b44bde48e4f
        return { ...state, playTime: newPlayTime };
        break;
      case "ADD_PLAYTIME_START":
        return { ...state, loading: true}
        break;
      case "ADD_PLAYTIME_ERROR":
        return { ...state, error: action.payload, loading: false}
        break;
        case "ADD_REPORT_SUCCESS":
<<<<<<< HEAD
        return { ...state, reports: action.payload};
=======
        let newReport = state.report.data.concat([action.payload])
        return { ...state, report: {...state.report,error:action.payload, loading:false, data:newReport }};
>>>>>>> 8a8378e244c5e9be97da5318d5f51b44bde48e4f
        break;
      case "ADD_REPORT_START":
        return { ...state, loading: true}
        break;
      case "ADD_REPORT_ERROR":
        return { ...state, error: action.payload, loading: false}
        break;
<<<<<<< HEAD
        case "GET_REPORTS_START":
        return { ...state, loading: true}
      case "GET_REPORTS_SUCCESS":
        return { ...state, pastReports: action.payload, loading: false}
      case "GET_REPORTS_ERROR":
        return { ...state, error: action.payload, loading: false}
        break;
        
        case "GET_TODAY_REPORTS_START":
        return { ...state, loading: true}
      case "GET_TODAY_REPORTS_SUCCESS":
      const report=action.payload[7] || [];
      const feed=action.payload[0] || [];
      const med=action.payload[6] || [];
      const com=action.payload[1] || [];
      const sup=action.payload[4] || [];
      const nap=action.payload[2] || [];
      const play=action.payload[3] || [];
      const diaper=action.payload[5] || [];
      return { ...state, reports:report, feeding:feed, meds: med, comment:com, supplies: sup, nap:nap, playTime:play, diapering:diaper, loading: false}
      case "GET_TODAY_REPORTS_ERROR":
        return { ...state, error: action.payload, loading: false}
=======
        case "GET_TODAY_REPORTS_START":
      return { ...state, loading: true}
    case "GET_TODAY_REPORTS_SUCCESS":
      const report =action.payload[7];
      const feed=action.payload[0];
      const med=action.payload[6];
      const com=action.payload[1];
      const sup=action.payload[4];
      const nap=action.payload[2];
      const play=action.payload[3];
      const diaper=action.payload[5]
      return { ...state, reports: report, feeding:feed, meds:med, comment:com, supplies:sup, nap:nap, playTime:play,diapering:diaper, loading: false}
    case "GET_TODAY_REPORTS_ERROR":
      return { ...state, error: action.payload, loading: false}
      case "GET_REPORTS_START":
      return { ...state, loading: true}
    case "GET_REPORTS_SUCCESS":
      return { ...state, reports: action.payload, loading: false}
    case "GET_REPORTS_ERROR":
      return { ...state,  error: action.payload, loading: false}
      break
>>>>>>> 8a8378e244c5e9be97da5318d5f51b44bde48e4f
      default:
      return state;
  }
}
export default reportReducer