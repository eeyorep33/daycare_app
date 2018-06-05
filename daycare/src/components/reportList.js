import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchStudents } from '../actions/studentActions'
class ReportList extends Component {
    componentDidMount(){
        this.props.getStudentList()
    }

    render() {
        return (
            <div>
                <label>Search for past reports</label>
                <div className="nav">
                    <a className="btn dropdown-toggle navButtons"
                        href="#" role="button"
                        id="dropdownMenuLink1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        Students</a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                        {this.props.store.students.data.map((stud) =>
                            <p onClick={(e) => this.props.getReports(e, stud.name)} className="drop buttonText">{stud.name}</p>
                        )}
                    </div>
                </div>
                {this.props.store.reports.data && this.props.store.reports.data.map((report) =>
                    <div className='reportDiv'>
                        <Link className='reportList'to={'/report/' + report.id}>{new Date(report.date).toDateString()}</Link>
                    </div>
                )}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        store: state
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getStudentList: (students) => dispatch(fetchStudents(students)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportList)