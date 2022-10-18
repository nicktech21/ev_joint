

import * as React from "react";
import Box from "components/common/Box";

import { makeStyles } from "@mui/styles";
import Text from "components/common/Text";

import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import Link from "@mui/material/Link";
import Grid from "components/common/Grid";


const HelpSupport = ({data}) => {
  const classes = useStyles();

  return (
    <Box className={classes.help_support_container}>
      <Text
        
        className={classes.help_support_header}
      
      >
        HELP AND SUPPORT
      </Text>

      <Box
        sx={{
          bgcolor: "background.paper",
          
          border: "1px solid #EAEAEA",
          borderRadius: "4px",
          p: 2,
          display: "flex",
          flexDirection: "row",
          marginTop: "31px",
        }}
      >
        <LocalPhoneOutlinedIcon
         
          className={classes.detail_icon}
        />
        <Text
          sx={{ fontSize: 14, maxWidth: "232px", marginLeft: "10px" }}
          color="text.secondary"
          gutterBottom
        >
        {data[0].contact_no}
        </Text>
      </Box>

      <Box
        sx={{
          bgcolor: "background.paper",
          border: "1px solid #EAEAEA",
         
          borderRadius: 2,
          p: 2,
          
          display: "flex",
          flexDirection: "row",
          marginTop: "14px",
        }}
      >
        <MailOutlineIcon
         className={classes.detail_icon}
        />
        <Text
          sx={{ fontSize: 14, maxWidth: "232px", marginLeft: "10px" }}
          color="text.secondary"
          gutterBottom
        >
         {data[0].email}
        </Text>
      </Box>

      <Box
        sx={{
          bgcolor: "background.paper",
          border: "1px solid #EAEAEA",
         
          borderRadius: 2,
          p: 2,
         
          display: "flex",
          flexDirection: "row",
          marginTop: "14px",
        }}
      >
        <FmdGoodOutlinedIcon
          className={classes.detail_icon}
        />

        <Text
          sx={{ fontSize: 14, maxWidth: "232px", marginLeft: "10px" }}
          color="text.secondary"
          gutterBottom
        >
          {data[0].address}
        </Text>
      </Box>

      <Grid container spacing={3} className={classes.socialicon}
      >
         <Link
         style={{ textDecoration: 'none' }}
          href= {data[0].facebook_link} >

        <Box
          className={classes.socialiconinnerfirst}  
          
        >
          
          <img src="facebook.png" alt="logo" />
          <Text
            
            className={classes.socialiconinnertext}
            color="text.secondary"
            gutterBottom
          >
            Facebook
          </Text>
         
        </Box>
        </Link>
        <Link
         style={{ textDecoration: 'none' }}
          href= {data[0].instagram_link} >
        <Box
        
          className={classes.socialiconinner}
        >
          <img src="instagram.png" alt="logo" />
          <Text
            
            className={classes.socialiconinnertext}
            color="text.secondary"
            gutterBottom
          >
            Instagram
          </Text>
        </Box>
        </Link>
        <Link
         style={{ textDecoration: 'none' }}
          href= {data[0].twitter_link} >
        <Box
           className={classes.socialiconinner}
        >
          <img src="twitter.png" alt="logo" />
          <Text
            sx={{
              fontSize: 14,
              maxWidth: "232px",
              marginLeft: "10px",
              marginTop: "auto",
              marginBottom: "auto",
            }}
            className={classes.socialiconinnertext}
            color="text.secondary"
            gutterBottom
          >
            Twitter
          </Text>
        </Box>
        </Link>
      </Grid>
    </Box>
  );
};


const useStyles = makeStyles((theme) => ({
 
  help_support_container: {
    marginLeft: "2.5rem",
    marginRight: "2.5rem",
    
    ['@media (max-width:768px)']: { 
      marginLeft: "0",
      marginRight: "0",
    }
  },
  


  detail_icon:{
    height: "20px",
    width: "20px",
    marginRight: "10px",
  },

  help_support_header: {
    fontSize: "24px",
    letterSpacing: "0px",
    color: "#707070",
    opacity: 1,
    textAlign: "left",
    marginTop: "30px",
    // fontWeight: "bold",
    // fontFamily: "Nunito Sans"
  },


  socialicon: {
          display: "flex",
          flexDirection: "row",
          marginTop: "40px",
    ['@media (max-width:768px)']: { 
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          marginTop: "1rem",
         
    }
  },


  socialiconinnerfirst: {
    display: "flex",
    flexDirection: "row",
    height: "45px",
    width: "121px",
['@media (max-width:768px)']: { 
  display: "flex",
  flexDirection: "row",
  height: "45px",
  width: "19px",
  marginTop: "0.5rem"
}
},


  socialiconinner: {
         display: "flex",
            flexDirection: "row",
            width: "121px",
            height: "45px",
            marginLeft: "24px",
['@media (max-width:768px)']: { 
  display: "flex",
  flexDirection: "row",
  width: "20px",
  height: "45px",
  marginLeft: "0",
  marginTop: "0.5rem"
}
},

socialiconinnertext: {
  fontSize: 14,
  maxWidth: "232px",
  marginLeft: "10px",
  marginTop: "auto",
  marginBottom: "auto",
['@media (max-width:768px)']: { 
display: "none",


}
},
  
}));

  


export default HelpSupport;
