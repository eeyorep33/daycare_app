import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchTeachers } from '../actions/teacherActions'
import {fetchStudents, removeStudent} from '../actions/studentActions'
class Classroom extends Component {
      componentDidMount() {
            this.props.getStudentList();
            this.props.getTeacherList();
      }
      render() {
            let param = (this.props.match.params.id)
            const { match, location } = this.props
                        let filteredList = this.props.students.data.filter((student) => {
                  return student.classroom_id == param
            })
            let classroomName = this.props.classrooms.data.find((room) => {
                  return room.id == param
            })

            return (
                  <div>
                        <button type="button" className="btn btn-primary addClass navButtons" data-toggle="modal" data-target="#addStudentModal">
                              Add Student
                       </button>
                        <button type="button" className="btn btn-primary addClass navButtons" data-toggle="modal" data-target="#addTeacherModal">
                              Add Teacher
                        </button>
                        <div className="modal fade" id="addStudentModal" tabindex="-1" role="dialog" aria-labelledby="addStudentModalLabel" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                          <div className="modal-header">
                                                <h5 className="modal-title" id="addStudentModalLabel">Add Student</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                      <span aria-hidden="true">&times;</span>
                                                </button>
                                          </div>
                                          <div className="modal-body">
                                                <form onSubmit={(e) => this.props.addaStudent(e, param)} >
                                                      <label>Name</label>
                                                      <input className='checkIn' type="text" name="name" />
                                                      <label className='checkIn'>Email</label>
                                                      <input className='checkIn' type='email' name='email' />
                                                      <div className="modal-footer">
                                                            <button type="submit" class="btn btn-primary">Save changes</button>
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                      </div>
                                                </form>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className="modal fade" id="addTeacherModal" tabindex="-1" role="dialog" aria-labelledby="addTeacherModalLabel" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                          <div className="modal-header">
                                                <h5 className="modal-title" id="addTeacherModalLabel">Add Student</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                      <span aria-hidden="true">&times;</span>
                                                </button>
                                          </div>
                                          <div className="modal-body">
                                                <form onSubmit={(e) => this.props.addaTeacher(e, param)} >
                                                      <label>Name</label>
                                                      <input className='checkIn' type="text" name="teacherName" />
                                                      <label className='checkIn'>Initials</label>
                                                      <input className='checkIn' type='text' name='initials' />
                                                      <div className="modal-footer">
                                                            <button type="submit" class="btn btn-primary">Save changes</button>
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                      </div>
                                                </form>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        {classroomName && <h1 className='classroomTitle'> {classroomName.name}</h1>}
                        {filteredList.map((student) =>
                              <div className='studentDiv'>
                                    <Link className='studentList' to={'/student/' + student.id} onCick={() => this.findReport(student.id)}>{student.name}</Link>
                                    <button type="button" className="btn btn-primary addClass navButtons" data-toggle="modal" data-target="#deleteStudentModal">
                              Delete Student
                       </button>
                              </div>
                        )}
                         <div className="modal fade" id="deleteStudentModal" tabindex="-1" role="dialog" aria-labelledby="deleteStudentModalLabel" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                          <div className="modal-header">
                                                <h5 className="modal-title" id="deleteStudentModalLabel">Delete Student</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                      <span aria-hidden="true">&times;</span>
                                                </button>
                                          </div>
                                          <div className="modal-body">                                               
                                                      Are you sure you want to delete this student?
                                                      <div className="modal-footer">
                                                            <button onClick={(e) => this.props.deleteStudent(e, param)}type="submit" class="btn btn-primary">Save changes</button>
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                      </div>
                                                
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            )
      }
}
function mapStateToProps(state) {
      return {
            classrooms: state.classrooms,
            students: state.students,
            teachers: state.teachers
      };
}
function mapDispatchToProps(dispatch) {
      return {
            getStudentList: (students) => dispatch(fetchStudents(students)),
            getTeacherList: (teachers) => dispatch(fetchTeachers(teachers)),
            removeStudent: (student) => dispatch(removeStudent(student))
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(Classroom)
