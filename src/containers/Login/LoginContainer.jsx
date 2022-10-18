import React from 'react';
// import { config } from "config";
// import { withRouter } from "react-router-dom";
import Login from 'components/Auth/LoginForm';
import Box from "components/common/Box";
import Grid  from "components/common/Grid";
import Sidebar from "components/Auth/Sidebar";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { loginParser } from "stores/LoginStore/loginParser"
import { loginApi } from "stores/LoginStore/loginApi"
import { validationHelper } from "helper/validation";
import { localStorageStore } from "stores/localStorage";
import CircularProgress from "@mui/material/CircularProgress";
class LoginContainer extends React.Component {
   
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: "",
        password: "",
      },
      formError: {
        email: "",
        password: "",
      },
      isLoading: false,
      ErrorMsg:"",
      loginsuccess:false,
      loginResponce: {}, 
    };
  }

  letUserLogin = () => {
   
    const { loginResponce } = this.state;
    this.props.updateAuthDataAction(loginResponce);
  
  };

  handleInputChange = (name, e) => {
    const { formData } = this.state;
    formData[name] = e.target.value;  
    this.setState({ formData });
    
  };

  onEnterSubmit = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      this.handleFormSubmit();
    }
  };

  handleValidation = () => {
    const { formError, formData } = this.state;

    const emailValidation = validationHelper.email(formData.email);
    formError.email = emailValidation.message;

    const passwordValidation = validationHelper.password(formData.password);
    formError.password = passwordValidation.message;

    this.setState({ formError });
    return emailValidation.isValid && passwordValidation.isValid;
  };

  handleFormSubmit = async () => {
    if (!this.handleValidation()) {
      return;
    }

    const { formData } = this.state;
    
    try {
      
      this.setState({ isLoading: true });
      const response = await loginApi.login(formData);
      this.setState({ ErrorMsg: "" ,  isLoading: false});
      const result = loginParser.login(response);
      localStorageStore.setToken(result.token);
      // localStorageStore.setVendorData(result);

      if(result.status === 1){
       
       }

       this.setState({ loginsuccess: true });

       setTimeout(() => {
        this.setState({ loginResponce: result },
          () => this.letUserLogin());
      }, 1000);

     

     


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

    <Grid container>
      <Box
        component={Grid}
        item
        xs={12}
        sm={5}
        md={4}
        display={{ xs: "none", sm: "block", lg: "block", md: "block" }}
      >
        <Sidebar></Sidebar>
      </Box>
      <Box
        component={Grid}
        item
        xs={12}
        sm={5}
        md={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >

        <Login
        onChange={this.handleInputChange}
        onSubmit={this.handleFormSubmit}
        onEnterSubmit={this.onEnterSubmit}
        formData={this.state.formData}
        formError={this.state.formError}
        isLoading={this.state.isLoading}
        isError={this.state.ErrorMsg}
        forgotPwdUrl="/forgot-password"
        ></Login>
        
      </Box>
    </Grid>

    <Snackbar
          open={this.state.loginsuccess}
          autoHideDuration={1000}
          onClose={() => this.setState({ loginsuccess: false })}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert severity="success">Login Successfully</Alert>
    </Snackbar>


   </>
 );
   }
};

 

export default LoginContainer;
