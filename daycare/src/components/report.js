import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchTeachers } from '../actions/teacherActions'

class DailyReport extends Component {
      componentDidMount() {
            this.props.getTeacherList()
      }

      render() {
            const { match, location } = this.props
            let param = (this.props.match.params.id)
                        let report = this.props.reports.find((repo) => {
                  return `${repo.id}`=== `${param}`
            })            
            let student = null
            if(report){student=this.props.store.students.data.find((stud) => {
                 return `${stud.id}` === `${report.student_id}`
            })
      }      
      let classroom=null;
      if(student){classroom=this.props.store.classrooms.data.find((classroom)=>{
            return `${classroom.id}`===`${student.classroom_id}`
      })
}
let teachers;
if(classroom){teachers=this.props.store.teachers.data.find((teacher)=>{
      return `${teacher.classroom_id}`===`${classroom.id}`
})}
            if(teachers)
            {            
            return (           
                  <div>                        
                        <p className='report'>Date:{new Date(report.date).toDateString()}</p>
                        <p className='report'>Name:{student.name}</p>
                        <p className='report'>Room:{classroom.name}</p>
                        <div>{teachers.map((teacher)=>
                        <p className='report'>Teachers:{teachers.name}</p>)}                        
                        </div>
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
      }else{
          return  <p>Loading...</p>
      }
      }
}

function mapStateToProps(state) {
      return {
            reports: state.reportReducer.reports
      };
}
function mapDispatchToProps(dispatch) {
      return { getTeacherList: () => dispatch(fetchTeachers())
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(DailyReport)