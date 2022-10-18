import React from "react";
import Text from "components/common/Text";
import Box from "components/common/Box";
import Switch from "@mui/material/Switch";
import { makeStyles } from "@mui/styles";


const label = { inputProps: { "aria-label": "Switch demo" } };


const ChargingPoint = ({ props,  handleChargingPointConfirmClick }) => {

  const classes = useStyles();



  // console.log(props);

 

  
  const arr = props?.map((props) => {
    return (
      <>


        <Box className={classes.Chargingpoint}


          //  component={Grid}
          //         item
          //         xs={12}
          //         sm={5}
          //         md={4}
          //         display={{ xs: "none", sm: "block", lg: "block", md: "block" }}

          sx={{
            justifyContent: "space-between",
            width: "25%",
            background: "#F3F3F3 0% 0% no-repeat padding-box",
            borderRadius: "4px",
            padding: "10px",
            marginTop: "10px",
            marginRight: "25px",
            
            
          }}
        >
          <Box sx={{
            // margin: "15px",
            display: "flex",
            justifyContent: "space-between",
            
          }} >
            <Text

              variant="h"
              component="div"
              gutterBottom
              sx={{
                // font: "normal normal bold 14px/19px Nunito Sans",
                color: "#474747",
                
                
              }}
            >
              {props.name}

            </Text>
            <Text
              variant="h"
              component="div"
              gutterBottom
              sx={{
                marginLeft: "30px",
                // font: "normal normal normal 14px/19px Nunito Sans",
                color: "#707070",
                
                

              }}
            >
              Id : {props.cpId}
              
            </Text>

          </Box>
          <Box>

         
            <Switch checked={props.status} {...label} sx={{ marginTop: "10px" }}
              onChange={() => handleChargingPointConfirmClick (props.id , props.status)
              
              }


            /> 

          </Box>
        </Box>
      </>
    );
  })

  return (<>{arr}</>)


};

const useStyles = makeStyles((theme) => ({
 
  Chargingpoint:{

    ['@media (max-width:768px)']: { 
      
      width: "87%",
    }
     }

  
}));

export default ChargingPoint;