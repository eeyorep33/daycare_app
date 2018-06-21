import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchTeachers } from '../actions/teacherActions'

class DailyReport extends Component {
<<<<<<< HEAD
      render() {
            const { match, location } = this.props
            let param = (this.props.match.params.id)
            let report = this.props.reports.find((repo) => {
                  return `${repo.id}` === param
            })
            let student = null
            if (report) {
                  student = this.props.students.find((stud) => {
                        return `${stud.id}` === `${report.student_id}`
                  })
            }
            let classroom = null;
            if (student) {
                  classroom = this.props.classrooms.find((classroom) => {
                        return `${classroom.id}` === `${student.classroom_id}`
                  })
            }
            let teach = null
            if (classroom) {
                  teach = this.props.teachers.filter((teacher) => {
                        return `${teacher.classroom_id}` === `${classroom.id}`
                  })
            }

            if (report && student) {
                  return (
                        <div>
                              <p className='report'>Date:{new Date(report.date).toDateString()}</p>
                              <p className='report'>Name:{student.name}</p>
                              <p className='report'>Room:{classroom.name}</p>
                              <p> Teachers:</p>
                              <div>{teach.map((teacher) =>
                                    <p className='report'>{teacher.name}</p>)}
                              </div>
                              <p className='report'>Playtime:</p>
                              <div>{report.playTime.map((play) =>
                                    <p className='report'>{play.type},{play.activity}</p>)}
                              </div>
                              <p className='report'>Feeding:</p>
                              <div>{report.feeding.map((feed) =>
                                    <p className='report'>{feed.time},{feed.food},{feed.amount}</p>)}
                              </div>
                              <p className='report'>Diapering:</p>
                              <div>{report.diapering.map((diaper) =>
                                    <p className='report'>{diaper.time},{diaper.type},{diaper.initials}</p>)}
                              </div>
                              <p className='report'>Naps:</p>
                              <div>{report.nap.map((na) =>
                                    <p className='report'>{na.startTime}-{na.stopTime}</p>)}
                              </div>
                              <p className='report'>Supplies:</p>
                              <div>{report.supplies.map((sup) =>
                                    <p className='report'>{sup.supply_item}</p>)}
                              </div>
                              <p className='report'>Medications:</p>
                              <div>{report.meds.map((med) =>
                                    <p className='report'>{med.time}, {med.amount}, {med.name}</p>)}
                              </div>
                              <p className='report'>Comments:</p>
                              <div>{report.comment.map((com) =>
                                    <p className='report'>{com.comment}</p>)}
                              </div>
=======
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
>>>>>>> 8a8378e244c5e9be97da5318d5f51b44bde48e4f
                        </div>
                  )
            } else {
                  return <p>Loading...</p>
            }
      }
}

function mapStateToProps(state) {
      return {
<<<<<<< HEAD
            reports: state.reportReducer.pastReports,
            students: state.studentReducer.studentList,
            teachers: state.teacherReducer.teachers,
            classrooms: state.classroomReducer.classrooms,
            
=======
            reports: state.reportReducer.reports
>>>>>>> 8a8378e244c5e9be97da5318d5f51b44bde48e4f
      };
}
function mapDispatchToProps(dispatch) {
      return { getTeacherList: () => dispatch(fetchTeachers())
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(DailyReport)