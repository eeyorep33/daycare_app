import axios from 'axios'

export const ADD_DIAPERING_START = 'ADD_DIAPERING_START'
export const ADD_DIAPERING_SUCCESS = 'ADD_DIAPERING_SUCCESS'
export const ADD_DIAPERING_ERROR = 'ADD_DIAPERING_ERROR'

export const ADD_FEEDING_START = 'ADD_FEEDING_START'
export const ADD_FEEDING_SUCCESS = 'ADD_FEEDING_SUCCESS'
export const ADD_FEEDING_ERROR = 'ADD_FEEDING_ERROR'

export const ADD_NAP_START = 'ADD_NAP_START'
export const ADD_NAP_SUCCESS = 'ADD_NAP_SUCCESS'
export const ADD_NAP_ERROR = 'ADD_NAP_ERROR'

export const ADD_PLAYTIME_START = 'ADD_PLAYTIME_START'
export const ADD_PLAYTIME_SUCCESS = 'ADD_PLAYTIME_SUCCESS'
export const ADD_PLAYTIME_ERROR = 'ADD_PLAYTIME_ERROR'

export const ADD_SUPPLIES_START = 'ADD_SUPPLIES_START'
export const ADD_SUPPLIES_SUCCESS = 'ADD_SUPPLIES_SUCCESS'
export const ADD_SUPPLIES_ERROR = 'ADD_SUPPLIES_ERROR'

export const ADD_COMMENTS_START = 'ADD_COMMENTS_START'
export const ADD_COMMENTS_SUCCESS = 'ADD_COMMENTS_SUCCESS'
export const ADD_COMMENTS_ERROR = 'ADD_COMMENTS_ERROR'

export const ADD_MEDS_START = 'ADD_MEDS_START'
export const ADD_MEDS_SUCCESS = 'ADD_MEDS_SUCCESS'
export const ADD_MEDS_ERROR = 'ADD_MEDS_ERROR'

export const ADD_REPORT_START = 'ADD_REPORT_START'
export const ADD_REPORT_SUCCESS = 'ADD_REPORT_SUCCESS'
export const ADD_REPORT_ERROR = 'ADD_REPORT_ERROR'

export const GET_REPORTS_START = 'GET_REPORTS_START'
export const GET_REPORTS_SUCCESS = 'GET_REPORTS_SUCCESS'
export const GET_REPORTS_ERROR = 'GET_REPORTS_ERROR'

export const GET_A_REPORT_START = 'GET_A_REPORT_START'
export const GET_A_REPORT_SUCCESS = 'GET_A_REPORT_SUCCESS'
export const GET_A_REPORT_ERROR = 'GET_A_REPORT_ERROR'

export const GET_TODAY_REPORTS_START = 'GET_TODAY_REPORTS_START'
export const GET_TODAY_REPORTS_SUCCESS = 'GET_TODAY_REPORTS_SUCCESS'
export const GET_TODAY_REPORTS_ERROR = 'GET_TODAY_REPORTS_ERROR'

export const addReportStart = report => ({
  type: ADD_REPORT_START, report
})
export const addReport = (report) => {
  return (dispatch) => {
    dispatch(addReportStart())
    return axios.post('http://localhost:8080/report', report)
      .then(response => {
        dispatch(addReportSuccess(response.data))
      })
      .catch(err => { dispatch(addReportError(err)) })
  };
};
export const addReportSuccess = (data) => {
  return { type: ADD_REPORT_SUCCESS, payload: data }
}
export const addReportError = (error) => {
  return { type: ADD_REPORT_ERROR, error }
}



export const addDiaperingStart = diapering => ({
  type: ADD_DIAPERING_START, diapering
})
export const addDiapering = (diaper) => {
  return dispatch => {
    dispatch(addDiaperingStart())
    return axios.post('http://localhost:8080/diapering', diaper)
      .then(response => {
        console.log(response.data)
        dispatch(addDiaperingSuccess(response.data))
      }).catch(err => { dispatch(addDiaperingError(err)) })
  }
}
export const addDiaperingSuccess = (data) => {
  return { type: ADD_DIAPERING_SUCCESS, payload: data }
}
export const addDiaperingError = (error) => {
  return { type: ADD_DIAPERING_ERROR, error }
}



export const addFeedingStart = feeding => ({
  type: ADD_FEEDING_START, feeding
})
export const addFeeding = (feeding) => {
  return dispatch => {
    dispatch(addFeedingStart())
    return axios.post('http://localhost:8080/feeding', feeding)
      .then(response => {
        dispatch(addFeedingSuccess(response.data))
      }).catch(err => { dispatch(addFeedingError(err)) })
  }
}
export const addFeedingSuccess = (data) => {
  return { type: ADD_FEEDING_SUCCESS, payload: data }
}
export const addFeedingError = (error) => {
  return { type: ADD_FEEDING_ERROR, error }
}



