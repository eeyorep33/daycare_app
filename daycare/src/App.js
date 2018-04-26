import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import Home from './components/home'
import Classroom from './components/classroom';
import Teachers from './components/teachers'
import Student from './components/students'
import Report from './components/report'
import ReportList from './components/reportList'
import TeacherList from './components/teacherList'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      classrooms: [], students: [], teachers: [], reports: [], feeding: [], nap: [], diapering: [], playTime: [], meds: [], supplies: [], comments: []
    }
  }
  componentDidMount() {
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
    console.log(this.state.teachers)
  }
teacherCheckIn=(id)=>{

let teacherStatus=this.state.teachers.find((teacher)=>{
  return teacher.id==id
})
console.log(teacherStatus)
teacherStatus.status='in'
console.log(teacherStatus.status)
this.setState({teachers:teacherStatus.status})
console.log(this.state.teachers)

}
addTeacher=(e, room)=>{
  e.preventDefault()
  let teacherName=e.target.teacherName.value
  let teacherInitials= e.target.initials.value
  let newTeacher= {name:teacherName, initials:teacherInitials, classroom_id:parseInt(room), status:'out'}
  console.log(newTeacher)
  axios.post('http://localhost:8080/teacherList', newTeacher)
  e.target.teacherName.value=''
  e.target.initials.value=''
}
  addStudent = (e, room) => {
    e.preventDefault()
    let studentName = e.target.name.value
    let studentEmail = e.target.email.value
    console.log(studentName)
    let newStudent = { name: studentName, email: studentEmail, classroom_id: parseInt(room), status: 'out' }

    axios.post('http://localhost:8080/studentList', newStudent)

    e.target.name.value = ''
    e.target.email.value = ''
    axios.get('http://localhost:8080/studentList')
      .then(res => {
        this.setState({ students: res.data })
      })

  }

  render() {



    let today = new Date()
    let date = today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear()
    return (
      <div>
        <h1 className="title">Look What I Did Today</h1>
        <h1> {date}</h1>
        <div className="navBar">
          <button className='navButtons btn'><Link className='buttonText' to='/'>Home</Link></button>

          <div className="nav">
            <a className="btn dropdown-toggle navButtons" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Classroom</a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              {this.state.classrooms.map((room) =>

                <Link className="drop buttonText" to={"/classroom/" + room.id}>{room.name} </Link>
              )
              }


            </div>
          </div>
          <button className='navButtons btn'><Link className='buttonText' to='/reportList'>Reports</Link></button>
          <button className='navButtons btn'><Link className='buttonText' to='/teacherlist'>Teachers</Link></button>
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
              addTeacher={this.addTeacher}/>
          )} />
          <Route path='/teacher/:id' render={(props) => (
            <Teachers {...props} />
          )} />
          <Route path="/student/:id" render={(props) => (
            <Student {...props}
              students={this.state.students} />)}
            studentDetails={this.studentDetails} />
          <Route path='/report/:id' render={(props) => (
            <Report {...props} />)} />}
            <Route path='reportList' render={(props) => (
            <ReportList {...props} />)} />
          <Route path='/teacherlist' render={(props) => (
            <TeacherList 
            teachers={this.state.teachers}
            teacherCheckIn={this.teacherCheckIn}
            {...props} />)} />}
                   </Switch>
      </div>
    );
  }
}

export default App;
