import * as React from "react";
import { makeStyles } from "@mui/styles";
import Text from "components/common/Text";
import Box from "components/common/Box";
import Button from "components/common/Button";
import TextField from "@mui/material/TextField";
import Alert from 'components/common/Alert';



  const LoginOtpForm = ({
    otp,
    OTPChecker,
    onSubmit,
    formError,
    isError,
    resendOtp,

  }) => {
  const classes = useStyles();

  return (
    <Box className={classes.login_container_fp}>
    <Text
    sx={{
      fontSize: "24px",
      fontWeight: "bold",
    }}
    className={classes.welcome_text}>Login via OTP</Text>

    <TextField
      fullWidth
      id="outlined-basic"
      label="Enter OTP"
      variant="outlined"
      value={otp}
      onChange={e => OTPChecker(e.target.value)}
      helperText={formError.otp}
      error={formError.otp}
      style={{ marginTop: "20px" }}
      InputLabelProps={{ style: { fontSize: 16 } }}
    />


   

    <Box mt={3}>
    
      <Button
      sx={{fontSize: "16px"}}
      className={classes.LoginButton} type="submit" onClick={onSubmit}>
        SUBMIT
      </Button>
    
    </Box>
    {isError !== '' ?   
      <Box>
      <Alert severity="error">{isError}</Alert>
      </Box>
      : '' }
    <Box mt={1.8}>
      <Text
      sx={{
        fontSize: "14px",
        fontWeight: "regular",
      }}
      >

        Didn't get OTP ?
        <Text ml={1}
          underline="none"
          sx={{ fontSize: "14px", fontWeight: "bold", cursor:"pointer" }}
          className={classes.reset_password}
          onClick={resendOtp}
        >
          Resend OTP
        </Text>
      </Text>
    </Box>
  </Box>
          
    
    
  );
}



const useStyles = makeStyles((theme) => ({
  login_container_fp: {
    position: "relative",
    top: "60%",
  width: "100%",
  },
  welcome_text: {
    fontFamily: "Nunito Sans",
  },
  forgot_password : {
    float: "right",
    font: "normal normal bold 14px/19px Nunito Sans",
    letterSpacing: "0px",
    color: "#535d79",
    opacity: 1,
    marginTop: "10px !important",
    marginBottom: "20px !important",
    textDecoration:"none",
  },
  LoginButton : {
    opacity: "100%",
    backgroundColor: "#19aa69",
    color: "white",
    width: "100% !important",
    border: "none",
    height: "50px",
    marginTop: "20px",
  },
  reset_password : {
    font: "normal normal bold 14px/19px Nunito Sans",
    fontSize: "14px",
    fontWeight: "bold",
    letterSpacing: "0px",
    color: "#19aa69",
    textDecoration: "none",
    marginLeft: "10px",
    float:"right"
  },
  
}));
export default LoginOtpForm;