export const addNapStart = nap => ({
  type: ADD_NAP_START, nap
})
export const addNap = (nap) => {
  return dispatch => {
    dispatch(addNapStart())
    return axios.post('http://localhost:8080/nap', nap)
      .then(response => {
        dispatch(addNapSuccess(response.data))
      }).catch(err => { dispatch(addNapError(err)) })
  }
}
export const addNapSuccess = (data) => {
  return { type: ADD_NAP_SUCCESS, payload: data }
}
export const addNapError = (error) => {
  return { type: ADD_NAP_ERROR, error }
}



export const addMedsStart = meds => ({
  type: ADD_MEDS_START, meds
})
export const addMeds = (med) => {
  return dispatch => {
    dispatch(addMedsStart())
    return axios.post('http://localhost:8080/meds', med)
      .then(response => {
        dispatch(addMedsSuccess(response.data))
      }).catch(err => { dispatch(addMedsError(err)) })
  }
}
export const addMedsSuccess = (data) => {
  return { type: ADD_MEDS_SUCCESS, payload: data }
}
export const addMedsError = (error) => {
  return { type: ADD_MEDS_ERROR, error }
}



export const addCommentsStart = comment => ({
  type: ADD_COMMENTS_START, comment
})
export const addComments = (comment) => {
  return dispatch => {
    dispatch(addCommentsStart())
    return axios.post('http://localhost:8080/comments', comment)
      .then(response => {
        dispatch(addCommentsSuccess(response.data))
      }).catch(err => { dispatch(addCommentsError(err)) })
  }
}
export const addCommentsSuccess = (data) => {
  return { type: ADD_COMMENTS_SUCCESS, payload: data }
}
export const addCommentsError = (error) => {
  return { type: ADD_COMMENTS_ERROR, error }
}
export const addSuppliesStart = supplies => ({
  type: ADD_SUPPLIES_START, supplies
})
export const addSupplies = (item) => {
  return dispatch => {
    dispatch(addSuppliesStart())
    return axios.post('http://localhost:8080/supplies', item)
      .then(response => {
        dispatch(addSuppliesSuccess(response.data))
      }).catch(err => { dispatch(addSuppliesError(err)) })
  }
}
export const addSuppliesSuccess = (data) => {
  return { type: ADD_SUPPLIES_SUCCESS, payload: data }
}
export const addSuppliesError = (error) => {
  return { type: ADD_SUPPLIES_ERROR, error }
}
export const addPlayTimeStart = playTime => ({
  type: ADD_PLAYTIME_START, playTime
})
export const addPlayTime = (playtime) => {
  return (dispatch) => {
    dispatch(addPlayTimeStart())
    return axios.post('http://localhost:8080/playTime', playtime)
      .then(response => {
        console.log(response.data)
        dispatch(addPlayTimeSuccess(response.data))
      }).catch(err => { dispatch(addPlayTimeError(err)) })
  }
}
export const addPlayTimeSuccess = (data) => {
  return { type: ADD_PLAYTIME_SUCCESS, payload: data }
}
export const addPlayTimeError = (error) => {
  return { type: ADD_PLAYTIME_ERROR, error }
}
export const getReportsStart = (reports) => {
  return { type: GET_REPORTS_START, reports }
}
export const getReports = (name) => {
  return dispatch => {
    dispatch(getReportsStart())
    return axios.get('http://localhost:8080/reports/' + name)
      .then(response => {
        dispatch(getReportsSuccess(response.data))
      }).catch(err => { dispatch(getReportsError(err)) })
  }
}
export const getReportsSuccess = (data) => {
  return { type: GET_REPORTS_SUCCESS, payload: data }
}
export const getReportsError = (error) => {
  return { type: GET_REPORTS_ERROR, error }
}

export const getTodayReportsStart = (reports) => {
  return { type: GET_TODAY_REPORTS_START, reports }
}
export const getTodayReports = (date, id) => {
  return dispatch => {
    dispatch(getTodayReportsStart())
    return axios.get('http://localhost:8080/getReports/' + date + '/' + id)
      .then(response => {
        console.log(response.data)
        dispatch(getTodayReportsSuccess(response.data))
      }).catch(err => { dispatch(getTodayReportsError(err)) })
  }
}
export const getTodayReportsSuccess = (data) => {
  return { type: GET_TODAY_REPORTS_SUCCESS, payload: data }
}
export const getTodayReportsError = (error) => {
  return { type: GET_TODAY_REPORTS_ERROR, error }
}