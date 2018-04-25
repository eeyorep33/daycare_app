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
  constructor(){
    super()
    this.state={
      classrooms:[]
    }
  }
  componentDidMount() {   
    axios.get('http://localhost:8080/classroomList')
      .then(res => {
                this.setState({ classrooms: res.data })
      })
      .catch((error)=>{
        console.log(error)
      })
    
  }
  render() {
    const getStudents=(room)=>{
axios.get('/classroom/' + room)
.then(res =>{
  
})
    }
    let today = new Date()
    let date = today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear()
    return (
      <div>
        <h1 className="title">Look What I Did Today</h1>
        <p> {date}</p>
        <div className="navBar">
          <button><Link to='/'>Home</Link></button>
         
          <div className="nav">
            <a className="btn dropdown-toggle navButtons" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Classroom</a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              {this.state.classrooms.map((room)=>
                
               <Link onClick={()=>this.getStudents(room.id)}className="drop buttonText" to={"/classroom/" + room.id}>{room.name} </Link>
              )
            }
              
             
            </div>
          </div>
          <button><Link to='/reportList'>Reports</Link></button>
        </div>
        
        <Switch>
          <Route path="/" exact render={(props) => (
            <Home {...props} />
          )} />
          <Route path='/classroom/:id' render={(props) => (
            <Classroom {...props} />
          )} />
          <Route path='/teacher/:id' render={(props) => (
            <Teachers {...props} />
          )} />
          <Route path="/student/:id" render={(props) => (
            <Student {...props} />)} />
          <Route path='/report/:id' render={(props) => (
            <Report {...props} />)} />}
            <Route path='reportList' render={(props) => (
            <ReportList {...props} />)} />
             <Route path='/teacherlist' render={(props) => (
            <TeacherList {...props} />)} />}
                   </Switch>
      </div>
    );
  }
}

export default App;
