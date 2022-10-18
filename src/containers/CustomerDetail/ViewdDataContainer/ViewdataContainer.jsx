

import React, { Component } from 'react'
import ViewDetail from 'components/CustomerTable/ViewDetail/ViewDetail'

export default class ViewdataContainer extends Component {

constructor(props) {
  super(props)
};



  render() {

  
    return (
      <>
        <ViewDetail  props={this.props}/>
      </>
    )
  }
}
