import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'; 
import axios from 'axios'
import { addStudent, addDiapering, addFeeding, addNap, addMeds, addComments, addSupplies, removeStudent, addPlayTime, studentStatus } from '../actions/index'


class Classroom extends Component {
    
      render() {
            
            let param = (this.props.match.params.id)
            const { match, location } = this.props
let filteredList=this.props.students.filter((student)=>{
      return student.classroom_id==param
})
let classroomName=this.props.classroom.find((room)=>{
      return room.id==param
})




            return (
                  <div>
                        {/* {this.props.getStudents(param)} */}
                       <h1 className='classroomTitle'> {classroomName.name}</h1>

                       
                        
                        <form onSubmit={(e)=>this.props.addStudent(e,param)}className='checkInDiv topmar'>
                        <label className='add'>Add Student</label>
                              <label>Name</label>
                              <input className='checkIn'type="text" name="name" />
                              <label className='checkIn'>Email</label>
                              <input className='checkIn' type='email' name='email' />
                              <button className='checkIn btn' type='submit'>Submit</button>
                        </form>
                        <form onSubmit={(e)=>this.props.addTeacher(e,param)}className='checkInDiv topmar'>
                        <label className='add'>Add Teacher</label>
                              <label>Name</label>
                              <input className='checkIn'type="text" name="teacherName" />
                              <label className='checkIn'>Initials</label>
                              <input className='checkIn' type='text' name='initials' />
                              <button className='checkIn btn' type='submit'>Submit</button>
                        </form>
                        
                        {filteredList.map((student)=>
                        <div className='studentDiv'>
                             <Link className='studentList'to={'/student/' + student.id} onCick={()=>this.findReport(student.id)}>{ student.name}</Link>
                             <button onClick={()=>this.props.deleteStudent(student.id)}className='deleteStudent btn'>Delete Student</button>
                             </div>
                        )}
                      
                        


                  </div>
            )
      }
}
const mapStateToProps=(state)=>{
      return {
       students:state.students, 
       classrooms: state.classrooms    
      }
}
export default Classroom
