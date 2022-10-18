import React from 'react';
import SendOtp from 'components/Auth/SendOtp';
import { withRouter } from 'react-router-dom';
import Box from "components/common/Box";
import Grid  from "components/common/Grid";
import Sidebar from "components/Auth/Sidebar";
import { validationHelper } from "helper/validation";
import { loginOtpApis } from "stores/LoginOtpStore/loginOtpApi";

class SendOtpContainer extends React.Component {
   
  constructor(props) {
    super(props);
   
    this.state = {
      isLoading: false,
      email_mobile:"",
      ErrorMsg:"",
      setOpen:false,
      vendor_id:0,
      // reset_password_code:props.location.state.reset_password_code,
      formError: {
        email_mobile:"",
        email:"",
        mobile:"",
      },
    };

  }
   


  EmailMobileChecker = (val) => {

    
    this.setState({ "email_mobile": val });

  };



  handleValidation = () => {
    
    const { formError } = this.state;
    const emailMobileValidation = validationHelper.emailORmobile(this.state.email_mobile);
    formError.email_mobile = emailMobileValidation.message;
    if(emailMobileValidation.emailValid){
       formError.email = this.state.email_mobile;
       formError.mobile = "";
      }
    if(emailMobileValidation.mobileValid){ formError.mobile = this.state.email_mobile; formError.email = "";  }


    this.setState({ formError });
    return (
      emailMobileValidation.isValid
    );
  };


  
  handleFormSubmit = async () => {
    if (!this.handleValidation()) {
      return;
    }

    this.setState({ isLoading: true });
    // const { formData } = this.state;
    try {
      const res = await loginOtpApis.loginOtp({
        email: this.state.formError.email,
        mobile: this.state.formError.mobile
      });
      if(res.status === 1)
      {
        // const result = loginParser.login(res);
        // localStorageStore.setToken(result.token);
        // localStorageStore.setLegacyToken(result.legacyToken);  
        // this.setState({ loginResponce: result }, () => this.letUserLogin());
        this.setState({ vendor_id: res.result.id });

        this.handleClickOpen();
      

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



  handleClickOpen = () => {
    this.setState({ setOpen: true });
  };

   handleClose = (value) => {
    this.setState({ setOpen: false });
  };


  openOtpPage = () => {
   
    this.props.history.push({
      pathname: "/verify-otp",
      state: {
          email: this.state.formError.email,
          mobile: this.state.formError.mobile,
          vendor_id: this.state.vendor_id,
      }
      });
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
 
         <SendOtp isLoading={this.state.isLoading} EmailMobileChecker={this.EmailMobileChecker}  
                 onSubmit={this.handleFormSubmit}
                 formError={this.state.formError}
                 isError={this.state.ErrorMsg}
                 isOpenDialog={this.state.setOpen} onDialogClose={this.handleClose}
                 email_mobile={this.state.email_mobile} openOtpPage={this.openOtpPage}></SendOtp>
         
       </Box>
     </Grid>
      
     </>
 );
   }
};

 

  
export default withRouter(SendOtpContainer);

