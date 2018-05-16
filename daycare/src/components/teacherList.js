import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {fetchTeachers} from '../actions/teacherActions'
class TeacherList extends Component {
      componentDidMount()
{
      this.props.getTeacherList()
}      render() {
            return (
                  <div>
                        {this.props.store.teachers.data.map((teacher) =>
                              <div>
                                    {teacher.name} <p>Status:{teacher.status}</p>
                                    <button onClick={() => this.props.teacherCheckIn(teacher.id)}>Check-in</button>
                              </div>)}
                        <form onSubmit={(e) => this.props.deleteTeacher(e)}>
                              <label>Delete a teacher</label>
                              <label>Name</label>
                              <input type="text" name='deleteTeacher' />
                              <button type='submit'>Submit </button>
                        </form>
                  </div>
            )
      }
}
function mapStateToProps(state) {
      return {
            store: state
      };
}
function mapDispatchToProps(dispatch) {
      return {
            getTeacherList: () => dispatch(fetchTeachers())
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(TeacherList)