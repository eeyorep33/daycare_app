import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'



class TeacherList extends Component {
      render() {
            return (
                  <div>
                        <p>teachers</p>
                        
                        {this.props.teachers.map((teacher)=>
                        <div>
                             {teacher.name} <p>Status:{teacher.status}</p>
                             <button onClick={()=>this.props.teacherCheckIn(teacher.id)}>Check-in</button>
                        </div>)}
                        <form>
                              <label>Delete a teacher</label>
                              <label>Name</label>
                              <input type="text" name='deleteTeacher'/>
                              <button type='submit'>Submit </button>
                        </form>
                  </div>
            )
      }
}
export default TeacherList