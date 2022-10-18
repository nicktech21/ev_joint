import * as React from "react";
import { makeStyles } from "@mui/styles";
import Text from "components/common/Text";
import Box from "components/common/Box";
import Button from "components/common/Button";



  const OTPSendModal = ({
    
    formError,
    openOtpPage,
  

  }) => {
  const classes = useStyles();

  return (
    <>
    {formError.mobile !== '' ? 
    <Text>OTP has been sent to your contact number +91{formError.mobile}</Text>
    : <Text>OTP has been sent to your email account {formError.email}</Text> }
            <Box mt={3} sx={{ textAlign : "center" }}>
              <Button
              sx={{fontSize: "16px"}}
              className={classes.LoginButton} type="button" onClick={openOtpPage}>
               
                OKAY
               
              </Button>
            </Box>
            </>
          
          
    
    
  );
}



const useStyles = makeStyles((theme) => ({
  
  LoginButton : {
    opacity: "100%",
    backgroundColor: "#19aa69",
    color: "white",
    width: "200px !important",
    border: "none",
    height: "50px",
    marginTop: "20px",
  },
  
  
}));
export default OTPSendModal;