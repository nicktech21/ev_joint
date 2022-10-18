import React from "react";

import Text from "components/common/Text";
import Box from "components/common/Box";
import Grid from "components/common/Grid";
import Button from "components/common/Button";
import Modal from "components/common/Modal";
import Avatar from "components/common/Avatar";

import { styled } from "@mui/material/styles";

import { useState } from "react";
import { makeStyles } from "@mui/styles";

import CircularProgress from "@mui/material/CircularProgress";

import CancelIcon from "@mui/icons-material/Cancel";

const ViewDetail = ({ props }) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [progress, setProgress] = useState(75);
  const [progress] = useState(75);
  const classes = useStyles();
  console.log("viw details-----", props);


  return (
    <>
      <ButtonStyle
        onClick={handleOpen}
        size="small"
        color="success"
        variant="contained"
      >
        View Details
      </ButtonStyle>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.rootBox}>
          <CancelIcon
            onClick={handleClose}
            className={classes.cancleStyle}
          ></CancelIcon>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={2} lg={1}>
              <Box className={classes.progressBox}>
                <CircularProgress
                  variant="determinate"
                  size="69px"
                  // value={progress}
                  value={props ? props.progress : 1}
                />
                <Avatar
                  src="/images/car.png"
                  className={classes.carStyle}
                  variant="rounded"
                ></Avatar>
                <Text
                  variant="caption"
                  sx={{
                    width: "38px",
                    height: "14px",
                    position: "absolute",
                    left: "55px",
                    top: "60px",
                    font: "normal normal 600 12px/16px Nunito Sans",
                  }}
                  component="div"
                  color="text.secondary"
                >
                  {`${Math.round(props ? props.progress : "")}%`}
                </Text>
              </Box>
            </Grid>
            <Grid item xs={12} sm={7} lg={8}>
              <Box>
                <Text
                  variant="h"
                  component="div"
                  gutterBottom
                  sx={{
                    // font: "normal normal 600 18px/24px Nunito Sans",
                    color: "#474747",
                    marginTop: "9px",
                  }}
                >
                  {props !== undefined ? props.StationName : ""}
                </Text>
                <Text
                  variant="h"
                  component="div"
                  gutterBottom
                  sx={{
                    // font: "normal normal normal 14px/19px Nunito Sans;",
                    color: "#707070",
                    fontSize: "14px"
                  }}
                >
                  Reliance Power
                </Text>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} lg={3}>
              <Box
                sx={{
                  display: "flex",
                  border: "1px solid #EBEBEB",
                  flexDirection: "column",
                  marginBottom: "1rem",
                  textAlign: "center",
                  marginRight: "20px",
                }}
              >
                <Box
                  sx={{
                    background:
                      "rgb(25, 170, 105, 0.1) 0% 0% no-repeat padding-box",
                    borderRadius: "4px",
                    width: "107px",
                    marginLeft: "5px",
                    marginTop: "5px",
                  }}
                >
                  <Text
                    variant="h"
                    component="div"
                    gutterBottom
                    sx={{
                      letterSpacing: "0.28px",
                      color: "#19AA69",
                      opacity: "1",
                      textAlign: "center",

                      marginTop: "5px",
                    }}
                  >
                    Booked Slot
                  </Text>
                </Box>

                <Text
                  variant="span"
                  component="div"
                  gutterBottom
                  sx={{
                    // font: " normal normal normal 12px/18px Nunito Sans",
                    letterSpacing: "0px",
                    color: "#474747",
                    fontSize: "15px",
                    margin: "5px 0px",
                  }}
                >
               
                  Monday, 21 July 2021; 9.30 am -11.30 am
                </Text>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={4}>
              <Box sx={{ border: "1px solid #EBEBEB" }}>
                <Text variant="h" component="div" gutterBottom sx={headings}>
                  Charging Details
                </Text>

                <Text variant="h" component="div" sx={listStyle}>
                  <Avatar
                    src="/images/carLogo.png"
                    alt="logo"
                    sx={{
                      width: "24px",
                      height: "24px",
                      marginRight: "10px",
                      marginTop: "-4px",
                    }}
                  />
                  {props !==null ? props?.carName :" "}
                </Text>
                <Text variant="h" component="div" sx={listStyle}>
                  <Avatar
                    src="/images/chademo.png"
                    alt="logo"
                    sx={{
                      width: "24px",
                      height: "24px",
                      marginRight: "10px",
                      marginTop: "-4px",
                    }}
                  />
                  {props !== undefined ? props.chademo : ""}
                </Text>

                <Text variant="h" component="div" sx={listStyle}>
                  <Avatar
                    src="/images/power.png"
                    alt="logo"
                    sx={{
                      width: "24px",
                      height: "24px",
                      marginRight: "10px",
                      marginTop: "-4px",
                    }}
                  />
                  {props!== undefined ? props.power : ""}
                </Text>
                <Text variant="h" component="div" sx={listStyle}>
                  <Avatar
                    src="/images/time.png"
                    alt="logo"
                    sx={{
                      width: "24px",
                      height: "24px",
                      marginRight: "10px",
                      marginTop: "-4px",
                    }}
                  />
                  {props !== undefined ? props.time : ""}
                </Text>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <Box sx={{ border: "1px solid #EBEBEB", height: 195 }}>
                <Text variant="h" component="div" gutterBottom sx={headings}>
                  Amenities Used
                </Text>
                {props ? (props.amenities?.map((amenity, index) => (
                  <>
                    <Text variant="h" component="div" sx={listStyle} key={index}>
                      <Avatar
                        src={amenity.thumbnail}
                        alt="logo"
                        sx={{
                          width: "24px",
                          height: "24px",
                          marginRight: "10px",
                          marginTop: "-4px",
                        }}
                      />
                      {amenity.name}
                    </Text>

                  </>
                ))) :  "" }

           </Box>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Box sx={{ border: "1px solid #EBEBEB" }}>
                <Text variant="h" component="div" gutterBottom sx={headings}>
                  Payment Details
                </Text>

                <Text
                  variant="h"
                  component="div"
                  sx={{
                    // font: " normal normal normal 14px/19px Nunito Sans",
                    color: "#707070",
                    marginTop: "20px",
                    marginLeft: "20px",
                    fontSize: "14px"
                  }}
                >
                  {/* Payment Mode Sbi debit card */}
                </Text>
                <Box sx={{ borderBottom: "1px solid #EBEBEB" }}>
                  <Grid container>
                    <Grid item xs={8}>
                      <Text
                        variant="h"
                        component="div"
                        sx={{
                          // font: " normal normal normal 14px/19px Nunito Sans",
                          color: "#707070",
                          marginTop: "20px",
                          marginLeft: "20px",
                          fontSize: "14px"
                        }}
                      >
                      Charging Fee 
                      </Text>
                    </Grid>
                    <Grid item xs={4}>
                      <Text
                        variant="h"
                        component="div"
                        sx={{
                          font: " normal normal normal 14px/19px Nunito Sans",
                          color: "#707070",
                          marginTop: "20px",
                          marginRight: "20px",
                          textAlign: "right",
                        }}
                      >
                        {props ? props.chargingFee  : ""}
                      </Text>
                    </Grid>
                    <Grid item xs={8}>
                      <Text
                        variant="h"
                        component="div"
                        sx={{
                          // font: " normal normal normal 14px/19px Nunito Sans",
                          color: "#707070",
                          marginTop: "5px",

                          marginLeft: "20px",
                          fontSize: "14px"
                        }}
                      >
                        Amenities
                      </Text>
                    </Grid>
                    <Grid item xs={4}>
                      <Text
                        variant="h"
                        component="div"
                        sx={{
                          // font: " normal normal normal 14px/19px Nunito Sans",
                          color: "#707070",
                          marginTop: "5px",
                          marginRight: "20px",
                          textAlign: "right",
                        }}
                      >
                        {props ? props.amenities : ""}
                      </Text>
                    </Grid>
                    <Grid item xs={8}>
                      <Text
                        variant="h"
                        component="div"
                        sx={{
                          // font: " normal normal normal 14px/19px Nunito Sans",
                          color: "#707070",
                          marginTop: "5px",

                          marginLeft: "20px",
                          fontSize: "14px"
                        }}
                      >
                        GST 
                      </Text>
                    </Grid>
                    <Grid item xs={4}>
                      <Text
                        variant="h"
                        component="div"
                        sx={{
                          // font: " normal normal normal 14px/19px Nunito Sans",
                          color: "#707070",
                          marginTop: "5px",
                          marginRight: "20px",
                          textAlign: "right",
                        }}
                      >
                         {props ? props.gst : ""} %
                      </Text>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container>
                    <Grid item xs={8}>
                      <Text
                        variant="h"
                        component="div"
                        sx={{
                          // font: " normal normal 600 16px/24px Nunito Sans;",
                          color: "#474747",
                          marginTop: "14px",

                          marginLeft: "20px",
                        }}
                      >
                        Total Amount
                      </Text>
                    </Grid>
                    <Grid item xs={4}>
                      <Text
                        variant="h"
                        component="div"
                        sx={{
                          // font: " normal normal 600 16px/24px Nunito Sans;",
                          color: "#474747",
                          marginTop: "14px",
                          textAlign: "right",

                          marginRight: "20px",
                        }}
                      >
                        {props?.amount}
                        {/* {props.chargingFee +
                          props.gst +
                          props.amenities} */}
                      </Text>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};
