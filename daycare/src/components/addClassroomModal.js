import React, { Component } from 'react';

class AddClassModal extends Component {
    render() {

        return (
            <div className="modal fade" id="addClassroomModal" tabindex="-1" role="dialog" aria-labelledby="addClassroomModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modalTitle" id="addClassroomModalLabel">Add Classroom</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={(e) => this.props.addClassroom(e)} >
                                <label className='modalContent'>Classroom Name:</label>
                                <input type='text' name='addClass' />
                                <div className="modal-footer">
                                    <button type="submit" className="btn saveButton">Save changes</button>
                                    <button type="button" className="btn closeButton" data-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddClassModal