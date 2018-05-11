import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
class ReportList extends Component{
    render(){
        return(
            <div>
                <label>Search for past reports</label>
                <label>Name:</label>
                <input type='text' name='nameSearch'/>
                <button type='submit'>Search</button>
                <label>Date</label>
                <input type='date' name='dateSearch'/>
                <button type='submit'>Search</button>
                <label>Classroom</label>
                <input type='text' name='classroomSearch'/>
                <button type='submit'>Search</button>
                
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
         store:state
    };
}
function mapDispatchToProps(dispatch){
return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportList)