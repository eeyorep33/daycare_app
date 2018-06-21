import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import Home from './components/home'
import Classroom from './components/classroom';
import Student from './components/students'
import Report from './components/report'
import ReportList from './components/reportList'
import TeacherList from './components/teacherList'
import AddClassModal from './components/addClassroomModal'
import DeleteClassModal from './components/deleteClassroomModal'
import { connect } from 'react-redux'
import { removeTeacher, teacherCheckIn, addTeacher, teacherCheckOut } from './actions/teacherActions'
<<<<<<< HEAD
import { studentCheckIn, fetchStudents, studentCheckOut, addStudent, removeStudent, changeStudent, getStudentsByClassroom } from './actions/studentActions'
import { addClassroom, fetchClassrooms, removeClassroom, changeClassroom } from './actions/classroomActions'
import { addReport, getReports, addDiapering, addFeeding, addNap, addMeds, addComments, addSupplies, addPlayTime } from './actions/reportActions'
=======
import { studentCheckIn, fetchStudents, studentCheckOut, addStudent, removeStudent, changeStudent } from './actions/studentActions'
import { addClassroom, fetchClassrooms, removeClassroom, changeClassroom, getStudentsByClassroom } from './actions/classroomActions'
import { addReport, getReports, getAReport, addDiapering, addFeeding, addNap, addMeds, addComments, addSupplies, addPlayTime } from './actions/reportActions'
>>>>>>> 8a8378e244c5e9be97da5318d5f51b44bde48e4f
import Axios from 'axios';
let today = new Date()
let date = today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear()

