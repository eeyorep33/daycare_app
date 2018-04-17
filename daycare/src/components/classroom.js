import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import Student from './students'


class Classroom extends Component {
      
      render(){
            
            const { match, location } = this.props
           
           
           

            return(
                  <div>

                       <p>List of students in room that are links to student page</p>
                       <p>Add Student</p>
                       <form>
                             <label>Name</label>
                             <input type="text" name="name"/>
                             <label>Room</label>
                             <input type="text" name="room"/>
                             <label>Email</label>
                             <input type='email' name='email'/>                             
                             </form>
                            
                             {/* {this.props.students.map((student)=>{
                                   return <Link to={"student/" + student.id}>{student.name}</Link>
                             })} */}

                             {/* // TODO = come back to react router issues with this */}
                           <Switch> 
                                   <Route path="/student/:id" render={(props)=>(
                                    <Student {...props}  />)}/> */}
                            </Switch>

                           
                        </div>
            )
      }
}
// mapStateToProps=(state)=>{
//       return {
//        students:state.students     
//       }
// }
export default Classroom
