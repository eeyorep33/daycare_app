import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchTeachers } from '../actions/teacherActions'
import { fetchStudents, removeStudent } from '../actions/studentActions'
class Classroom extends Component {
      constructor() {
            super()
            this.state = {
                  classroomName: '',
                  classroomDetails: {}
            }
      }
      componentWillReceiveProps(nextProps) {
            let param = (nextProps.match.params.id)
            if (nextProps.classrooms.length > 0) {
                  let classroomDetails = nextProps.classrooms.find((classroom) => {
                        return classroom.id == param
                  })
                  this.setState({
                        classroomDetails: classroomDetails,
                        classroomName: classroomDetails.name,

                  })
            }
      }
      componentDidMount() {
            let param = (this.props.match.params.id)
            this.props.getTeacherList();
      }
      updateClassroomName = (value) => {
            this.setState({
                  classroomName: value
            })
      }
      render() {
            let param = (this.props.match.params.id)
            const { match, location } = this.props
            let classroomName = this.props.classrooms.find((room) => {
                  return room.id == param
            })
            return (
                  <div>
                        <button type="button" className="btn btn-primary addClass navButtons" data-toggle="modal" data-target="#editClassroomModal">
                              Edit Classroom
                       </button>
                        <button type="button" className="btn btn-primary addClass navButtons" data-toggle="modal" data-target="#addStudentModal">
                              Add Student
                       </button>
                        <button type="button" className="btn btn-primary addClass navButtons" data-toggle="modal" data-target="#addTeacherModal">
                              Add Teacher
                        </button>
                        <div className="modal fade" id="editClassroomModal" tabindex="-1" role="dialog" aria-labelledby="editStudentModalLabel" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                          <div className="modal-header">
                                                <h5 className="modalTitle" id="editClassroomModalLabel">Edit Classroom</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                      <span aria-hidden="true">&times;</span>
                                                </button>
                                          </div>
                                          <div className="modal-body">
                                                <form onSubmit={(e) => this.props.editClassroom(e, param)} >
                                                      <label className='modalContent modalAlign'>Name</label>
                                                      <input onChange={(e) => this.updateClassroomName(e.target.value)} className='checkIn' type="text" value={this.state.classroomName} name="name" />
                                                      <div className='modalDisplay'>
                                                      </div>
                                                      <div className="modal-footer">
                                                            <button type="submit" className="btn saveButton">Save changes</button>
                                                            <button type="button" className="btn closeButton" data-dismiss="modal">Close</button>
                                                      </div>
                                                </form>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className="modal fade" id="addStudentModal" tabindex="-1" role="dialog" aria-labelledby="addStudentModalLabel" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                          <div className="modal-header">
                                                <h5 className="modalTitle" id="addStudentModalLabel">Add Student</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                      <span aria-hidden="true">&times;</span>
                                                </button>
                                          </div>
                                          <div className="modal-body">
                                                <form onSubmit={(e) => this.props.addaStudent(e, param)} >
                                                      <label className='modalContent modalAlign'>Name</label>
                                                      <input className='checkIn' type="text" name="name" />
                                                      <div className='modalDisplay'>
                                                            <label className='checkIn modalContent'>Email</label>
                                                            <input className='checkIn' type='email' name='email' />
                                                      </div>
                                                      <div className="modal-footer">
                                                            <button type="submit" className="btn saveButton">Save changes</button>
                                                            <button type="button" className="btn closeButton" data-dismiss="modal">Close</button>
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
                                                <h5 className="modalTitle" id="addTeacherModalLabel">Add Student</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                      <span aria-hidden="true">&times;</span>
                                                </button>
                                          </div>
                                          <div className="modal-body">
                                                <form onSubmit={(e) => this.props.addaTeacher(e, param)} >
                                                      <label className='modalContent modalAlign'>Name</label>
                                                      <input className='checkIn' type="text" name="teacherName" />
                                                      <div className='modalDisplay'>
                                                            <label className='checkIn modalContent'>Initials</label>
                                                            <input className='checkIn' type='text' name='initials' />
                                                      </div>
                                                      <div className="modal-footer">
                                                            <button type="submit" class="btn saveButton">Save changes</button>
                                                            <button type="button" class="btn closeButton" data-dismiss="modal">Close</button>
                                                      </div>
                                                </form>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        {classroomName && <h1 className='classroomTitle'> {classroomName.name}</h1>}
                        {this.props.students && this.props.students.sort(this.props.compareName).map((student) => {
                              if (!student.active) return null;
                              return <div className='studentDiv'>
                                    <Link className='studentList' to={'/student/' + student.id} onCick={() => this.findReport(student.id)}>{student.name}</Link>
                                    <button type="button" className="btn btn-primary addClass navButtons" data-toggle="modal" data-target={"#deleteStudentModal" + student.id}>
                                          Delete Student
                       </button>
                                    <div className="modal fade" id={"deleteStudentModal" + student.id} tabindex="-1" role="dialog" aria-labelledby="deleteStudentModalLabel" aria-hidden="true">
                                          <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                      <div className="modal-header">
                                                            <h5 className="modalTitle" id="deleteStudentModalLabel">Delete Student</h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                  <span aria-hidden="true">&times;</span>
                                                            </button>
                                                      </div>
                                                      <div className="modal-body">
                                                            <p className='modalContent'>Are you sure you want to delete this student?</p>
                                                            <div className="modal-footer">
                                                                  <button onClick={() => this.props.deleteStudent(student.id)} type="submit" className="btn saveButton">Save changes</button>
                                                                  <button type="button" className="btn closeButton" data-dismiss="modal">Close</button>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        })}

                  </div>
            )
      }
}
function mapStateToProps(state) {
      return {
            classrooms: state.classroomReducer.classrooms,
            students: state.studentReducer.students,
            teachers: state.teacherReducer.teachers,
            reports: state.reportReducer.reports
      };
}
function mapDispatchToProps(dispatch) {
      return {
            getTeacherList: (teachers) => dispatch(fetchTeachers(teachers)),
            removeStudent: (student) => dispatch(removeStudent(student)),
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(Classroom)
