import React, { Component } from 'react';
import TimePicker from 'rc-time-picker'
import moment from 'moment';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { fetchStudents, studentCheckOut } from '../actions/studentActions'
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
      componentWillReceiveProps(nextProps) {
            let param = (nextProps.match.params.id)
            if (nextProps.students.length > 0) {
                  let studentDetails = nextProps.students.find((student) => {
                        return student.id == param
                  })
                  this.setState({
                        studentDetails: studentDetails,
                        name: studentDetails.name,
                        email: studentDetails.email
                  })
            }
      }
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
      findTeacher=(id)=>{
            let studentDetails = this.props.students.find((student) => {
                  return student.id == id
            })
                       let teach=this.props.teachers.filter((teacher)=>{
return `${teacher.classroom_id}`===`${studentDetails.classroom_id}`
            })            
            return <div>
                  <p>Teacher(s):</p>
                  {teach.map((teacher)=>
                       <p> {teacher.name}</p>
                  

                  )}
            </div> 
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
                  {this.findTeacher(param)}
                  {this.props.reports && <p>Report #:{this.props.reports.id}</p>}
                  <div>
                        <div className='checkInDiv'>
                              <label className='add addTitleTur'>Add diaper change:</label>
                              <form onSubmit={(e) => this.props.addDiapering(e, this.props.reports.id)}>
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
                                          {this.props.teachers.map((teach) =>
                                                <option value={teach.initials}>{teach.initials}</option>
                                          )}
                                    </select>
                                    <button type="submit" className='checkIn btn saveButton'>Add</button>
                              </form>
                              {this.props.diapering.length > 0 && this.props.diapering.map((diaper) =>
                                    <div>
                                          <p> Time:{diaper.time}</p>
                                          <p> B/W:{diaper.type}</p>
                                          <p>Teacher initials:{diaper.initials}</p>
                                    </div>)
                              }
                        </div>
                        <div className='checkInDiv'>
                              <form onSubmit={(e) => { this.props.addFeeding(e, this.props.reports.id) }}>
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
                              
                              {this.props.feeding.length>0 && this.props.feeding.map((feed) =>
                                    <div><p>Time:{feed.time}</p>
                                          <p>Food: {feed.food}</p>
                                          <p>Amount: {feed.amount}</p></div>)
                              }
                        </div>
                        <div className='checkInDiv'>
                              <form onSubmit={(e) => this.props.addPlayTime(e, this.props.reports.id)}>
                                    <label className='add addTitleTur'>Add play time: </label>
                                    <label className='checkIn'>Type</label>
                                    <input className='checkIn' type='text' name='playType' />
                                    <label className='checkIn'>Activity</label>
                                    <input className='checkIn' type='text' name='activity' />
                                    <button className='checkIn btn saveButton' type="submit">Add</button>
                              </form>
                              
                              {this.props.playTime.length>0 && this.props.playTime.map((play) =>
                                    <div><p>Activity:{play.activity} </p>
                                          <p> Type:{play.type}</p></div>)
                              }
                        </div>
                        <div className='checkInDiv'>
                              <form onSubmit={(e) => this.props.addNap(e, this.props.reports.id)}>
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
                              
                              {this.props.nap.length>0 && this.props.nap.map((nap) =>
                                    <div><p>Start time:{nap.startTime}</p>
                                          <p>Stop time: {nap.stopTime}</p></div>)
                              }
                        </div>
                        <div className='checkInDiv'>
                              <form onSubmit={(e) => this.props.addMeds(e, this.props.reports.id)}>
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
                             
                              {this.props.meds.length>0 && this.props.meds.map((med) =>
                                    <div><p>Time:{med.time}</p>
                                          <p>Medicine name:{med.name}</p>
                                          <p> Amount:{med.amount}</p></div>)
                              }
                        </div>
                        <div className='checkInDiv'>
                              <form onSubmit={(e) => this.props.addSupplies(e, this.props.reports.id)}>
                                    <label className='add addTitleOrg'>Add supplies:</label>
                                    <input className='checkIn' type="text" name='supplies' />
                                    <button className='checkIn btn closeButton' type='submit'>Add</button>
                              </form>
                              <p>Supplies needed:</p>
                              
                              {this.props.supplies.length>0 && this.props.supplies.map((sup) =>
                                    <div>{sup.supply_item}</div>)
                              }
                        </div>
                        <div className='checkInDiv'>
                              <form onSubmit={(e) => this.props.addComments(e, this.props.reports.id)}>
                                    <label className='add addTitleTur'>Add comments:</label>
                                    <input className='checkIn' type="text" name='comments' />
                                    <button className='checkIn btn saveButton' type='submit'>Add</button>
                              </form>
                              <p>Comments:</p>
                             
                              {this.props.comment.length>0 && this.props.comment.map((com) =>
                                    <div>{com.comment}</div>)
                              }
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
            diapering: state.reportReducer.diapering,
            feeding: state.reportReducer.feeding,
            meds: state.reportReducer.meds,
            supplies: state.reportReducer.supplies,
            comment: state.reportReducer.comment,
            playTime: state.reportReducer.playTime,
            nap: state.reportReducer.nap
      };
}
function mapDispatchToProps(dispatch) {
      return {

            studentCheckOut: (id) => dispatch(studentCheckOut(id)),
            getStudentList: () => dispatch(fetchStudents()),
            getDailyReports: (dat, id) => dispatch(getTodayReports(dat, id))
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(Student);