import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import Home from './components/home'
import Classroom from './components/classroom';
import Teachers from './components/teachers'
import Student from './components/students'
import axios from 'axios'

class App extends Component {
  componentDidMount(){
    axios.get('/studentList')
    .then(res=>{
          this.setState({students:res.data})
    })
    axios.get('/teacherList')
    .then(res=>{
          this.setState({teachers:res.data})
    })
}
  render() {
    let today = new Date()
    let date = today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear()
    return (
      <div>
        <h1 className="title">Look What I Did Today</h1>
        <p> {date}</p>
        <div className="navBar">
          <div className="nav">


            <a className="btn dropdown-toggle navButtons" href="#" role="button" id="teachers" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Teachers
                                    </a>

            <div className="dropdown-menu" aria-labelledby="teachers">
              <Link className="drop buttonText" to="/teacher/1">Teacher 1</Link>
              <Link className="drop buttonText" to="/teacher/2">Teacher 2</Link>
              <Link className="drop buttonText" to="/teacher/3">Teacher 3</Link>

            </div>
          </div>
          <div className="nav">
            <a className="btn dropdown-toggle navButtons" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Classroom
                                    </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Link className="drop buttonText" to="/classroom/1">Classroom 1</Link>
              <Link className="drop buttonText" to="/classroom/2">Classroom 2</Link>
              <Link className="drop buttonText" to="/classroom/3">Classroom 3</Link>

            </div>
          </div>

        </div>
        <Switch>
          <Route path="/" exact render={(props) => (
            <Home {...props} />
          )} />
          <Route path='/classroom/:id' render={(props) => (
            <Classroom {...props} />
          )} />
          <Route path='/teachers/:id' render={(props) => (
            <Teachers {...props} />
            
          )} />
          <Route path="/student/:id" render={(props)=>(
                                   <Student {...props}/>)} />
        </Switch>
      </div>
    );
  }
}

export default App;