const ButtonStyle = styled(Button)({
  backgroundColor: "#19AA69",
  // font: "normal normal normal 14px/19px Nunito Sans",
  textTransform: "capitalize",
  padding: "10px",
  margin: "0px 10px 10px 10px",
});

const listStyle = {
  // font: " normal normal normal 14px/19px Nunito Sans",
  color: "#707070",
  marginTop: "20px",
  marginLeft: "20px",
  display: "flex",
  fontSize: "15px"
};
// const  lable=;
const headings = {
  // font: "normal normal 600 16px/22px Nunito Sans",
  color: "#474747",
  backgroundColor: "#F9F9F9",
  padding: "5px",
  borderBottom: "1px solid #EBEBEB",
};

const useStyles = makeStyles((theme) => ({
  rootBox: {
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: "75vw",
    height: "auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    padding: "20px",
    "@media (max-width:768px)": {
      overflowY: "scroll",
      height: "80vh"


    },
  },
  cancleStyle: {
    position: "absolute",
    top: "5px",
    right: "10px",
    cursor: "pointer",
  },
  carStyle: {
    width: "38px",
    height: "14px",
    position: "absolute",
    left: "48px",
    top: "40px",
  },
  progressBox: { marginLeft: "10px" },
}));

export default ViewDetail;
