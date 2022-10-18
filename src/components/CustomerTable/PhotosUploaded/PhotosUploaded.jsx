import React from "react";
import Text from "components/common/Text";
import Box from "components/common/Box";
import { makeStyles } from "@mui/styles";
import Grid from "components/common/Grid";



const PhotosUploaded = ({ props }) => {
  const classes = useStyles();
  const arrr = props?.map((prop, i) => {
    console.log(prop);
    return (
      <>
       
        <Grid item xs={10}
        sm={6}
        md={4}
        lg={4}
        key={i}
        >
          <Box className={classes.grandParent} key={i} >
          <Box className={classes.imageBox}>
          <img
            src={props[i] !== null ?  props[i].image : " "}
            alt="data not avalable"
            width="100%"
            height="100%"
           
          />
          </Box>

          {props[i].is_station === 1 
          ? 

          <Box sx={{ padding: "0.5rem" }}>
            <Text
              variant="span"
              component="div"
              gutterBottom
              sx={{
                font: "normal normal normal 16px/24px Nunito Sans",

                color: "#707070",
              }}
            >
             
              Uploaded by :{props[i].customerName}
              <br />
              {props[i].date}
            </Text>
          </Box> 
          :
           <Box sx={{ padding: "0.5rem" }}>
            <Text
              variant="span"
              component="div"
              gutterBottom
              sx={{
                font: "normal normal normal 16px/24px Nunito Sans",

                color: "#707070",
              }}
            >
             
              Charging Station :{props[i].StationName}
              <br />
              {props[i].date}
            </Text>
          </Box> 
        }

          </Box>

          </Grid>
      </>
    );
  });
  return (
    <>
    
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg:2 }} rowSpacing={{ xs: 1, sm: 2, md: 2, lg:2 }}  >{arrr}</Grid>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  grandParent:{
    border: "1px solid #EBEBEB",
   
    "@media (max-width:768px)": {
     marginLeft:"18px",
     width:"100%"
    },
    
  },
  imageBox:{
    width:"100%",
    margin:"auto",
    height:"17rem"
  }
}));

export default PhotosUploaded;
 