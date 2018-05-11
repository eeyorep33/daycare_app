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
import axios from 'axios'
import { connect } from 'react-redux'
import { addClassroom, addStudent, getStudents, getTeachers, getClassrooms, addDiapering, addFeeding, addNap, addMeds, addComments, addSupplies, removeStudent, addPlayTime, studentStatus, getClassroomList, getStudentList, getTeacherList } from './actions/index'
let today = new Date()
let date = today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear()

class App extends Component {
  constructor() {
    super()
    this.state = {
      classrooms: [],
      students: [],
      teachers: [],
      report: [],
      feeding: [],
      nap: [],
      diapering: [],
      playTime: [],
      meds: [],
      supplies: [],
      comments: []
    }
  }
  componentDidMount() {
    this.props.addClass({ name: 'Classroom 11' })
    this.props.getClassrooms()
    this.props.getStudents()
    this.props.getTeachers()
    axios.get('http://localhost:8080/classroomList')
      .then(res => {
        this.setState({ classrooms: res.data })
      })
      .catch((error) => {
        console.log(error)
      })
    axios.get('http://localhost:8080/studentList')
      .then(res => {
        this.setState({ students: res.data })
      })
      .catch((error) => {
        console.log(error)
      })
    axios.get('http://localhost:8080/teacherList')
      .then(res => {
        this.setState({ teachers: res.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  findReport = (id, dt) => {
    let studentId = id
    let todayDate = dt
  }
  getStudents = (id) => {
    axios.get('http://localhost:8080/classroomList/' + id)
      .then(res => {
        this.setState({ students: res.data })
      })
      .catch((error) => {
        console.log(error)
      })
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
    let studentId = id
    let feeding = e.target.feedingTime.value
    let diaper = e.target.diaperingTime.value
    let meds = e.target.medTime.value
    let report = { student_id: studentId, date: date }
  }
  addClassroom = (e) => {
    e.preventDefault()
    let newClass = { name: e.target.addClass.value }
    axios.post('http://localhost:8080/classroomList', newClass)
      .then(res => {
        console.log(res.data)
        this.setState({ classrooms: [...this.state.classrooms, res.data] })
      })
    e.target.addClass.value = ''
  }
  deleteClassroom = (e) => {
    e.preventDefault()
    let deletedClass = e.target.deleteClass.value
    let deleted = this.state.classrooms.filter((room) => {
      return room.name == deletedClass
    })
    let deletedId = deleted[0].id
    axios.delete('http://localhost:8080/classroomList/' + deletedId)
    e.target.deleteClass.value = ''
  }
  addStudent = (e, room) => {
    e.preventDefault()
    let studentName = e.target.name.value
    let studentEmail = e.target.email.value
    let newStudent = {
      name: studentName,
      email: studentEmail,
      classroom_id: parseInt(room),
      status: 'out'
    }
    axios.post('http://localhost:8080/studentList', newStudent)
    e.target.name.value = ''
    e.target.email.value = ''
    axios.get('http://localhost:8080/studentList')
      .then(res => {
        this.setState({ students: [...this.state.students, res.data] })
      })
  }
  deleteStudent = (id) => {
    axios.delete('http://localhost:8080/studentList/' + id)
  }
  addTeacher = (e, room) => {
    e.preventDefault()
    let teacherName = e.target.teacherName.value
    let teacherInitials = e.target.initials.value
    let newTeacher = {
      name: teacherName,
      initials: teacherInitials,
      classroom_id: parseInt(room),
      status: 'out'
    }
    axios.post('http://localhost:8080/teacherList', newTeacher)
      .then(res => {
        this.setState({ teachers: [...this.state.teachers, res.data] })
      })
    e.target.teacherName.value = ''
    e.target.initials.value = ''
  }
  deleteTeacher = (e) => {
    e.preventDefault()
    let deletedTeacher = e.target.deleteTeacher.value
    let deleted = this.state.teachers.find((teacher) => {
      return teacher.name == deletedTeacher
    })
    axios.delete('http://localhost:8080/teacherList/' + deleted.id)
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
              {this.state.classrooms.map((room) =>
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
          <form onSubmit={(e) => this.deleteClassroom(e)} className='addClass'>
            <label className=''>Delete Classroom</label>
            <input className='checkIn' type='text' name='deleteClass' />
            <button className=' btn checkIn addButton' type='submit'>Delete</button>
          </form>
          <form onSubmit={(e) => this.addClassroom(e)} className='addClass'>
            <label className=''>Add Classroom</label>
            <input className='checkIn' type='text' name='addClass' />
            <button className=' btn checkIn addButton' type='submit'>Add</button>
          </form>
        </div>
        <Switch>
          <Route path="/" exact render={(props) => (
            <Home {...props} />
          )} />
          <Route path='/classroom/:id' render={(props) => (
            <Classroom {...props}
              students={this.state.students}
              addStudent={this.addStudent}
              classroom={this.state.classrooms}
              addTeacher={this.addTeacher}
              getStudents={this.getStudents}
              deleteStudent={this.deleteStudent}
              teacherList={this.state.teachers}
            />
          )} />
          <Route path='/teacher/:id' render={(props) => (
            <Teachers {...props}
              deleteTeacher={this.deleteTeacher} />
          )} />
          <Route path="/student/:id" render={(props) => (
            <Student {...props}
              students={this.state.students}
              checkIn={this.studentCheckIn} />)}
            studentDetails={this.studentDetails}
            teachers={this.state.teachers}
            reportNumber={this.state.report} />
          <Route path='/report/:id' render={(props) => (
            <Report {...props} />)} />}
            <Route path='reportList' render={(props) => (
            <ReportList {...props} />)} />
          <Route path='/teacherlist' render={(props) => (
            <TeacherList
              teachers={this.state.teachers}
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
    getStudentList: (students) => dispatch(getStudents(students)),
    getClassroomList: (classrooms) => dispatch(getClassrooms(classrooms)),
    getTeacherList: (teachers) => dispatch(getTeachers(teachers))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
