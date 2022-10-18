import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Text from "components/common/Text";
import Box from "components/common/Box";

import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
// import LinearProgress from "@mui/material/LinearProgress";

import { styled } from "@mui/styles";

import Grid  from "components/common/Grid";
import StarIcon from "@mui/icons-material/Star";
import PhotosUploaded from 'components/CustomerTable/PhotosUploaded/PhotosUploaded'
import BasicDetail from "components/ChargingStationTable/ChargingStationDetail/BasicDetail";
import Reviews from 'components/CustomerTable/Reviews/Reviews'
import StationOverview from 'components/ChargingStationTable/ChargingStationDetail/StationOverview'
import { CircularProgress } from '@mui/material';




 const MTabs = styled(Tabs)({
    borderBottom: "1px solid #e8e8e8",
    "& .MuiTabs-indicator": {
      backgroundColor: "#19AA69",
    },
    "& .MuiTabs-flexContainer": {
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    "@media (max-width:768px)": {
      width: "100%",
      marginL: "auto",
      "& .MuiTabs-indicator": {
        display: "none",
      },
    },
  });

  const MTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      width: "30%",
      "@media (max-width:768px)": {
        width: "100vw",
        margin:"auto"
      },

      marginRight: theme.spacing(1),
      color: "rgba(0, 0, 0, 0.85)",

      "&.Mui-selected": {
        color: "#19AA69",
      },
      "&.Mui-focusVisible": {
        backgroundColor: "#d1eaff",
      },
    })
  );

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Text>{children}</Text>
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tabpanel-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function BasicTabs({props,isLoading,onDeleteClick,onEnableClick,handleStatusConfirmConnectorClick,handleChargingPointConfirmClick}) {

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };



  return (
    <>
{
          isLoading
            ?
            (<Box sx={{ display: "flex", justifyContent: "center", marginTop: "300px" }}>
              
              <CircularProgress/>
            </Box>)
            :



     ( <Box
        sx={{
          backgroundColor: "white",
          overflow: "hidden",
        }}
      >
    
        <BasicDetail data={props.basicDetail} />
        <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
          <MTabs
         
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="inherit"
            aria-label="secondary Tabs example"
          >
            <MTab
             
              label="STATION OVERVIEW"
              {...a11yProps(0)}
            />
            <MTab
             
              label="PHOTO UPLOADED"
              {...a11yProps(1)}
            />
            <MTab label="REVIEWS" {...a11yProps(2)} />
          </MTabs>
        </Box>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
          
            <StationOverview data={props.basicDetail}
           onDeleteClick={onDeleteClick}
           handleStatusConfirmConnectorClick={handleStatusConfirmConnectorClick}
           handleChargingPointConfirmClick={handleChargingPointConfirmClick}
           onEnableClick={onEnableClick}
            />
            
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            
            <PhotosUploaded props={props.basicDetail.photos}/>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
          
            <Box sx={{ width: "100%" }}>
              <Grid container rowSpacing={1}>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      color: "#474747",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                 
                    <Reviews props={props.basicDetail.reviews} />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      width: "384px",
                      border: "1px solid #EBEBEB",
                      borderRadius: "4px",
                      padding: "20px",
                      marginTop: "8px",
                    }}
                  >
                    <Box
                      sx={{ width: "100%", borderBottom: "1px solid #EBEBEB" }}
                    >
                      <Text
                        variant="h"
                        component="div"
                        gutterBottom
                        sx={{
                          // font: "normal normal 600 16px/22px Nunito Sans",
                          color: "#4F4F4F",
                          // marginTop: "5px",
                        }}
                      >
                        RATINGS
                      </Text>
                    </Box>
                    <Box>
                      <Box sx={{ marginTop: "25px", display: "flex" }}>
                        <StarIcon
                          sx={{
                            fontSize: "20px",
                            color: "#F8C301",
                            marginRight: "5px",
                          }}
                        />
                        <Stack
                          direction="row"
                          divider={<Divider orientation="vertical" flexItem />}
                          spacing={1}
                        >
                          <Text
                            variant="h"
                            component="div"
                            gutterBottom
                            sx={{
                              // font: "normal normal normal 18px/22px Nunito Sans",
                              color: "#4F4F4F",
                              fontSize:"15px"
                            }}
                          >
                            {props.basicDetail.ratings}
                          </Text>
                          <Text
                            variant="h"
                            component="div"
                            gutterBottom
                            sx={{
                              // font: "normal normal normal 18px/22px Nunito Sans",
                              color: "#4F4F4F",
                              marginTop: "5px",
                              fontSize:"15px"
                            }}
                          >
                            {props.basicDetail.no_of_reviews} reviews
                          </Text>
                        </Stack>
                      </Box>
                      <Box>
                        <Grid container>
                          <Grid item xs={2}>
                            <Text
                              variant="h"
                              component="div"
                              gutterBottom
                              sx={{
                                // font: "normal normal normal 14px/19px Nunito Sans",
                                color: "#4F4F4F",
                                marginTop: "5px",
                                fontSize:"15px"
                              }}
                            >
                              Charger
                            </Text>
                          </Grid>
                          <Grid item xs={8}>
                            <Box
                              sx={{
                                width: "210px",
                                marginTop: "14px",
                                marginLeft: "15px",
                              }}
                            >
                              {/* <LinearProgress
                                variant="determinate"
                                value={props.basicDetail.charger_rating_value}
                              /> */}
                            </Box>
                          </Grid>
                          <Grid item xs={2}>
                            <Text
                              variant="h"
                              component="div"
                              gutterBottom
                              sx={{
                                font: "normal normal normal 14px/19px Nunito Sans",
                                color: "#4F4F4F",
                                marginTop: "5px",
                                // fontSize:"15px"
                              }}
                            >
                              {props.basicDetail.charger_rating}
                            </Text>
                          </Grid>
                          <Grid item xs={2}>
                            <Text
                              variant="h"
                              component="div"
                              gutterBottom
                              sx={{
                                // font: "normal normal normal 14px/19px Nunito Sans",
                                color: "#4F4F4F",
                                marginTop: "5px",
                                fontSize:"15px"
                              }}
                            >
                             Connectors
                            </Text>
                          </Grid>
                          <Grid item xs={8}>
                            <Box
                              sx={{
                                width: "210px",
                                marginTop: "14px",
                                marginLeft: "15px",
                              }}
                            >
                              {/* <LinearProgress
                                variant="determinate"
                                value={props.basicDetail.connector_rating_value}
                              /> */}
                            </Box>
                          </Grid>
                          <Grid item xs={2}>
                            <Text
                              variant="h"
                              component="div"
                              gutterBottom
                              sx={{
                                font: "normal normal normal 14px/19px Nunito Sans",
                                color: "#4F4F4F",
                                marginTop: "5px",
                              }}
                            >
                              {props.basicDetail.connector_rating}
                            </Text>
                          </Grid>
                          <Grid item xs={2}>
                            <Text
                              variant="h"
                              component="div"
                              gutterBottom
                              sx={{
                                // font: "normal normal normal 14px/19px Nunito Sans",
                                color: "#4F4F4F",
                                marginTop: "5px",
                                fontSize:"15px"
                              }}
                            >
                             Accuracy
                            </Text>
                          </Grid>
                          <Grid item xs={8}>
                            <Box
                              sx={{
                                width: "210px",
                                marginTop: "14px",
                                marginLeft: "15px",
                              }}
                            >
                              {/* <LinearProgress
                                variant="determinate"
                                value={props.basicDetail.accuracy_rating_value}
                              /> */}
                            </Box>
                          </Grid>
                          <Grid item xs={2}>
                            <Text
                              variant="h"
                              component="div"
                              gutterBottom
                              sx={{
                                font: "normal normal normal 14px/19px Nunito Sans",
                                color: "#4F4F4F",
                                marginTop: "5px",
                              }}
                            >
                              {props.basicDetail.accuracy_rating}
                            </Text>
                          </Grid>
                          <Grid item xs={2}>
                            <Text
                              variant="h"
                              component="div"
                              gutterBottom
                              sx={{
                                // font: "normal normal normal 14px/19px Nunito Sans",
                                color: "#4F4F4F",
                                marginTop: "5px",
                                fontSize:"15px"

                              }}
                            >
                              Value
                            </Text>
                          </Grid>
                          <Grid item xs={8}>
                            <Box
                              sx={{
                                width: "210px",
                                marginTop: "14px",
                                marginLeft: "15px",
                              }}
                            >
                              {/* <LinearProgress
                                variant="determinate"
                                value={props.basicDetail.value_rating_value}
                              /> */}
                            </Box>
                          </Grid>
                          <Grid item xs={2}>
                            <Text
                              variant="h"
                              component="div"
                              gutterBottom
                              sx={{
                                font: "normal normal normal 14px/19px Nunito Sans",
                                color: "#4F4F4F",
                                marginTop: "5px",
                              }}
                            >
                              {props.basicDetail.value_rating}
                            </Text>
                          </Grid>
                          <Grid item xs={2}>
                            <Text
                              variant="h"
                              component="div"
                              gutterBottom
                              sx={{
                                // font: "normal normal normal 14px/19px Nunito Sans",
                                color: "#4F4F4F",
                                marginTop: "5px",
                                fontSize:"15px"

                              }}
                            >
                              Location
                            </Text>
                          </Grid>
                          <Grid item xs={8}>
                            <Box
                              sx={{
                                width: "210px",
                                marginTop: "14px",
                                marginLeft: "15px",
                              }}
                            >
                              {/* <LinearProgress
                                variant="determinate"
                                value={props.basicDetail.location_rating_value}
                              /> */}
                            </Box>
                          </Grid>
                          <Grid item xs={2}>
                            <Text
                              variant="h"
                              component="div"
                              gutterBottom
                              sx={{
                                font: "normal normal normal 14px/19px Nunito Sans",
                                color: "#4F4F4F",
                                marginTop: "5px",
                                // fontSize:"15px"

                              }}
                            >
                              {props.basicDetail.location_rating}
                            </Text>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
        </SwipeableViews>
      </Box>) 
}
    </>
  );
}
