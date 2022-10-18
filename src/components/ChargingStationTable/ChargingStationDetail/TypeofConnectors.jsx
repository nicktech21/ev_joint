
import React from "react";
import Text from "components/common/Text";
import Box from "components/common/Box";
import Switch from "@mui/material/Switch";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { makeStyles } from "@mui/styles";



const label = { inputProps: { "aria-label": "Switch demo" } };



const TypeofConnectors = ({props,onDeleteClick,onEnableClick,handleStatusConfirmConnectorClick}) => {


  const classes = useStyles();
 
  const arr = props?.map((props) => {return (
    <>
      
      <Box
      className={classes.TypeofConnectors}
        sx={{
          width: "26%",
          border: "1px solid #EBEBEB",
          borderRadius: "4px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "25px 25px 20px 25px",
          marginRight: "15px",
          marginTop: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img
            src={props.image}
            width="72px"
            height="72px"
            alt=""
          ></img>
          <Switch  checked={props.status} {...label}
          onChange={() => handleStatusConfirmConnectorClick(props.id,props.status)
            
          }
          sx={{ marginLeft: "9px" }} />
        </Box>
        <Box>
          
          <Text
            variant="h"
            component="div"
            gutterBottom
            sx={{
              // font: "normal normal bold 14px/24px Nunito Sans",
              color: "#474747",
            }}
          >
          {props.connectorType}
          </Text>
          <Text
            variant="h"
            component="div"
            gutterBottom
            sx={{
              // font: "normal normal normal 14px/24px Nunito Sans",

              color: "#707070",
            }}
          >
            {props.power} kw - {props.level}
          </Text>
          <Text
            variant="h"
            component="div"
            gutterBottom
            sx={{
              // font: "normal normal normal 14px/24px Nunito Sans",
              color: "#707070",
            }}
          >
            &#8377; {props.price} /Kw
          </Text>
        </Box>
        <Box>
          <span 
         key={props.id}
         onClick={ () => onDeleteClick(props.id)}


          >
          <DeleteOutlineIcon />
           
          </span>
        </Box>
      </Box>
    </>
  );
    
  })

  return(
   
    <>
    {arr}


    </>
   



  )
};

const useStyles = makeStyles((theme) => ({
 
  TypeofConnectors:{

    ['@media (max-width:768px)']: { 
     
      width:"77%",
    }
     }

  
}));

export default TypeofConnectors;