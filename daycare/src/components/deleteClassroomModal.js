import React, { Component } from 'react';

class DeleteClassModal extends Component {

    render() {

        return (
            <div className="modal fade" id="deleteClassroomModal" tabindex="-1" role="dialog" aria-labelledby="deleteClassroomModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modalTitle" id="deleteClassroomModalLabel">Delete Classroom</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={(e) => this.props.deleteClassroom(e)} >
                                <p className='modalContent'>You may only delete a classroom if no students are assigned to that room</p>
                                <label className='modalContent'>Classroom Name:</label>
                                <input type='text' name='deleteClass' />
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
export default DeleteClassModal