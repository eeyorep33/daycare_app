import React, { Component } from 'react';
import { connect } from 'react-redux'
class DailyReport extends Component {
      render() {
            return (
                  <div>
                        <p>Date</p>
                        <p>Name:</p>
                        <p>Room:</p>
                        <p>Teachers:</p>
                        <p>Check-in Time:</p>
                        <p>Check-out Time:</p>
                        <p>Playtime:</p>
                        <p>Feeding:</p>
                        <p>Diapering:</p>
                        <p>Naps:</p>
                        <p>Supplies:</p>
                        <p>Medications:</p>
                        <p>Comments:</p>
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
      return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(DailyReport)