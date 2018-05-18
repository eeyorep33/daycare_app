import React, { Component } from 'react';
import TimePicker from 'rc-time-picker'
import moment from 'moment';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addDiapering, addFeeding, addNap, addMeds, addComments, addSupplies, addPlayTime } from '../actions/reportActions'
import { fetchStudents, studentCheckOut } from '../actions/studentActions'
let today = new Date()
let date = today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear()



class Student extends Component {
      componentDidMount() {
            this.props.getStudentList()
      }
      
           
      findStudent = (id) => {
            let studentDetails = this.props.students.data.find((student) => {
                  return student.id == id
            })
            return studentDetails ? <div>
                  <h1 className="studentName">{studentDetails.name}</h1>
                  <p className="status">Status:{studentDetails.status}</p>
            </div> : <p>Loading...</p>
      }

      render() {
            const { match, location } = this.props
            let param = (this.props.match.params.id)
            let report=this.props.reports.data.find((report)=>{
                  return report.student_id===param && report.date===date                           
      })
      
            const format = 'h:mm a';
            const now = moment().hour(6).minute(30);
            let studentDetails = this.props.students.data.find((student) => {
                  return student.id == param
            })
                        return (<div>
                  {this.findStudent(param)}
                  <button onClick={(e) => { this.props.checkIn(e, param) }} disabled={studentDetails.status === 'in'} className='navButtons btn checkInButton'>Check In</button>
                  <p>Report #:</p>
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
                                                {this.props.teachers.data.map((teach) =>
                                                      <option value={teach.initials}>{teach.initials}</option>
                                                )}
                                          </select>
                                          <button type="submit" className='checkIn btn saveButton'>Add</button>
                                    </form>
                              
                             
                        </div>
                        <div className='checkInDiv'>
                              <form onSubmit={(e) => this.props.addFeeding(e)}>
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
                  <button onClick={() => this.props.studentCheckOut( param)} className='checkOut btn closeButton' disabled={studentDetails.status === 'out'}>Check Out</button>
            </div>
            )
      }
}

function mapStateToProps(state) {
      return {
            students: state.students,
            teachers: state.teachers,
            reports:state.reports
      };
}
function mapDispatchToProps(dispatch) {
      return {
            addDiapers: (diapering) => dispatch(addDiapering(diapering)),
            addFeed: (feeding) => dispatch(addFeeding(feeding)),
            addMedicine: (meds) => dispatch(addMeds(meds)),
            addSup: (sup) => dispatch(addSupplies(sup)),
            addCom: (comment) => dispatch(addComments(comment)),
            addPlay: (play) => dispatch(addPlayTime(play)),
            addNapTime: (nap) => dispatch(addNap(nap)),
            studentCheckOut: (id) => dispatch(studentCheckOut(id)),
            getStudentList: () => dispatch(fetchStudents()),
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(Student);