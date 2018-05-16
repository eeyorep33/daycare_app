import React, { Component } from 'react';
import TimePicker from 'rc-time-picker'
import moment from 'moment';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addDiapering, addFeeding, addNap, addMeds, addComments, addSupplies, addPlayTime} from '../actions/reportActions'
import {fetchStudents} from'../actions/studentActions'



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
            let report_id = ''
            const format = 'h:mm a';
            const now = moment().hour(6).minute(30);
            return (<div>
                  {this.findStudent(param)}
                  <button onClick={(e) => { this.props.checkIn(e, param) }} className='navButtons btn checkInButton'>Check In</button>
                  <p>Report #:</p>
                  <div>
                        <div className='checkInDiv'>
                              <label className='add'>Add diaper change:</label>
                              <div className='centerDiv'>
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
                                    <select className='checkIn'>
                                          {/* {this.props.teachers.data.map((teacher)=>{
                                     <option value={teacher.name}>{teacher.name}</option> */}
                                          })}
                                                                             </select>
                                    <button className='checkIn btn' onClick={(e) => this.props.addDiapering(e, report_id)}>Add</button>
                              </div>
                              <p className='checkIn' id='diaperChangeLocation'></p>
                        </div>
                        <div className='checkInDiv'>
                              <label className='add'>Add feeding:</label>
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
                              <button className='checkIn btn' onClick={(e) => this.props.addFeeding(e, report_id)}>Add</button>
                              <p className='checkIn' id='feedingTimeLocation'></p>
                        </div>
                        <div className='checkInDiv'>
                              <label className='add'>Add play time: </label>
                              <label className='checkIn'>Type</label>
                              <input className='checkIn' type='text' name='playType' />
                              <label className='checkIn'>Activity</label>
                              <input className='checkIn' type='text' name='activity' />
                              <button className='checkIn btn' onClick={(e) => this.props.addPlayTime(e, report_id)}>Add</button>
                        </div>
                        <div className='checkInDiv'>
                              <label className='add'>Add nap:</label>
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
                              <button className='checkIn btn' onClick={(e) => this.props.addNap(e, report_id)} type='submit'>Add</button>
                              <p className='checkIn'>mapped naps here</p>
                        </div>
                        <div className='checkInDiv'>
                              <label className='add'>Add meds:</label>
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
                              <button className='checkIn btn' onClick={(e) => this.props.addMeds(e, report_id)} type='submit'>Add</button>
                              <p className='checkIn' id='medTimeLocation'></p>
                        </div>
                        <div className='checkInDiv'>
                              <label className='add'>Add supplies:</label>
                              <input className='checkIn' type="text" name='supplies' />
                              <button className='checkIn btn' onClick={(e) => this.props.addSupplies(e, report_id)} type='submit'>Add</button>
                              <p className='checkIn'>mapped supplies here</p>
                        </div>
                        <div className='checkInDiv'>
                              <label className='add'>Add comments:</label>
                              <input className='checkIn' type="text" name='comments' />
                              <button className='checkIn btn' onClick={(e) => this.props.addComments(e, report_id)} type='submit'>Add</button>
                              <p className='checkIn'>mapped comments here</p>
                        </div>
                  </div>
                  <button className='checkOut btn'>Check Out</button>
            </div>
            )
      }
}

function mapStateToProps(state) {
      return {
            students: state.students,
            teachers: state.teachers
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
            getStudentList: () => dispatch(fetchStudents()),
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(Student);