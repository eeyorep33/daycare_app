import React, { Component } from 'react';
import { connect } from 'react-redux'

class DailyReport extends Component {

      render() {
            const { match, location } = this.props
            let param = (this.props.match.params.id)
            let report = this.props.store.reports.data.filter((repo) => {
                  return repo.id == param
            })
            let student = this.props.store.students.data.filter((stud) => {
                  return stud.id == report.student_id
            })
            return (
                  <div>
                        {console.log(report.id)}
                        {console.log(report.student_id)}
                        <p className='report'>Date:{report.date}</p>
                        <p className='report'>Name:{student.name}</p>
                        <p className='report'>Room:</p>
                        <p className='report'>Teachers:</p>
                        <p className='report'>Check-in Time:</p>
                        <p className='report'>Check-out Time:</p>
                        <p className='report'>Playtime:</p>
                        <p className='report'>Feeding:</p>
                        <p className='report'>Diapering:</p>
                        <p className='report'>Naps:</p>
                        <p className='report'>Supplies:</p>
                        <p className='report'>Medications:</p>
                        <p className='report'>Comments:</p>
                  </div>
            )
      }
}

function mapStateToProps(state) {
      return {
            store: state
      };
}
function mapDispatchToProps(dispatch) {
      return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(DailyReport)