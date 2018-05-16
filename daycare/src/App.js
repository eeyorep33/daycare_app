import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import Home from './components/home'
import Classroom from './components/classroom';
import Teachers from './components/teachers'
import Student from './components/students'
import Report from './components/report'
import ReportList from './components/reportList'
import TeacherList from './components/teacherList'
import { connect } from 'react-redux'
import { removeTeacher, addTeacher} from './actions/teacherActions'
import {studentCheckIn, addStudent,removeStudent} from './actions/studentActions'
import {addClassroom, fetchClassrooms,  removeClassroom} from './actions/classroomActions'
import {addReport} from './actions/reportActions'
let today = new Date()
let date = today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear()

class App extends Component {
 
    
  
  componentDidMount() {
       this.props.LoadClassrooms()
    
  }
  addFeeding = (e, id) => {
    e.preventDefault()
    let time = e.target.feedingtime.value
    let food = e.target.food.value
    let amount = e.target.amount.value
    let feeding = { time: time, food: food, amount: amount, report_id: id }
  }
  addDiapering = (e, id) => {
    e.preventDefault()
    let time = e.target.diapertime.value
    let type = e.target.type.value
    let initials = e.target.initials.value
    let diapering = { time: time, type: type, initials: initials, report_id: id }
  }
  addNap = (e, id) => {
    e.preventDefault()
    let startTime = e.target.startTime.value
    let stopTime = e.target.stopTime.value
    let nap = { startTime: startTime, stopTime: stopTime, report_id: id }
  }
  addMeds = (e, id) => {
    e.preventDefault()
    let time = e.target.medTime.value
    let name = e.target.medName.value
    let dosage = e.target.dosage.value
    let meds = { time: time, name: name, amount: dosage, report_id: id }
  }
  addPlayTime = (e, id) => {
    e.preventDefault()
    let playType = e.target.playType.value
    let activity = e.target.activity.value
    let playTime = { type: playType, activity: activity, report_id: id }
  }
  addComments = (e, id) => {
    e.preventDefault()
    let comment = e.target.comments.value
    let comments = { comment: comment, report_id: id }
  }
  addSupplies = (e, id) => {
    e.preventDefault()
    let supply = e.target.supplies.value
    let supplies = { supply_item: supply, report_id: id }
  }
  teacherCheckIn = (id) => {
    let teacherStatus = this.state.teachers.find((teacher) => {
      return teacher.id == id
    })
    teacherStatus.status = 'in'
    this.setState({ teachers: teacherStatus.status })
  }
  studentCheckIn = (e, id) => {
    e.preventDefault()        
    let report = { student_id: id, date: date }
    this.props.addReport(report)
    this.props.studentCheckIn(id)
  }
  addClassroom = (e) => {
    e.preventDefault()
    let newClass = { name: e.target.addClass.value }
    this.props.addClass(newClass)
    e.target.addClass.value = ''
  }
  deleteClassroom = (e) => {
    e.preventDefault()
    let deletedClass = e.target.deleteClass.value
    let deleted = this.props.store.classrooms.data.filter((room) => {
      return room.name == deletedClass
    })
    let deletedId = deleted[0].id
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
      status: 'out'
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
  deleteTeacher = (e) => {   
    e.preventDefault() 
    console.log('function accessed') 
    console.log(this.props.store.teachers.data)  
    let deletedTeacher = e.target.deleteTeacher.value
    let deleted = this.props.store.teachers.data.find((teacher) => {
      return teacher.name == deletedTeacher
    })
        this.props.removeTeacher(deleted.id)
         e.target.deleteTeacher.value=''
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
                          {this.props.store.classrooms.data.map((room) =>
                <Link className="drop buttonText" to={"/classroom/" + room.id}>{room.name} </Link>
              )}
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
<button type="button" className="btn btn-primary addClass navButtons" data-toggle="modal" data-target="#classroomModal">
  Add Classroom
</button>
        </div>       

<div className="modal fade" id="addClassroomModal" tabindex="-1" role="dialog" aria-labelledby="addClassroomModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="addClassroomModalLabel">Add Classroom</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form onSubmit={(e) => this.addClassroom(e)} >
      <label>Classroom Name:</label>
      <input type='text' name='addClass'/>
      <div className="modal-footer">
      <button type="submit" class="btn btn-primary">Save changes</button>
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>       
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
        <h5 className="modal-title" id="deleteClassroomModalLabel">Delete Classroom</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form onSubmit={(e) => this.deleteClassroom(e)} >
      <p>You may only delete a classroom if no students are assigned to that room</p>
      <label>Classroom Name:</label>
      <input type='text' name='deleteClass'/>
      <div className="modal-footer">
      <button type="submit" class="btn btn-primary">Save changes</button>
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>       
               </div>      
</form>      
      </div>
     
    </div>
  </div>
</div>
        <Switch>
          <Route path="/" exact render={(props) => (
            <Home {...props} />
          )} />
          <Route path='/classroom/:id' render={(props) => (
            <Classroom {...props}
              addaStudent={this.addaStudent}
              addaTeacher={this.addaTeacher}
              getStudents={this.getStudents}
              deleteStudent={this.deleteStudent}
              
            />
          )} />
          <Route path='/teacher/:id' render={(props) => (
            <Teachers {...props}
              deleteTeacher={this.deleteTeacher} />
          )} />
          <Route path="/student/:id" render={(props) => (
            <Student {...props}
              checkIn={this.studentCheckIn} />)}
            studentDetails={this.studentDetails}             
            />
          <Route path='/report/:id' render={(props) => (
            <Report {...props} />)} />}
            <Route path='reportList' render={(props) => (
            <ReportList {...props} />)} />
          <Route path='/teacherlist' render={(props) => (
            <TeacherList
              teacherCheckIn={this.teacherCheckIn}
              deleteTeacher={this.deleteTeacher}
              {...props} />)} />}
        </Switch>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    store: state
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addClass: (newClass) => dispatch(addClassroom(newClass)),
    addReport: (newReport) => dispatch(addReport(newReport)),
    removeClass:(room)=>dispatch(removeClassroom(room)),
    removeStudent:(student)=>dispatch(removeStudent(student)),
     LoadClassrooms: () => dispatch(fetchClassrooms()),
     removeTeacher:(teacher)=>dispatch(removeTeacher(teacher)),
     addNewStudent: (newStudent) => dispatch(addStudent(newStudent)),
     addNewTeacher: (newTeacher) => dispatch(addTeacher(newTeacher)),
     studentCheckIn:(id)=> dispatch(studentCheckIn(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
