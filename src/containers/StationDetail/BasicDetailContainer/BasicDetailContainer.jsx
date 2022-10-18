import BasicDetail from "components/ChargingStationTable/ChargingStationDetail/BasicDetail";
import React, { Component } from "react";

export default class BasicDetailContainer extends Component {

  render() {
    return (
      <>
        <BasicDetail data={this.props.props} />
      </>
    );
  }
}
