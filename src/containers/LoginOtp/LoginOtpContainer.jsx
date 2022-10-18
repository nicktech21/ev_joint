import React from 'react';

import LoginOtp from 'components/Auth/LoginOtpForm';
import Box from "components/common/Box";

import Grid  from "components/common/Grid";
// import { makeStyles } from "@mui/styles";
import Sidebar from "components/Auth/Sidebar";
import { loginOtpApis } from "stores/LoginOtpStore/loginOtpApi";
import { validationHelper } from "helper/validation";
import { loginParser } from "stores/LoginStore/loginParser"
import { localStorageStore } from "stores/localStorage";







class LoginOtpContainer extends React.Component {
   
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      otp:"",
      ErrorMsg:"",
      formError: {
        otp:"",
      },
    };

    


    if(props.location.state === undefined)
    {
        props.history.push({
          pathname: "/login",
          state: {
            isLoading: this.state.isLoading
                }
          });
        return;
    }
    else if(props.location.state.vendor_id === undefined)
    {
        props.history.push({
          pathname: "/login",
          state: {
            isLoading: this.state.isLoading
                }
          });
        return;
    }
    else if(props.location.state.email === undefined)
    {
        props.history.push({
          pathname: "/login",
          state: {
            isLoading: this.state.isLoading
                }
          });
        return;
    }
    else if(props.location.state.mobile === undefined)
    {
        props.history.push({
          pathname: "/login",
          state: {
            isLoading: this.state.isLoading
                }
          });
        return;
    }
   
  }




  OTPChecker = (val) => {

    
    this.setState({ "otp": val });

  };

letUserLogin = () => {
    const { loginResponce } = this.state;
    this.props.updateAuthDataAction(loginResponce);
  };

  handleValidation = () => {
    
    const { formError } = this.state;
    const otpValidation = validationHelper.otp(this.state.otp);
    formError.otp = otpValidation.message;

    this.setState({ formError });
    return (
      otpValidation.isValid
    );
  };

  
  
  handleFormSubmit = async () => {
    if (!this.handleValidation()) {
      return;
    }

    let mobile_email = "";
    if(this.props.location.state.mobile === "")
    {
      mobile_email = this.props.location.state.email;
    }
    else if(this.props.location.state.email === "")
    {
      mobile_email = this.props.location.state.mobile;
    }

    this.setState({ isLoading: true });
    // const { formData } = this.state;
    try {
      const res = await loginOtpApis.verifyOtp({
        vendor_id: this.props.location.state.vendor_id,
        mobile: mobile_email,
        otp:this.state.otp,
      });
      if(res.status === 1)
      {
        const result = loginParser.login(res);
        localStorageStore.setToken(result.token);
       // localStorageStore.setLegacyToken(result.legacyToken);  
       localStorageStore.setVendorData(result);

        this.setState({ loginResponce: result }, () => this.letUserLogin());
        // this.setState({ vendor_id: res.result.id });

        // this.handleClickOpen();
      

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





  handleResendOtp = async () => {
   

    this.setState({ isLoading: true });
    // const { formData } = this.state;
    try {
      const res = await loginOtpApis.loginOtp({
        email: this.props.location.state.email,
        mobile: this.props.location.state.mobile
      });
      if(res.status === 1)
      {
        this.setState({ vendor_id: res.result.id });
        this.setState({ ErrorMsg: res.message });
        
        // this.setState({ vendor_id: res.result.id });

        // this.handleClickOpen();
      

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
   
 return  (
  <>
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
        component={Grid} item xs={12} sm={6} md={6} lg={5} sx={{ display: 'flex', justifyContent: 'center', mr:3, ml:3 }}
      >

        <LoginOtp isLoading={this.state.isLoading} OTPChecker={this.OTPChecker}  
                 onSubmit={this.handleFormSubmit}
                 formError={this.state.formError}
                 isError={this.state.ErrorMsg}
                 otp={this.state.otp} resendOtp={this.handleResendOtp}></LoginOtp>
        
      </Box>
    </Grid>
      
     </>
 );
   }
};

 

export default LoginOtpContainer;

