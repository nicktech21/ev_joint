import React from 'react';

import ResetPassword from 'components/Auth/ResetPasswordForm';
import Box from "components/common/Box";

import Grid  from "components/common/Grid";
import Sidebar from "components/Auth/Sidebar";
import { validationHelper } from "helper/validation";
import { setPasswordApis } from "stores/SetPasswordStore/setPasswordApi";
import { loginParser } from "stores/LoginStore/loginParser"
import { localStorageStore } from "stores/localStorage";


class ResetPasswordContainer extends React.Component {

  constructor(props) {
    super(props);
   
    this.state = {
      isLoading: false,
      showErrorMessage:false,
      isCPasswordDirty:false,
      password:"",
      confirm_password:"",
      showPassword: false,
      confirmshowPassword: false,
      ErrorMsg:"",
      setOpen:false,
      // reset_password_code:props.location.state.reset_password_code,
      formError: {
       
        password: "",
        confirm_password: "",
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
      else if(props.location.state.reset_password_code === undefined)
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
   

  
  letUserLogin = () => {
    const { loginResponce } = this.state;
    this.props.updateAuthDataAction(loginResponce);
  };



   passwordChecker = (val) => {

    
    this.setState({ "password": val });

  };



   passwordCheckerConfirm = (val) => {

    this.setState({ "confirm_password": val });
    this.setState({ "isCPasswordDirty": true });
    
    if (this.state.password === val) {
      this.setState({ "showErrorMessage": false });
  } else {
      this.setState({ "showErrorMessage": true });
  }
    

  };





   handleClickShowPassword = () => {
    if (this.state.showPassword === false) {
      this.setState({ "showPassword": true });
  } else {
      this.setState({ "showPassword": false });
  }
    
  };

   handleClickShowPasswordConfirm = () => {
    if (this.state.confirmshowPassword === false) {
      this.setState({ "confirmshowPassword": true });
  } else {
      this.setState({ "confirmshowPassword": false });
  }
  };

   handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  // letUserLogin = () => {
  //   const { loginResponce } = this.state;
  //   this.props.updateAuthDataAction(loginResponce);
  // };



  handleValidation = () => {
    
    const { formError } = this.state;
    const passwordValidation = validationHelper.setPassword(this.state.password);
    formError.password = passwordValidation.message;

    const confirmPasswordValidation = validationHelper.setPassword(this.state.confirm_password);
    formError.confirm_password = confirmPasswordValidation.message;


    this.setState({ formError });
    return (
      passwordValidation.isValid &&
      confirmPasswordValidation.isValid
    );
  };


  
  handleFormSubmit = async () => {
    if (!this.handleValidation()) {
      return;
    }
    if(this.state.showErrorMessage === true)
    {
      return;
    }

    this.setState({ isLoading: true });
    // const { formData } = this.state;
    try {
      const res = await setPasswordApis.setPassword({
        reset_password_code: this.props.location.state.reset_password_code,
        password: this.state.password
      });
      if(res.status === 1)
      {
        const result = loginParser.login(res);
        localStorageStore.setToken(result.token);
        localStorageStore.setLegacyToken(result.legacyToken);  
        this.setState({ loginResponce: result }, () => this.letUserLogin());
      

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

        <ResetPassword isLoading={this.state.isLoading} passwordChecker={this.passwordChecker} handleClickShowPassword={this.handleClickShowPassword} handleMouseDownPassword={this.handleMouseDownPassword} passwordCheckerConfirm={this.passwordCheckerConfirm} handleClickShowPasswordConfirm={this.handleClickShowPasswordConfirm}
                 onSubmit={this.handleFormSubmit}
                 formError={this.state.formError}
                 isError={this.state.ErrorMsg}
                 isOpenDialog={this.state.setOpen} onDialogClose={this.handleClose}
                 showErrorMessage={this.state.showErrorMessage} isCPasswordDirty={this.state.isCPasswordDirty} password={this.state.password} confirm_password={this.state.confirm_password} showPassword={this.state.showPassword} confirmshowPassword={this.state.confirmshowPassword}></ResetPassword>
        
      </Box>
    </Grid>
    </>
);
  }
};



export default ResetPasswordContainer;
