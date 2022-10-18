import React from "react";
//  import { Link } from "react-router-dom";

// import "../../public/style.css";
 import { makeStyles } from "@mui/styles";

// import TextField from "../common/TextField";
// import Text from "../components/common/Text";

import Box from "components/common/Box";

// import Button from "../components/common/Button";
import Grid  from "components/common/Grid";

// import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const DatePickerModal = ({
  
  from_date,
  to_date,
  handleChange
 
}) => {

  const classes = useStyles();

  

  return (
    <>
    <Grid container spacing={3} 
    sx={{width: "770px",
height: "470px"}}>

      <Grid item xs={6} >
    <div className='app'>
      
      <p className='text-center'>
        <span className='bold'>From:</span>{' '}
        {from_date}
      </p>
      <Box className={classes.calendarContainer}>
        <Calendar  className={classes.calendarCls} onChange={(e) => handleChange("from_date", e)} value={from_date ? new Date(from_date) : new Date()}  maxDate={new Date()} />
      </Box>
    
    </div>
    </Grid><Grid item xs={6}>
    <div className='app'>
      
      
      <p className='text-center'>
        <span className='bold'>To:</span>{' '}
        {to_date}
      </p>
      <div className={classes.calendarContainer}>
        <Calendar className={classes.calendarCls} onChange={(e) => handleChange("to_date", e)} value={to_date ? new Date(to_date) : new Date()} maxDate={new Date()} minDate={from_date ? new Date(from_date) : new Date()} />
      </div>
    
    </div>
    </Grid>
    </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  calendarContainer : {
    "& .react-calendar" : { 
      width:"100% !important",
      padding:"15px 10px !important",
     },
     "& .react-calendar__navigation button" : { 
      fontSize: '22px',
    color: '#707070',
     },
     "& .react-calendar__navigation__arrow" : { 
      border: "1px solid #19AA69!important",
    color: "#19AA69 !important",
    borderRadius: "5px",
     },
     "& .react-calendar__navigation__next2-button" : {
      display:"none",
     },
     "& .react-calendar__navigation__prev2-button" : {
      display:"none",
     }
  },
  calendarCls :
  {
    "& .react-calendar__tile" : {
      padding: "15px 10px",
    border: "1px solid #e5e5e5 !important",
    borderRadius: "5px",
    // boxShadow: "1px 1px 2px 1px #cacaca",
    },
    "& .react-calendar__tile--active" : {
      backgroundColor:"#19AA69"
    },
    "& .react-calendar__month-view__days__day--weekend" :
    {
      color:"#000000"
    },
    "& .react-calendar__month-view__weekdays__weekday abbr" : {
     
      textDecoration: "none !important",
  },
  "& .react-calendar__tile:enabled:hover" : {
    backgroundColor: "#e6e6e6",
  },
  "& .react-calendar__tile--now" : {
    background: "#757575",
    color: "white !important",
  },
  "& .react-calendar__tile--active" : {
    background:"#19AA69 !important",
    color: "white !important",
  },
  "& .react-calendar__tile--hasActive" :
  {
    background:"#19AA69 !important",
    color: "white !important",
  },
  "& .react-calendar__tile--hasActive:enabled:hover": {
    background:"#19AA69 !important",
    color: "white !important",
  },
  "& .react-calendar__tile--hasActive:enabled:focus" : {
    background:"#19AA69 !important",
    color: "white !important",
  }
    // ".react-calendar" : { 
    //   width: "400px !important",
    //   maxWidth: "100%",
    //   backgroundColor: "#fff",
    //   color: "#222",
    //   borderRadius: "8px",
    //   boxShadow : "0 12px 24px rgba(0, 0, 0, 0.2)",
    //   fontFamily: "Arial, Helvetica, sans-serif",
    //   lineHeight: "1.125em",
    //  }
    //  .react-calendar__navigation button {
    //   color: #6f48eb;
    //   min-width: 44px;
    //   background: none;
    //   font-size: 16px;
    //   margin-top: 8px;
    //  }

  },
  LoginButton: {
    opacity: "100%",
    backgroundColor: "#19aa69",
    color: "white !important",
    width: "calc(50% - 10px) !important",
    border: "none",
    height: "50px",
    marginTop: "20px",
    marginRight: "10px",
  },
  CancelButton: {
    opacity: "100%",
    backgroundColor: "#fff",
    border: "1px solid #19aa69 !important",
    color: "#19aa69",
    width: "calc(50% - 10px) !important",
    height: "50px",
    marginTop: "20px",
    marginLeft: "10px",
  },
  
}));
export default DatePickerModal;
