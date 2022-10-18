import React from "react";
import Text from "components/common/Text";
import Box from "components/common/Box";
import Button from "components/common/Button";
import AMENITIES from "./Amenities";
import ChargingPoint from "./ChargingPoint";
import TypeofConnectors from "./TypeofConnectors";
import { makeStyles } from "@mui/styles";







const StationOverview = ({ data, onDeleteClick, onEnableClick, handleStatusConfirmConnectorClick, handleChargingPointConfirmClick ,handleConnectorChargingPointModelClose}) => {

  const classes = useStyles();


  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderBottom: "1px solid #EBEBEB",
          margin: "20px 10px 10px 10px",
        }}
      >
        <Text
          variant="h"
          component="div"
          gutterBottom
          sx={{
            // fontFamily: "Nunito Sans",
            fontSize: "16px",
            color: "#707070",
            fontWeight: "500",
          }}
        >
          CHARGING POINT
        </Text>
      </Box>
      <Box className={classes.station_Charging} sx={{ display: "flex", flexWrap: "wrap" }}>
        <ChargingPoint props={data.chargingPoints}
          // handleConnectorChargingPointModelClose={handleConnectorChargingPointModelClose}
          handleChargingPointConfirmClick={handleChargingPointConfirmClick}
          onEnableClick={onEnableClick}
          
        

        />

      </Box>

      <Box
        sx={{
          width: "100%",
          borderBottom: "1px solid #EBEBEB",
          margin: "40px 10px 10px 10px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text
          variant="h"
          component="div"
          gutterBottom
          sx={{
            // fontFamily: "Nunito Sans",
            fontSize: "16px",
            color: "#707070",
            fontWeight: "500",
          }}
        >
          TYPE OF CONNECTORS
        </Text>
        <Button
          variant="text"
          size="small"
          sx={{
            textTransform: "capitalize",
            marginRight: "10px",
            height: "30px",
            paddingTop: "10px",
          }}
        >
          <Text variant="h" component="div" gutterBottom sx={{}}>
            +
          </Text>
          <Text
            variant="h"
            component="div"
            gutterBottom
            sx={{
              fontSize: "14px",
              marginLeft: "5px",
            }}
          >
            Add connector
          </Text>
        </Button>
      </Box>
      <Box className={classes.station_Connector}
      sx={{ display: "flex", flexWrap: "wrap" }}>
        <TypeofConnectors props={data.connecters}
          onDeleteClick={onDeleteClick}
          handleStatusConfirmConnectorClick={handleStatusConfirmConnectorClick}
          onEnableClick={onEnableClick}
        />
      </Box>
      <Box 
        sx={{
          width: "100%",
          borderBottom: "1px solid #EBEBEB",
          margin: "40px 10px 10px 10px",

        }}
      >
        <Text
          variant="h"
          component="div"
          
          gutterBottom
          sx={{
            // fontFamily: "Nunito Sans",
            fontSize: "16px",
            color: "#707070",
            fontWeight: "500",
          }}
          
        >
          AMENITIES
        </Text>
      </Box>
      <Box  className={classes.station_amenities} sx={{ display: "flex", marginRight: "10px", }}>

        <AMENITIES props={data.amenities} />
      </Box>
    </>
  );
};


const useStyles = makeStyles((theme) => ({
 
  station_amenities:{
    ['@media (max-width:768px)']: { 
      display:"block"
     }
  },

  station_Connector:{
    ['@media (max-width:768px)']: { 
      display:"block"
     }
  },

  station_Charging:{
    ['@media (max-width:768px)']: { 
      display:"block"
     }
  },


  
}));

export default StationOverview;
