import * as React from "react";
import { makeStyles } from "@mui/styles";
import Text from "components/common/Text";
import Box from "components/common/Box";
import Button from "components/common/Button";
import Link from "components/common/Link";



export default function AccountVerificationModal() {
  const classes = useStyles();

  return (
    <>
    <Text>Our experts team will verify your details and you will be notified when the verification is complete.</Text>
            <Box mt={3} sx={{ textAlign : "center" }}>
              <Button
              sx={{fontSize: "16px"}}
              className={classes.LoginButton} type="submit">
                <Link
          underline="none"
          sx={{
            color: "#ffffff",
          }}
          to="/login"
        >
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
    width: "200px !important",
    border: "none",
    height: "50px",
    marginTop: "20px",
  },
  
  
}));