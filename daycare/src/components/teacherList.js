import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'



class TeacherList extends Component {
      render() {
            return (
                  <div>
                        <p>teachers</p>
                        <form>
                              <label>Add teacher</label>
                              <label>Name</label>
                              <input type='text' name='teacherName'/>
                              <label>Room</label>
                              <input type='text' name='teacherRoom'/>
                              <label>Initials</label>
                              <input type='text' name='initials'/>
                              <button type='submit'>Submit</button>
                        </form>
                        <form>
                              <label>Delete a teacher</label>
                              <label>Name</label>
                              <button type='submit'>Submit </button>
                        </form>
                  </div>
            )
      }
}
export default TeacherList