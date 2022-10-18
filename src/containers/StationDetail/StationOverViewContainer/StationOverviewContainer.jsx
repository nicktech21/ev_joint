import StationOverview from 'components/ChargingStationTable/ChargingStationDetail/StationOverview'
import React, { Component } from 'react'

export default class StationOverviewContainer extends Component {
  

  render() {
 
   
    return (
      <>
        <StationOverview data={this.props.props}/>
      </>
    )
  }
}
