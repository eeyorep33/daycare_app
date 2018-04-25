import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'; 



class Classroom extends Component {

      render() {

            const { match, location } = this.props




            return (
                  <div>
                        <p>Add classroom</p>
                        <form>
                         <label>Name</label> 
                         <input type='text' name='className'/>
                         <button type='submit'>Submit</button>    
                        </form>

                        {this.props.students.map((student)=>{
                             <Link to={'/student/' + student.id}>{ student.name}</Link>
                        })}
                        <p>Add Student</p>
                        <form>
                              <label>Name</label>
                              <input type="text" name="name" />
                              <label>Email</label>
                              <input type='email' name='email' />
                              <button type='submit'>Submit</button>
                        </form>

                        {/* {this.props.students.map((student)=>{
                                   return <Link to={"student/" + student.id}>{student.name}</Link>
                             })} */}

                        {/* // TODO = come back to react router issues with this */}
                        {/* <Switch>
                              <Route path="/student/:id" render={(props) => (
                                    <Student {...props} />)} /> 
                            </Switch> */}


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
