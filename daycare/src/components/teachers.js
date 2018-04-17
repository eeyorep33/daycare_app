import React, { Component } from 'react';


class Teachers extends Component {
      render() {
            return (
                  <div>
                        <p>teachers</p>
                        <form>
                              <label>Add teacher</label>
                              <label>Name</label>
                              <input type='text' name='teacherName'/>
                              <label>Room</label>
                              <input type='text' name='teacherRoom'/>
                              <label>Initials</label>
                              <input type='text' name='initials'/>
                        </form>
                  </div>
            )
      }
}
export default Teachers