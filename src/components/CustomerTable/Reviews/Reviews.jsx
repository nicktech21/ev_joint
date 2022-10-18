import React from "react";
import Box from "components/common/Box";
import Rating from '@mui/material/Rating';
import { makeStyles } from "@mui/styles";

const Reviews = ({ props }) => {
  
  const classes = useStyles();
  const arr = props?.map((prop, i) => {
    return (
      <>
     
        <Box
         className={ props[i].is_station === 1 ? classes.parentBox1 : classes.parentBox}
        
         >
          <img
            style={{ margin: "1.5rem 0.5rem 0.5rem 0.5rem" }}
            src="/images/doubleQ.png"
            width="28px"
            height="23px"
            alt="doubleQ"
          />
          <br />

          <Box sx={{ margin: "0.5rem" }}>
            <h
              style={{
                //  font: "normal normal 600 14px/19px Nunito Sans",
                fontSize: "18px",
              }}
            >
              {props[i].location}
            </h>
            <p
              style={{
                // font: "normal normal normal 14px/19px Nunito Sans",
                fontSize: "15px",
              }}
            >
              {props[i].feedback}
            </p>
          </Box>
         
          <Box className={classes.childBox}>
            <img src={props[i].dp} width="41px" height="42px" alt="dp" />
            <Box>
              <h
                style={{
                  // font: " normal normal bold 15px/20px Nunito Sans",
                  margin: "0px 10px",
                  display: "block",
                  fontSize:"15px"
                 
                }}
              >
                {props[i].name}
              </h>
              <Box sx={{ margin: "0px 5px", padding: "0px 10px" }}>
               
                <Rating name="read-only" value={props[i].rating} readOnly />

                
               {props[i].date} 
              </Box>

            </Box>
          </Box>
        </Box>
      </>
    );
  });
  return <>{arr}</>;
};
const useStyles = makeStyles((theme) => ({
  parentBox: {
    border: "1px solid #EBEBEB",
    margin: "0.5rem",
    padding: "1rem",
    color: "#4F4F4F",
    width: "45%",
  },
  parentBox1: {
    border: "1px solid #EBEBEB",
    margin: "0.5rem",
    padding: "1rem",
    color: "#4F4F4F",
    width: "80%",
  },
  childBox: { display: "flex", marginLeft: "4px", flexDirection: "row" },
}));

export default Reviews;
