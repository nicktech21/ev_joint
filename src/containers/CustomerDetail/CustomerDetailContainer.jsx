import Breadcrumbs from "components/common/Breadcrumbs";
import Text from "components/common/Text";
import Link from "@mui/material/Link";
import CustomerDetail from "components/CustomerTable/CustomerDetail";
import React from "react";

class CustomerDetailContainer extends React.Component {




  
  componentDidMount() {
   
    const id = this.props.history.location.customerId;
   console.log('id containner', id);
    if (!id) {
      this.props.history.goBack();
    }
    this.props.getPersonalDetailAction({id});
    this.props.getPhotosUploadedAction({id});
    this.props.getReviewsAction({id});
   this.props.getChargingStationsAction({id});
   console.log('id containner', id);
   
  }

  render() {
   
    
    const history =this.props.history;
   
    const props={
      personalDetailData:this.props.personalDetailData,
      photosUploaded:this.props.photosUploaded,
      reviews: this.props.reviews,
      chargingData: this.props.chargingData,
      
    }
console.log(props);
console.log('contaner===',this.props);
 

    return (
     
      
      <>
        <Breadcrumbs>
           <Text  onClick={() => history.goBack()} sx={{cursor: "pointer"}} > Customers </Text>  
          {/* <Link underline="hover" color="inherit" href="/customer">
          </Link> */}


          <Text
            sx={{
              fontSize: "14px",
            }}
            color="text.primary"
          >
            Customer Details
          </Text>
        </Breadcrumbs>


        <CustomerDetail props={props} />
      </>
    );
  }
}
export default CustomerDetailContainer;
