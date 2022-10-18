import React from 'react';
import ForgotPassword from 'components/Auth/ForgotPasswordForm';
import { withRouter } from 'react-router-dom';
import Box from "components/common/Box";
import Grid  from "components/common/Grid";
import Sidebar from "components/Auth/Sidebar";
import { validationHelper } from "helper/validation";
import { forgotPasswordApis } from "stores/ForgotPasswordStore/forgotPasswordApi";

class ForgotPasswordContainer extends React.Component {
   
  constructor(props) {
    super(props);
   
    this.state = {
      isLoading: false,
      email_mobile:"",
      ErrorMsg:"",
      setOpen:false,
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
      const res = await forgotPasswordApis.forgotPassword({
        email: this.state.formError.email,
        mobile: this.state.formError.mobile
      });
      if(res.status === 1)
      {
        // const result = loginParser.login(res);
        // localStorageStore.setToken(result.token);
        // localStorageStore.setLegacyToken(result.legacyToken);  
        // this.setState({ loginResponce: result }, () => this.letUserLogin());

        // this.handleClickOpen();
        this.props.history.push({
          pathname: "/reset-password",
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



  handleClickOpen = () => {
    this.setState({ setOpen: true });
  };

   handleClose = (value) => {
    this.setState({ setOpen: false });
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
 
         <ForgotPassword isLoading={this.state.isLoading} EmailMobileChecker={this.EmailMobileChecker}  
                 onSubmit={this.handleFormSubmit}
                 formError={this.state.formError}
                 isError={this.state.ErrorMsg}
                 isOpenDialog={this.state.setOpen} onDialogClose={this.handleClose}
                 email_mobile={this.state.email_mobile} ></ForgotPassword>
         
       </Box>
     </Grid>
      
     </>
 );
   }
};

 

export default withRouter(ForgotPasswordContainer);

