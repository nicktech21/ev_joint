

import React, { Component } from 'react'
import Reviews from 'components/CustomerTable/Reviews/Reviews';
export default class ReviewsDataContainer extends Component {
  render() {

    return (
      <>
        <Reviews props={this.props.props} />
      </>
    )
  }
}

