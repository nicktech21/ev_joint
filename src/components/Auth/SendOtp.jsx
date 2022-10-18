import * as React from "react";
import { makeStyles } from "@mui/styles";
import Text from "components/common/Text";
import Box from "components/common/Box";
import Button from "components/common/Button";
import Dialog from "components/common/DialogXS";
import TextField from "@mui/material/TextField";
import OTPSendModal from "./OTPSendModal";
import Alert from 'components/common/Alert';



  const SendOtpForm = ({
  
    email_mobile,
    EmailMobileChecker,
    onSubmit,
    formError,
    isError,
    isOpenDialog,
    onDialogClose,
    openOtpPage,

  }) => {
  const classes = useStyles();

  const iconData = [];
 iconData.src = 'Group 20449/Group 20390.svg';


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
              label="Enter email id / contact number"
              variant="outlined"
              style={{ marginTop: "20px" }}
              value={email_mobile}
                onChange={e => EmailMobileChecker(e.target.value)}
                helperText={formError.email_mobile}
                error={formError.email_mobile}
              InputLabelProps={{ style: { fontSize: 16 } }}
            />

     
           

            <Box mt={3}>
            <Button
              sx={{fontSize: "16px"}}
              className={classes.LoginButton} type="submit"   onClick={onSubmit}>
               GET OTP
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

<Dialog
        open={isOpenDialog}
        onClose={onDialogClose} title ="OTP Sent" disableCloseIcon  icon={iconData} children={<OTPSendModal formError={formError} openOtpPage={openOtpPage} />} />
          
               
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
  register_button : {
    textAlign: "right",
    font: "normal normal bold 14px/19px Nunito Sans",
    fontSize: "14px",
    fontWeight: "bold",
    letterSpacing: "0px",
    color: "#19aa69",
    textDecoration: "none",
    marginTop: "8px",
    marginLeft: "10px",
  },


  reset_password : {
    textAlign: "right",
    font: "normal normal bold 14px/19px Nunito Sans",
    fontSize: "14px",
    fontWeight: "bold",
    letterSpacing: "0px",
    color: "#19aa69",
    textDecoration: "none",
    marginTop: "8px",
    marginLeft: "10px",
  },
  
}));
export default SendOtpForm;