class App extends Component {
<<<<<<< HEAD
  componentDidMount() {
    this.props.LoadClassrooms()
=======

  componentDidMount() {

    this.props.LoadClassrooms()

>>>>>>> 8a8378e244c5e9be97da5318d5f51b44bde48e4f
  }
  editStudent = (e, id) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const student = { name: name, email: email }
    this.props.changeStudent(student, id)
  }
  editClassroom = (e, id) => {
    e.preventDefault()
<<<<<<< HEAD
    const name = e.target.name.value
    const classroom = { name: name }
=======
    console.log(id)
    const name = e.target.name.value
    const classroom = { name: name }
    console.log(name)
>>>>>>> 8a8378e244c5e9be97da5318d5f51b44bde48e4f
    this.props.changeClassroom(classroom, id)
  }
  getReports = (e, name) => {
    e.preventDefault()
<<<<<<< HEAD
    console.log(name)
    let studentId = this.props.studentList.find((student) => {
=======
    let studentId = this.props.students.find((student) => {
>>>>>>> 8a8378e244c5e9be97da5318d5f51b44bde48e4f
      return student.name === name
    })
    console.log(studentId)
    this.props.getReports(studentId.id)
  }
<<<<<<< HEAD
=======

>>>>>>> 8a8378e244c5e9be97da5318d5f51b44bde48e4f
  addFeeding = (e, id) => {
    e.preventDefault()
    let time = e.target.feedingtime.value
    let food = e.target.food.value
    let amount = e.target.amount.value
    let feeding = { time: time, food: food, amount: amount, report_id: id }
    this.props.addFeed(feeding)
    e.target.food.value=''
    e.target.amount.value=''
    
  }
  addDiapering = (e, id) => {
    e.preventDefault()
    let time = e.target.diapertime.value
    let type = e.target.diaperType.value
    let initials = e.target.initials.value
    let diapering = { time: time, type: type, initials: initials, report_id: id }
    this.props.addDiapers(diapering)
    
  }
  addNap = (e, id) => {
    e.preventDefault()
    let startTime = e.target.napStartTime.value
    let stopTime = e.target.napStopTime.value
    let nap = { startTime: startTime, stopTime: stopTime, report_id: id }
    this.props.addNapTime(nap)
  }
  addMeds = (e, id) => {
    e.preventDefault()
    let time = e.target.medicinetime.value
    let name = e.target.medName.value
    let dosage = e.target.dosage.value
    let meds = { time: time, name: name, amount: dosage, report_id: id }
    this.props.addMedicine(meds)
    e.target.medName.value=''
    e.target.dosage.value=''
  }
  addPlayTime = (e, id) => {
    e.preventDefault()
    let playType = e.target.playType.value
    let activity = e.target.activity.value
    let playTime = { type: playType, activity: activity, report_id: id }
    this.props.addPlay(playTime)
    e.target.playType.value=''
    e.target.activity.value=''
  }
  addComments = (e, id) => {
    e.preventDefault()
    let comment = e.target.comments.value
    let comments = { comment: comment, report_id: id }
    this.props.addCom(comments)
    e.target.comments.value=''
    
  }
  addSupplies = (e, id) => {
    e.preventDefault()
    let supply = e.target.supplies.value
    let supplies = { supply_item: supply, report_id: id }
    this.props.addSup(supplies)
<<<<<<< HEAD
    e.target.supplies.value=''
    
=======
>>>>>>> 8a8378e244c5e9be97da5318d5f51b44bde48e4f
  }
  teacherCheckIn = (e, id) => {
    e.preventDefault()
    this.props.teacherCheckIn(id)
  }
  studentCheckIn = (e, id) => {
    e.preventDefault()
    let report = { student_id: id, date: date }
    this.props.addReport(report)
    this.props.studentCheckIn(id)
  }
  compare = (a, b) => {
    const nameBegin = a.name.toUpperCase()
    const nameEnd = b.name.toUpperCase()
    let comparison = 0
    if (nameBegin > nameEnd) {
      comparison = 1
    } else if (nameEnd > nameBegin) {
      comparison = -1
    }
    return comparison
  }
  studentCheckOut = (e, id) => {
    e.preventDefault()
    this.props.studentCheckOut(id)
  }
  teacherCheckOut = (e, id) => {
    e.preventDefault()
    this.props.teacherCheckOut(id)
  }
  addClassroom = (e) => {
    e.preventDefault()
    let newClass = { name: e.target.addClass.value }
    console.log(newClass)
    this.props.addClass(newClass)
    e.target.addClass.value = ''
  }
  deleteClassroom = (e) => {
    e.preventDefault()
    let deletedClass = e.target.deleteClass.value
<<<<<<< HEAD
    let deleted = this.props.classrooms.find((room) => {
      return room.name == deletedClass
    })
    let deletedId = deleted.id
=======
    let deleted = this.props.classrooms.filter((room) => {
      return room.name == deletedClass
    })
    console.log(deleted)
    let deletedId = deleted[0].id
>>>>>>> 8a8378e244c5e9be97da5318d5f51b44bde48e4f
    this.props.removeClass(deletedId)
    e.target.deleteClass.value = ''
  }
  addaStudent = (e, room) => {
    e.preventDefault()
    let studentName = e.target.name.value
    let studentEmail = e.target.email.value
    let newStudent = {
      name: studentName,
      email: studentEmail,
      classroom_id: parseInt(room),
      status: 'out',
      active:true
    }
    this.props.addNewStudent(newStudent)
    e.target.name.value = ''
    e.target.email.value = ''
  }
  deleteStudent = (id) => {
      this.props.removeStudent(id)
  }
  addaTeacher = (e, room) => {
    e.preventDefault()
    let teacherName = e.target.teacherName.value
    let teacherInitials = e.target.initials.value
    let newTeacher = {
      name: teacherName,
      initials: teacherInitials,
      classroom_id: parseInt(room),
      status: 'out'
    }
    this.props.addNewTeacher(newTeacher)
    e.target.teacherName.value = ''
    e.target.initials.value = ''
  }
  deleteTeacher = (e, id) => {
    e.preventDefault()
<<<<<<< HEAD
=======
    console.log(id)
>>>>>>> 8a8378e244c5e9be97da5318d5f51b44bde48e4f
    this.props.removeTeacher(id)
  }

  render() {
        return (
      <div>
        <h1 className="title">Look What I Did Today</h1>
        <h1 className='date'> {date}</h1>
        <div className="navBar">
          <button className='navButtons btn'>
            <Link className='buttonText' to='/'>Home</Link>
          </button>
          <div className="nav">
            <a className="btn dropdown-toggle navButtons"
              href="#" role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              Classroom</a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
<<<<<<< HEAD
              {this.props.classrooms.sort(this.compare).map((room) =>
                <Link onClick={() => this.props.getStudentsByClassroom(room.id)} className="drop buttonText" to={"/classroom/" + room.id}>{room.name} </Link>
              )}
=======
              <div>
                {this.props.classrooms.map((room) =>
                  <Link onClick={() => this.props.getStudents(room.id)} className="drop buttonText" to={"/classroom/" + room.id}>{room.name} </Link>
                )}
              </div>
>>>>>>> 8a8378e244c5e9be97da5318d5f51b44bde48e4f
            </div>
          </div>





          <button className='navButtons btn'>
            <Link className='buttonText' to='/reportList'>Reports</Link>
          </button>
          <button className='navButtons btn'>
            <Link className='buttonText' to='/teacherlist'>Teachers</Link>
          </button>
          <button type="button" className="btn btn-primary addClass navButtons" data-toggle="modal" data-target="#deleteClassroomModal">
            Delete Classroom
</button>
          <button type="button" className="btn btn-primary addClass navButtons" data-toggle="modal" data-target="#addClassroomModal">
            Add Classroom
</button>
        </div>
<<<<<<< HEAD
        <AddClassModal addClassroom={this.addClassroom}/>        
        <DeleteClassModal deleteClassroom={this.deleteClassroom}/>
=======
        <div className="modal fade" id="addClassroomModal" tabindex="-1" role="dialog" aria-labelledby="addClassroomModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modalTitle" id="addClassroomModalLabel">Add Classroom</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={(e) => this.addClassroom(e)} >
                  <label className='modalContent'>Classroom Name:</label>
                  <input type='text' name='addClass' />
                  <div className="modal-footer">
                    <button type="submit" className="btn saveButton">Save changes</button>
                    <button type="button" className="btn closeButton" data-dismiss="modal">Close</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="deleteClassroomModal" tabindex="-1" role="dialog" aria-labelledby="deleteClassroomModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modalTitle" id="deleteClassroomModalLabel">Delete Classroom</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={(e) => this.deleteClassroom(e)} >
                  <p className='modalContent'>You may only delete a classroom if no students are assigned to that room</p>
                  <label className='modalContent'>Classroom Name:</label>
                  <input type='text' name='deleteClass' />
                  <div className="modal-footer">
                    <button type="submit" className="btn saveButton">Save changes</button>
                    <button type="button" className="btn closeButton" data-dismiss="modal">Close</button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
>>>>>>> 8a8378e244c5e9be97da5318d5f51b44bde48e4f
        <Switch>
          <Route path="/" exact render={(props) => (
            <Home {...props} />
          )} />
          <Route path='/classroom/:id' render={(props) => (
            <Classroom {...props}
              compareName={this.compare}
              addaStudent={this.addaStudent}
              addaTeacher={this.addaTeacher}
              getStudents={this.getStudents}
              deleteStudent={this.deleteStudent}
              editClassroom={this.editClassroom}
            />
          )} />
          <Route path="/student/:id" render={(props) => (
            <Student {...props}
              checkIn={this.studentCheckIn}
              studentDetails={this.studentDetails}
              addDiapering={this.addDiapering}
              addFeeding={this.addFeeding}
              addNap={this.addNap}
              addMeds={this.addMeds}
              addComments={this.addComments}
              addSupplies={this.addSupplies}
              addPlayTime={this.addPlayTime}
              editStudent={this.editStudent}
              checkOut={this.studentCheckOut} />)}
          />
          <Route path='/report/:id' render={(props) => (
            <Report {...props} />)} />}
            <Route path='/reportList' render={(props) => (
            <ReportList {...props} getReports={this.getReports} />)} />
          <Route path='/teacherlist' render={(props) => (
            <TeacherList
              teacherCheckIn={this.teacherCheckIn}
              deleteTeacher={this.deleteTeacher}
              teacherCheckOut={this.teacherCheckOut}
              {...props} />)} />}
        </Switch>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    classrooms: state.classroomReducer.classrooms,
<<<<<<< HEAD
    students: state.studentReducer.students,
    studentList: state.studentReducer.studentList
=======
    students: state.studentReducer.students
>>>>>>> 8a8378e244c5e9be97da5318d5f51b44bde48e4f
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addDiapers: (diapering) => dispatch(addDiapering(diapering)),
    addFeed: (feeding) => dispatch(addFeeding(feeding)),
    addMedicine: (meds) => dispatch(addMeds(meds)),
    addSup: (sup) => dispatch(addSupplies(sup)),
    addCom: (comment) => dispatch(addComments(comment)),
    addPlay: (play) => dispatch(addPlayTime(play)),
    addNapTime: (nap) => dispatch(addNap(nap)),
    addClass: (newClass) => dispatch(addClassroom(newClass)),
    addReport: (newReport) => dispatch(addReport(newReport)),
    removeClass: (room) => dispatch(removeClassroom(room)),
    removeStudent: (student) => dispatch(removeStudent(student)),
    LoadClassrooms: () => dispatch(fetchClassrooms()),
    removeTeacher: (teacher) => dispatch(removeTeacher(teacher)),
    addNewStudent: (newStudent) => dispatch(addStudent(newStudent)),
    addNewTeacher: (newTeacher) => dispatch(addTeacher(newTeacher)),
    getReports: (name) => dispatch(getReports(name)),
    getStudentList: (students) => dispatch(fetchStudents(students)),
    studentCheckIn: (id) => dispatch(studentCheckIn(id)),
    teacherCheckIn: (id) => dispatch(teacherCheckIn(id)),
    teacherCheckOut: (id) => dispatch(teacherCheckOut(id)),
    getStudents: (students) => dispatch(getStudentsByClassroom(students)),
    changeStudent: (student, id) => dispatch(changeStudent(student, id)),
<<<<<<< HEAD
    getStudentsByClassroom: (id) => dispatch(getStudentsByClassroom(id)),
=======
>>>>>>> 8a8378e244c5e9be97da5318d5f51b44bde48e4f
    changeClassroom: (name, id) => dispatch(changeClassroom(name, id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
