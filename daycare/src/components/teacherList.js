import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchTeachers } from '../actions/teacherActions'

class TeacherList extends Component {
      componentDidMount() {
            this.props.getTeacherList()
      } render() {
            let param = (this.props.match.params.id)
            const { match, location } = this.props
            return (
                  <div>
                        {this.props.teachers.map((teacher) =>
                              <div className='checkInDiv'>
                                    <p className='teacherName'> {teacher.name}</p><p className='teacherName'> Status:{teacher.status}</p>
                                    <button className='teacherStatus btn' onClick={(e) => this.props.teacherCheckOut(e, teacher.id)}>Check-Out</button>
                                    <button className='teacherStatus btn' onClick={(e) => this.props.teacherCheckIn(e, teacher.id)}>Check-In</button>
                                    <button type="button" className="btn btn-primary addClass navButtons" data-toggle="modal" data-target={"#deleteTeacherModal" + teacher.id}>
                                          Delete Teacher
                       </button>
                                    <div className="modal fade" id={"deleteTeacherModal" + teacher.id} tabindex="-1" role="dialog" aria-labelledby="deleteTeacherModalLabel" aria-hidden="true">
                                          <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                      <div className="modal-header">
                                                            <h5 className="modalTitle" id="deleteTeacherModalLabel">Delete Teacher</h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                  <span aria-hidden="true">&times;</span>
                                                            </button>
                                                      </div>
                                                      <div className="modal-body">
                                                            <p className='modalContent'>Are you sure you want to delete this teacher?</p>
                                                            <div className="modal-footer">
                                                                  <button onClick={(e) => this.props.deleteTeacher(e, teacher.id)} type="submit" className="btn saveButton">Save changes</button>
                                                                  <button type="button" className="btn closeButton" data-dismiss="modal">Close</button>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>)}
                  </div>
            )
      }
}
function mapStateToProps(state) {
      return {
            teachers: state.teacherReducer.teachers
      };
}
function mapDispatchToProps(dispatch) {
      return {
            getTeacherList: () => dispatch(fetchTeachers())
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(TeacherList)