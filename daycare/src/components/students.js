import React, { Component } from 'react';
import TimePicker from 'rc-time-picker'
import moment from 'moment';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { studentCheckOut } from '../actions/studentActions'
import { getTodayReports } from '../actions/reportActions'
let today = new Date()
let date = today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear()



class Student extends Component {

      constructor() {
            super()
            this.state = {
                  name: '',
                  email: '',
                  studentDetails: {}
            }
      }
      //       componentWillReceiveProps(nextProps){
      //             console.log(this.props.students)
      //             let param = (nextProps.match.params.id)
      // if(nextProps.students.length>0){
      //       let studentDetails = nextProps.students.find((student) => {
      //             return student.id == param
      //       })

      // this.setState({
      //       studentDetails: studentDetails,
      //       name: studentDetails.name,
      //       email: studentDetails.email
      // })
      // }
      //       }
      componentDidMount() {
            let param = (this.props.match.params.id)
            this.props.getDailyReports(date, param)
      }


      findStudent = (id) => {
            let studentDetails = this.props.students.find((student) => {
                  return student.id == id
            })
            return studentDetails ? <div>
                  <h1 className="studentName">{studentDetails.name}</h1>
                  <p className="status">Status:{studentDetails.status}</p>
            </div> : <p>Loading...</p>
      }
      updateName = (value) => {
            this.setState({
                  name: value
            })

      }
      updateEmail = (value) => {
            this.setState({
                  email: value
            })
      }
      render() {
            const { match, location } = this.props
            let param = (this.props.match.params.id)

            // let report = this.props.reports.data.find((report) => {
            //       return `${report.student_id}` === param
            // })

            const format = 'h:mm a';
            const now = moment().hour(6).minute(30);
            let studentDetails = this.props.students.find((student) => {
                  return student.id == param
            })
            return (<div>
                  <button type="button" className="btn btn-primary addClass navButtons" data-toggle="modal" data-target="#editStudentModal">
                        Edit Student
                       </button>

                  {studentDetails && <div className="modal fade" id="editStudentModal" tabindex="-1" role="dialog" aria-labelledby="editStudentModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                              <div className="modal-content">
                                    <div className="modal-header">
                                          <h5 className="modalTitle" id="editStudentModalLabel">Edit Student</h5>
                                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                          </button>
                                    </div>
                                    <div className="modal-body">
                                          <form onSubmit={(e) => this.props.editStudent(e, param)} >
                                                <label className='modalContent modalAlign'>Name</label>
                                                <input onChange={(e) => this.updateName(e.target.value)} className='checkIn' type="text" value={this.state.name} name="name" />
                                                <div className='modalDisplay'>
                                                      <label className='checkIn modalContent' >Email</label>
                                                      <input onChange={(e) => this.updateEmail(e.target.value)} className='checkIn' type='email' value={this.state.email} name='email' />
                                                </div>
                                                <div className="modal-footer">
                                                      <button type="submit" className="btn saveButton">Save changes</button>
                                                      <button type="button" className="btn closeButton" data-dismiss="modal">Close</button>
                                                </div>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </div>}
                  {this.findStudent(param)}
                  <button onClick={(e) => { this.props.checkIn(e, param) }} disabled={studentDetails ? studentDetails.status === 'in' : true} className='navButtons btn checkInButton'>Check In</button>
                  {this.props.reports && <p>Report #:{this.props.reports.id}</p>}
                  <div>
                        <div className='checkInDiv'>
                              <label className='add addTitleTur'>Add diaper change:</label>

                              <form onSubmit={(e) => this.props.addDiapering(e)}>
                                    <label className='checkIn'>Time:</label>
                                    <TimePicker
                                          name='diapertime'
                                          showSecond={false}
                                          defaultValue={now}
                                          className="checkIn"
                                          format={format}
                                          use12Hours
                                          inputReadOnly
                                    />
                                    <label className='checkIn'>B/W</label>
                                    <select className='checkIn' name='diaperType'>
                                          <option value='B'>B</option>
                                          <option value='W'>W</option>
                                    </select>
                                    <label className='checkIn'>Initials:</label>
                                    <select name='initials'>
                                          {console.log(this.props.teachers)}
                                          {this.props.teachers.map((teach) =>
                                                <option value={teach.initials}>{teach.initials}</option>
                                          )}
                                    </select>
                                    <button type="submit" className='checkIn btn saveButton'>Add</button>
                              </form>


                        </div>
                        <div className='checkInDiv'>
                              <form onSubmit={(e) => { this.props.addFeeding(e, 46) }}>
                                    <label className='add addTitleOrg'>Add feeding:</label>
                                    <label className='checkIn'>Time:</label>
                                    <TimePicker
                                          name='feedingtime'
                                          showSecond={false}
                                          defaultValue={now}
                                          className="checkIn"
                                          format={format}
                                          use12Hours
                                          inputReadOnly
                                    />
                                    <label className="checkIn">Food type</label>
                                    <input className='checkIn' type='text' name='food' />
                                    <label className='checkIn'>Amount</label>
                                    <input className='checkIn' type='text' name='amount' />
                                    <button className='checkIn btn closeButton' type="submit">Add</button>
                              </form>
                              <p className='checkIn' id='feedingTimeLocation'></p>
                        </div>
                        <div className='checkInDiv'>
                              <form onSubmit={(e) => this.props.addPlayTime(e)}>
                                    <label className='add addTitleTur'>Add play time: </label>
                                    <label className='checkIn'>Type</label>
                                    <input className='checkIn' type='text' name='playType' />
                                    <label className='checkIn'>Activity</label>
                                    <input className='checkIn' type='text' name='activity' />
                                    <button className='checkIn btn saveButton' type="submit">Add</button>
                              </form>
                        </div>
                        <div className='checkInDiv'>
                              <form onSubmit={(e) => this.props.addNap(e)}>
                                    <label className='add addTitleOrg'>Add nap:</label>
                                    <label className='checkIn'>Start time</label>
                                    <TimePicker
                                          name='napStartTime'
                                          showSecond={false}
                                          defaultValue={now}
                                          className="checkIn"
                                          format={format}
                                          use12Hours
                                          inputReadOnly
                                    />
                                    <label className='checkIn'>Stop time</label>
                                    <TimePicker
                                          name='napStopTime'
                                          showSecond={false}
                                          defaultValue={now}
                                          className="checkIn"
                                          format={format}
                                          use12Hours
                                          inputReadOnly
                                    />
                                    <button className='checkIn btn closeButton' type='submit'>Add</button>
                              </form>
                              <p className='checkIn'>mapped naps here</p>
                        </div>
                        <div className='checkInDiv'>
                              <form onSubmit={(e) => this.props.addMeds(e)}>
                                    <label className='add addTitleTur'>Add meds:</label>
                                    <label className='checkIn'>Time:</label>
                                    <TimePicker
                                          name='medicinetime'
                                          showSecond={false}
                                          defaultValue={now}
                                          className="checkIn"
                                          format={format}
                                          use12Hours
                                          inputReadOnly
                                    />
                                    <label className='checkIn'>Name</label>
                                    <input className='checkIn' type='text' name='medName' />
                                    <label className='checkIn'>Dosage</label>
                                    <input className='checkIn' type='text' name='dosage' />
                                    <button className='checkIn btn saveButton' type='submit'>Add</button>
                              </form>
                              <p className='checkIn' id='medTimeLocation'></p>
                        </div>
                        <div className='checkInDiv'>
                              <form onSubmit={(e) => this.props.addSupplies(e)}>
                                    <label className='add addTitleOrg'>Add supplies:</label>
                                    <input className='checkIn' type="text" name='supplies' />
                                    <button className='checkIn btn closeButton' type='submit'>Add</button>
                              </form>
                              <p className='checkIn'>mapped supplies here</p>
                        </div>
                        <div className='checkInDiv'>
                              <form onSubmit={(e) => this.props.addComments(e)}>
                                    <label className='add addTitleTur'>Add comments:</label>
                                    <input className='checkIn' type="text" name='comments' />
                                    <button className='checkIn btn saveButton' type='submit'>Add</button>
                              </form>
                              <p className='checkIn'>mapped comments here</p>
                        </div>
                  </div>
                  <button onClick={() => this.props.studentCheckOut(param)} className='checkOut btn closeButton' disabled={studentDetails ? studentDetails.status === 'out' : true}>Check Out</button>
            </div>
            )
      }
}

function mapStateToProps(state) {
      return {
            students: state.studentReducer.students,
            teachers: state.teacherReducer.teachers,
            reports: state.reportReducer.reports,
            classrooms:state.classroomReducer.classrooms
      };
}
function mapDispatchToProps(dispatch) {
      return {

            studentCheckOut: (id) => dispatch(studentCheckOut(id)),
            getDailyReports: (dat, id) => dispatch(getTodayReports(dat, id))
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(Student);