import React from "react";
import Text from "components/common/Text";
import Box from "components/common/Box";
import { InputLabel } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "components/common/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Dialog from "components/common/DialogMD";
import DatePickerModal from "components/common/DatePickerModal";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import EventIcon from "@mui/icons-material/Event";
import { makeStyles } from "@mui/styles";


const DashboardOverview = ({state,data, onchange, onclick, open, onClose, handleChange}) => {
  const classes = useStyles();
  return (
    <>
      <Stack
       
        direction={{ sm:'column',xs: 'column', md: 'row' }}
        spacing={2}
        className={classes.overview_container}
      
      >
        <Text
          variant="h5"
          className={classes.pageHeading}
          gutterBottom
          sx={{
            marginRight: "5rem",
          }}
        >
          OVERVIEW
        </Text>

        <Stack  direction={{ sm:'column',xs: 'column', md: 'row' }} spacing={2}>
          <Box sx={{ minWidth: 155 }}>
            <FormControl fullWidth size="small">
              <InputLabel id="location-label">Location</InputLabel>
              <Select
                labelId="location-label"
                label="Location"
                className={classes.overview_container_location}
               
                 value={state.formData.station_id}
                  // error={state.formError.station_id}
                onChange={e => onchange("station_id", e.target.value)}
              >
                {data.locationData.map((locs) => (
                  <MenuItem key={locs.id} value={locs.id}>
                    {locs.name} 
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 155 }}>
            <FormControl fullWidth size="small">
              <InputLabel id="manufacturer-label">
                Manufacturer
              </InputLabel>
              <Select
                labelId="manufacturer-label"
                label="Manufacturer"
                sx={{height:"42px" , backgroundColor: "white" }}
                className={classes.overview_container_location}

                value={state.formData.manufacturer_id}
                // error={state.formError.manufacturer_id}
                onChange={e =>onchange("manufacturer_id", e.target.value)}
              >
                {data.manufacturerData?.map((locs) => (
                  <MenuItem key={locs.id} value={locs.id}>
                    {locs.name} 
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 155 }}>
            <FormControl fullWidth size="small">
              <InputLabel id="model55abel">Model</InputLabel>
              <Select
                labelId="model-label"
                label="Model"
                sx={{height:"42px" , backgroundColor: "white" }}
                className={classes.overview_container_location}

                value={state.formData.model_id}
                // error={state.formError.model_id}
                onChange={e =>onchange("model_id", e.target.value)}
              >
                 {data.vehicleMasterData?.map((locs) => (
                  <MenuItem key={locs.id} value={locs.id}>
                    {locs.name} 
                  </MenuItem>
                ))} 
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 155 }}>
            <FormControl fullWidth size="small">
              <InputLabel id="daterange-label" >Date Range</InputLabel>
              <OutlinedInput
                // labelId="daterange-label"
                label="Date Range"
                sx={{
                  fontSize: "18px",
                  height: "42px !important",
                  backgroundColor: "white",
                }}
                id="outlined-adornment-amount"
                 value={state.formData.fromat_date_from && state.formData.fromat_date_to ? `${state.formData.fromat_date_from} - ${state.formData.fromat_date_to}` : ""}
                onClick={onclick}
                endAdornment={
                  <InputAdornment position='end'>
                    <EventIcon />
                  </InputAdornment>
                }
                disabled

              />
            </FormControl>
          </Box>

          <Dialog 
            open={open}
            onClose={onClose}
            children={
              <DatePickerModal
                from_date={state.formData.from_date}
                to_date={state.formData.to_date}
                handleChange={handleChange}
              />
            }
            title="Select a date range"
          />
        </Stack>
      </Stack>

    </>
  );

}


const useStyles = makeStyles((theme) => ({
 
  overview_container: {
    marginLeft: "1rem",
          marginTop: "1rem",
          fontFamily: "Nunito Sans",
          color: "#707070",
    
    ['@media (max-width:768px)']: { 
     
    

    }
  },

  overview_container_location:{

    height:"42px" , backgroundColor: "white", width:"150px",

    ['@media (max-width:768px)']: { 
     

      width:"105%"

    }



  },


  pageHeading: {
   
    ['@media (max-width:768px)']: { 
      fontSize:"20px",
      
     }
  },

      

  




  
}));



export default DashboardOverview;