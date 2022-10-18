import ChargingHistory from 'components/CustomerTable/ChargingHistory/ChargingHistory';
import React from 'react'

 class ChargingDataContainer extends React.Component {
 

 
 
  render() {
   
    return (
      <>
        <ChargingHistory data={this.props.props} />
      </>
    )
  }
}
export default ChargingDataContainer;

