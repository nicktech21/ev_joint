import React from "react";
import Text from "components/common/Text";
import Box from "components/common/Box";
import CallIcon from "@mui/icons-material/Call";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import EmailIcon from "@mui/icons-material/Email";
import { makeStyles } from "@mui/styles";
import { Image } from "@mui/icons-material";
// import { log } from "mathjs";

const PersonalDetail = ({props}) => {

const data = props;
console.log(data);
const classes = useStyles();
 
  return (
    <>
      <Box className={classes.grandParentBox}>
        <Box>
          
        </Box>
        <Box>
          <Box className={classes.box_pd}>
            <Text variant="h" sx={{color:"#707070"}} component="div" gutterBottom>
              PERSONAL DETAILS
            </Text>
          </Box>
          <Box className={classes.rootBox}>

            <Box className={classes.profilePicture}>
              <img src={data != null ? data.profilePic :  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaKLOovEiY0ZfP-ldZA5yua33jd8ZEeOzynQ&usqp=CAU" } 
                 width="100%"
              height="100%"  
              alt="profilePic"
              style={{ borderRadius: "4px"}}
              />
          
            </Box>
            <Box
              
              className={classes.parentBox}
            >
              <Box
                
                className={classes.childBox}
              >
                <Box sx={{ color: "#707070",  }}>
                  <Text
                    variant="h"
                    component="div"
                    gutterBottom
                    sx={{ font: "normal normal 600 16px/22px Nunito Sans",width:"100px" }}
                   
                  >
                  {data.name}
                  </Text>
                  <Text
                    variant="span"
                    component="div"
                    gutterBottom
                    sx={{ font: "normal normal normal 12px/16px Nunito Sans" }}
                    className={classes.pdetailheading}
                  >
                    {/* {data.id} */}
                  </Text>
                </Box>
                <Box
                  
                  className={classes.rightSideBox}
                >
                  
                  <Text
                    variant="span"
                    component="div"
                    gutterBottom
                    sx={{
                      letterSpacing: "0.28px",
                      color: "#191eaa",
                      opacity: "1",
                      textAlign: "center",

                      marginTop: "5px",
                    }}
                    
                  >
                    Total Number of visit: {data.bookingCount}
                  </Text>
                </Box>
              </Box>

              <Box
              
                className={classes.dataContainer}
              >
                <Text
                  variant="span"
                  
                  gutterBottom
               
                  className={classes.textStyle}
                >
                  <CallIcon className={classes.iconStyle}></CallIcon>
                  {data.mobile}
                </Text>
                <Text
                  variant="span"
                  
                  gutterBottom
               
                  className={classes.textStyle}
                
                >
                  <DirectionsCarIcon className={classes.iconStyle}></DirectionsCarIcon>
                  {data.carName}
                </Text>
                <Text
                  variant="span"
                  component="div"
                  
                 
                  className={classes.textStyle}
                  
                >
                  <EmailIcon className={classes.iconStyle} sx={{ cursor: "pointer" }}></EmailIcon>
                  {data.email}
                </Text>
              </Box>
            </Box>
            
          </Box>
        </Box>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
 
  rootBox:{
    display: "flex", flexDirection: "row", 
    '@media (max-width:768px)': { 
      display:"flex",
      flexDirection:"column"
    
    }
  },

  parentBox:{
    margin: "0px 1rem",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  childBox:{
    width: "100%",
    margin: "0px 1rem",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    '@media (max-width:768px)': {
      margin:"1rem 0rem"


    }

  },
  rightSideBox:{
    color: "#707070",
    background:
      "rgba(25, 30, 170, 0.1) 0% 0% no-repeat padding-box",
    borderRadius: "4px",
    padding: "3px 7px",
    height: "25px",
    marginLeft: "150px",
    fontSize:"15px",
    // font: "normal normal normal 15px/16px Nunito Sans",
    '@media (max-width:768px)': {
      

      marginLeft: "0px",
      marginRight: "15px",
    height: "30px",

    }
  },
  box_pd:{
    borderBottom:"1px solid #EBEBEB",
    margin:"40px 0px 20px 0px"

  },
  dataContainer:{
    display:"flex",
    height: "80px",
    color: "#474747",
    width: "70%",
    margin: "0.5rem",
    
   flexWrap:"wrap",
   '@media (max-width:768px)': {
    width: "100%",
    margin: "0",
  

  }
  },
  profilePicture :{

    width:"9.1rem",
    height:"8rem",
    '@media (max-width:768px)': { 
      margin:"auto"
     
    }
    
  },
  grandParentBox:{
    padding: "1rem",
    '@media (max-width:768px)': { 
     padding:"0px"
     

    
    }
  },
  textStyle:{
    margin:"0px 5px 0px 0px",
    font: "normal normal normal 15px/19px Nunito Sans",
    height:"0px",
    color:'#474747'
    
  },
  iconStyle :{  height: "13px" , margin:"5px 0pxpx 0px 0px",},
 
}));

export default PersonalDetail;
