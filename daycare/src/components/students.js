import React, { Component } from 'react';
import TimePicker from 'rc-time-picker'
import moment from 'moment';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addStudent, addDiapering, addFeeding, addNap, addMeds, addComments, addSupplies, removeStudent, addPlayTime, studentStatus } from '../actions/index'
import axios from 'axios'

class Student extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  currentStudent: props.student
            };
      }

      checkIn(e, id) {

            const today = new Date();
            const date = today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear()
            let newReport = {
                  student_id: id, date, feeding: { time: e.target.feedingTime.value}, diapering: {
                        time: e.target.diaperingTime.value}, meds: { time: e.target.medTime.value}
            }
            // this.setState({
            //       currentStudent: { ...currentStudent, status: 'in' }
            // }


           // );
            axios.post('/report', newReport)
                  .then()


      }
      render() {
            const { match, location, report } = this.props;
           // const { name, status } = this.state.currentStudent;
            const format = 'h:mm a';
            const now = moment().hour(6).minute(30);
            let param = (this.props.match.params.id)
            return (<div>
                   <h1 className="studentName">Student Name</h1>                
                  <p className="status">Status:</p>
                  <div className="checkInDiv">
                  <p className="status">Check-in</p>
                  
                        <label className="checkIn">Last Diaper Change</label>
                        <TimePicker
                              name='diaperingTime'
                              showSecond={false}
                              defaultValue={now}
                              className="checkIn"
                              format={format}
                              use12Hours
                              inputReadOnly
                        />
                        <label  className="checkIn">Last Feeding</label>
                        <TimePicker
                              name='feedingTime'
                              showSecond={false}
                              defaultValue={now}
                              className="checkIn"
                              format={format}
                              use12Hours
                              inputReadOnly
                        />
                        <label  className="checkIn">Last Medication</label>
                        <TimePicker
                              name="medTime"
                              showSecond={false}
                              defaultValue={now}
                              className="checkIn"
                              format={format}
                              use12Hours
                              inputReadOnly
                        />
                        <button className="checkIn btn"onClick={() => this.checkIn(param)}>Check-in</button>
                  </div>
                  <div>
                        <div className='checkInDiv'>
                              <label className='add'>Add diaper change:</label>
                              <div className='centerDiv'>
                              <label className='checkIn'>Time:</label>
                              <TimePicker
                                    showSecond={false}
                                    defaultValue={now}
                                    className="checkIn"
                                    format={format}
                                    use12Hours
                                    inputReadOnly
                              />
                              <label className='checkIn'>B/W</label>
                              <select className='checkIn'>
                                    <option value='B'>B</option>
                                    <option value='W'>W</option>
                              </select>
                              <label className='checkIn'>Initials:</label>
                              <select className='checkIn'>
                                    <option value='AL'>AL</option>
                                    <option value='KH'>KH</option>
                                    <option value='BF'>BF</option>
                              </select>
                              <button className='checkIn btn'onClick={() => this.props.addDiapering()}>Add</button>
                              </div>
                              <p className='checkIn'>mapped diaper changes here</p>
                        </div>
                        <div className='checkInDiv'>
                              <label className='add'>Add feeding:</label>
                              <label className='checkIn'>Time:</label>
                              <TimePicker
                                    showSecond={false}
                                    defaultValue={now}
                                    className="checkIn"
                                    format={format}
                                    use12Hours
                                    inputReadOnly
                              />
                              <label className="checkIn">Food type</label>
                              <input  className='checkIn'type='text' name='food' />
                              <label className='checkIn'>Amount</label>
                              <input className='checkIn' type='text' name='amount' />
                              <button className='checkIn btn' onClick={() => this.props.addFeeding()}>Add</button>
                              <p className='checkIn'>mapped feedings here</p>
                        </div>
                        <div className='checkInDiv'>
                              <label className='add'>Add play time: </label>
                              <label className='checkIn'>Type</label>
                              <input className='checkIn' type='text' name='playType' />
                              <label className='checkIn'>Activity</label>
                              <input className='checkIn' type='text' name='activity' />
                              <button className='checkIn btn' onClick={() => this.props.addPlayTime()}>Add</button>
                        </div>
                        <div className='checkInDiv'>
                              <label className='add'>Add nap:</label>
                              <label className='checkIn'>Start time</label>
                              <TimePicker
                                    showSecond={false}
                                    defaultValue={now}
                                    className="checkIn"
                                    format={format}
                                    use12Hours
                                    inputReadOnly
                              />
                              <label className='checkIn'>Stop time</label>
                              <TimePicker
                                    showSecond={false}
                                    defaultValue={now}
                                    className="checkIn"
                                    format={format}
                                    use12Hours
                                    inputReadOnly
                              />
                              <button className='checkIn btn'onClick={() => this.props.addNap()} type='submit'>Add</button>
                              <p className='checkIn'>mapped naps here</p>
                        </div>
                        <div className='checkInDiv'>
                              <label className='add'>Add meds:</label>
                              <label className='checkIn'>Time:</label>
                              <TimePicker
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
                              <button className='checkIn btn' onClick={() => this.props.addMeds()} type='submit'>Add</button>
                              <p className='checkIn'>mapped meds here</p>
                        </div>
                        <div className='checkInDiv'>
                              <label className='add'>Add supplies:</label>
                              <input className='checkIn' type="text" name='supplies' />
                              <button className='checkIn btn' onClick={() => this.props.addSupplies()} type='submit'>Add</button>
                              <p className='checkIn'>mapped supplies here</p>
                        </div>
                        <div className='checkInDiv'>
                              <label className='add'>Add comments:</label>
                              <input className='checkIn' type="text" name='comments' />
                              <button className='checkIn btn' onClick={() => this.props.addComments()} type='submit'>Add</button>
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
            report: state.report
      };
}
export default connect(mapStateToProps)(Student);