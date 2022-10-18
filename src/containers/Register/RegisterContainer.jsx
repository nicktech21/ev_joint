import React from 'react';
import { withRouter } from 'react-router-dom';

import Register from 'components/Auth/RegistrationForm';
import Box from "components/common/Box";

import Grid  from "components/common/Grid";
import Sidebar from "components/Auth/Sidebar";
import { validationHelper } from "helper/validation";
// import { localStorageStore } from "stores/localStorage";
import { registerApis } from "stores/RegisterStore/registerApi";

// import { config } from "config";
// import { registerParsers } from 'stores/RegisterStore/registerParser';

class RegisterContainerWithRouter extends React.Component {
   
  

  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        date_of_birth: new Date(),
        email: "",
        mobile: "",
        pan: "",
        gst_no: "",
        area: "",
        business_type: "",
        business_url: "",
        business_mobile: "",
        business_email: "",
      },
      formError: {
        name: "",
        date_of_birth: "",
        email: "",
        mobile: "",
        pan: "",
        gst_no: "",
        area: "",
        business_type: "",
        business_url: "",
        business_mobile: "",
        business_email: "",
      },
      isLoading: false,
      ErrorMsg:"",
    };
  }


  
  
  handleInputChange = (name, value) => {
    if (name === "mobile" && isNaN(value)) {
      return;
    }
    const { formData } = this.state;
    formData[name] = value;
    this.setState({formData});
    
  };


  

  handleValidation = () => {
    const { formError, formData } = this.state;

    const nameValidation = validationHelper.name(formData.name);
    formError.name = nameValidation.message;

    // const emailValidation = validationHelper.email(formData.email);
    // formError.email = emailValidation.message;

    const businessEmailValidation = validationHelper.email(formData.business_email);
    formError.business_email = businessEmailValidation.message;

    const MobileValidation = validationHelper.mobile(formData.mobile);
    formError.mobile = MobileValidation.message;

    const businessMobileValidation = validationHelper.mobile(formData.business_mobile);
    formError.business_mobile = businessMobileValidation.message;

    const panValidation = validationHelper.pan(formData.pan);
    formError.pan = panValidation.message;

    const gstValidation = validationHelper.gst(formData.gst_no);
    formError.gst_no = gstValidation.message;

    const businessTypeValidation = validationHelper.businessType(formData.business_type);
    formError.business_type = businessTypeValidation.message;

    const businessUrlValidation = validationHelper.businessUrl(formData.business_url);
    formError.business_url = businessUrlValidation.message;

    const areaValidation = validationHelper.area(formData.area);
    formError.area = areaValidation.message;

    const dateofbirthValidation = validationHelper.dateOfBirth(formData.date_of_birth);
    formError.date_of_birth = dateofbirthValidation.message;

    // const mobileValidation = validationHelper.mobile(formData.mobile);
    // formError.mobile = mobileValidation.message;

    this.setState({ formError });
    return (
      nameValidation.isValid &&
      // emailValidation.isValid &&
      businessEmailValidation.isValid &&
      businessMobileValidation.isValid &&
      businessUrlValidation.isValid &&
      panValidation.isValid &&
      gstValidation.isValid &&
      businessTypeValidation.isValid &&
      areaValidation.isValid &&
      dateofbirthValidation.isValid 
      // mobileValidation.isValid
    );
  };


  
  handleFormSubmit = async () => {
    if (!this.handleValidation()) {
      return;
    }

    this.setState({ isLoading: true });
    const { formData } = this.state;
    try {
      const res = await registerApis.signUp({
        name: formData.name,
        date_of_birth: formData.date_of_birth,
        email: formData.email,
        mobile: formData.mobile,
        pan: formData.pan,
        gst_no: formData.gst_no,
        area: formData.area,
        business_type: formData.business_type,
        business_url: formData.business_url,
        business_mobile: formData.business_mobile,
        business_email: formData.business_email,
      });
      // const result = registerParsers.login(res);
      if(res.status === 1)
      {
        this.props.history.push({
          pathname: "/set-password",
          state: {
              reset_password_code: res.result.reset_password_code
          }
          });
      

      }
      else
      {
        this.setState({ ErrorMsg: res.message });
      }
    } catch (error) {
      if (error.response) {
      
        this.setState({ ErrorMsg: error.response.data.message });
       
      } else if (error.request) {
       
        this.setState({ ErrorMsg: error.request });
      } else {
        
        this.setState({ ErrorMsg: error.message });
        
      }
      this.setState({ isLoading: false });
    }
  };







  render() {
    return (

 <Grid container columnSpacing={{ xs: 1, sm: 2, md: 30, lg:50 }}>
      <Box
        component={Grid}
        item
        xs={12}
        sm={5}
        md={4}
        lg={4}
        display={{ xs: "none", sm: "block", lg: "block", md: "block" }}
      >
        <Sidebar></Sidebar>
      </Box>
      <Box
        component={Grid}
        item
        xs={12}
        sm={6}
        md={6}
        lg={5}
        sx={{ display: "flex", justifyContent: "center", mr: 3, ml: 3 }}
      >

        <Register onChange={this.handleInputChange}
              onSubmit={this.handleFormSubmit}
              formData={this.state.formData}
              formError={this.state.formError}
              isLoading={this.state.isLoading}
              isError={this.state.ErrorMsg}></Register>   
        
      </Box>
    </Grid>
     
  );
}
}

  
const RegisterContainer = withRouter(RegisterContainerWithRouter)
export default RegisterContainer;