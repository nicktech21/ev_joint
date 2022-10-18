import Vendor from "components/Admin/Vender";
import React from "react";

export default class VendorContainer extends React.Component {
  
  
  
  constructor(props) {
   super(props);
    this.state = {
 
      isLoading: false,
    
    };
   }



 async componentDidMount() {

    this.props.getVendor(); 
 }

  render() {



    return (
      <>
        <Vendor
         props={this.props}
        />
      </>
    );
  }
}

