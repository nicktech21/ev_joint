

import React, { Component } from 'react'
import PhotosUploaded from 'components/CustomerTable/PhotosUploaded/PhotosUploaded'

export default class PhotosContainer extends Component {
  
  render() {
    console.log(this.props.props);
  
    return (
      <>
        <PhotosUploaded props={this.props.props} />
      </>
    )
  }
}
