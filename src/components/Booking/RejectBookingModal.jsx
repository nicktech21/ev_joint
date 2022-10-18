import * as React from "react";
import { makeStyles } from "@mui/styles";
import TextField from "components/common/TextField";
import Text from "components/common/Text";
import Box from "components/common/Box";
import Button from "components/common/Button";



export default function RejectBookingModal() {
  const classes = useStyles();

  return (
    <>
    <Text
        sx={{
          fontSize: "12px",
          color:"#707070",
          marginBottom:"15px"
        }} >
        Reason
      </Text>
    <TextField
          id="outlined-multiline-static"
          label="Enter your reason for rejection"
          multiline
          rows={4}
        />
            <Box mt={3} sx={{ textAlign : "center" }}>
              <Button
              sx={{fontSize: "16px"}}
              className={classes.LoginButton} type="submit">
                CONFIRM
              </Button>
              <Button
              variant="outlined"
              sx={{fontSize: "16px"}}
              className={classes.CancelButton} type="submit">
                Cancel
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
        width: "calc(50% - 10px) !important",
        border: "none",
        height: "50px",
        marginTop: "20px",
        marginRight:"10px",
      },
      CancelButton : {
        opacity: "100%",
        backgroundColor: "#fff",
        border:"1px solid #19aa69 !important",
        color: "#19aa69",
        width: "calc(50% - 10px) !important",
        height: "50px",
        marginTop: "20px",
        marginLeft:"10px",
      },
     
  
 
  
  
}));