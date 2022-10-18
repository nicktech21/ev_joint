import * as React from "react";
import Link from "components/common/Link";
import { makeStyles } from "@mui/styles";
import Text from "components/common/Text";
import Box from "components/common/Box";
import Button from "components/common/Button";



export default function UnderVerificationModal() {
  const classes = useStyles();

  return (
    <>
    <Text sx={{ fontSize : "15px" }}>Thanks for listing your charging station. Our representative will be in touch with you for verification Once the verification is done, your charging station will be visible to customers.</Text>
            <Box mt={3} sx={{ textAlign : "center" }}>
              <Button
              sx={{fontSize: "16px"}}
              className={classes.LoginButton} type="submit">
                <Link style={{ color : "#fff", textDecoration:"none" }} to="/LoginOTP">
                OKAY
                </Link>
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
        width: "100% !important",
        border: "none",
        height: "50px",
        marginTop: "20px",
      },
     
  
 
  
  
}));