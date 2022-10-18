import React from "react";
import Text from "components/common/Text";
import Box from "components/common/Box";
import Grid from "components/common/Grid";
import { makeStyles } from "@mui/styles";
import LinkIcon from "@mui/icons-material/Link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "components/common/Link";



const BasicDetail = ({data}) => {
  const classes = useStyles();
  


  return (
    <>
      <Box className={classes.grandParent}>
        <Box sx={{display:"flex"}}>
        <Link to="/charging">
        <ArrowBackIcon
              sx={{ fontSize: "20px", margin: "17px 0px 10px 0px",color: "#707070"  }}
            />
            </Link>
          <Text
            variant="h4"
            component="div"
            gutterBottom
            sx={{ margin: "15px 10px 25px 10px", color: "#707070" }}
          >
            {data.chargingStationName}
          </Text>
        </Box>
        <Box>
          <Box
            sx={{
              borderBottom: "1px solid #EBEBEB",
              margin: "10px 10px 20px 5px",
              color: "#707070",
            }}
          >
            <Text variant="h" component="div" gutterBottom>
              Basic Details
            </Text>
          </Box>
          <Box className={classes.parentBox}>
            <Box className={classes.image}>
             
              <img
                src={data.stationImage ? data.stationImage : "https://www.w3schools.com/howto/img_avatar.png"}
                alt="profilePic"
                width="232px"
                height="236px"
                style={{ borderRadius: "4px" }}
              />
            </Box>

            <Box className={classes.childBox}>
              <Box className={classes.subChildBox}>
                <Box>
                  <Text
                    variant="h"
                    component="div"
                    gutterBottom
                    sx={{
                      // font: "normal normal 600 18px/22px Nunito Sans",
                      color: "#707070",
                      marginTop: "5px",
                    }}
                  >
                                {data.chargingStationName} - {data.nameOfNetwork}
                  </Text>
                </Box>
                <Box
                  sx={{
                    background:
                      "rgba(25, 30, 170, 0.1) 0% 0% no-repeat padding-box",
                    borderRadius: "4px",
                    padding: "3px 7px",
                    color: "#707070",

                    height: "25px",
                    marginLeft: "15px",
                  }}
                >
                  <Text
                    variant="span"
                    component="div"
                    gutterBottom
                    sx={{
                      letterSpacing: "0.28px",

                      opacity: "1",
                      textAlign: "center",
                      // font: "normal normal normal 15px/16px Nunito Sans",
                      color: "#4C72B7",

                      // marginTop: "5px",
                    }}
                  >
                   {data.type}
                  </Text>
                </Box>
              </Box>

              <Box className={classes.textBox}>
                <Grid container rowSpacing={1} spacing={0}>
                  <Grid item xs={1} md={1} lg={1}>
                    <LinkIcon sx={iconStyle} />
                  </Grid>

                  <Grid item xs={11} md={11} lg={11}>
                    <Text
                      variant="a"
                      component="div"
                      gutterBottom
                      sx={{
                        letterSpacing: "0.28px",
                        color: "#707070",
                        opacity: "1",
                        textAlign: "left",
                        // font: "normal normal normal 15px/16px Nunito Sans",
                        textDecoration: "underline",

                        marginTop: "5px",
                      }}
                    >
                      URL: {data.stationUrl}
                    </Text>
                  </Grid>

                  <Grid item xs={1} md={1} lg={1}>
                    <LocationOnIcon sx={iconStyle} />
                  </Grid>

                  <Grid item xs={11} md={11} lg={11}>
                    <Text
                      variant="a"
                      component="div"
                      gutterBottom
                      sx={{
                        letterSpacing: "0.28px",
                        color: "#707070",
                        opacity: "1",
                        textAlign: "left",
                        marginTop:"5px"
                        // font: "normal normal normal 15px/16px Nunito Sans",
                      }}
                    >
                      {data.stationLocation}
                    </Text>
                  </Grid>
                  <Grid item xs={1} md={1} lg={1}>
                    <AccessTimeIcon sx={iconStyle} />
                  </Grid>

                  <Grid item xs={11} md={11} lg={11}>
                    <Text
                      variant="a"
                      component="div"
                      gutterBottom
                      sx={{
                        letterSpacing: "0.28px",
                        color: "#707070",
                        opacity: "1",
                        textAlign: "left",
                        marginTop: "5px",
                        // font: "normal normal normal 15px/16px Nunito Sans",
                      }}
                    >
                      {data.openTime} - {data.closeTime}
                    </Text>
                  </Grid>
                  <Grid item xs={1} md={1} lg={1}>
                    <CallIcon sx={iconStyle} />
                  </Grid>

                  <Grid item xs={4} md={4} lg={4}>
                    <Text
                      variant="a"
                      component="div"
                      gutterBottom
                      sx={{
                        letterSpacing: "0.28px",
                        color: "#707070",
                        opacity: "1",
                        textAlign: "left",
                        marginTop: "5px",
                        // font: "normal normal normal 15px/16px Nunito Sans",
                      }}
                    >
                      {data.contactNumber}
                    </Text>
                  </Grid>
                  <Grid item xs={7}>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <MailOutlineIcon sx={iconStyle}></MailOutlineIcon>{" "}
                      <Text
                        variant="a"
                        component="div"
                        gutterBottom
                        sx={{
                          letterSpacing: "0.28px",
                          color: "#707070",
                          opacity: "1",
                          textAlign: "left",
                          marginTop: "5px",
                          // font: "normal normal normal 15px/16px Nunito Sans",
                        }}
                      >
                        {data.contactEmail}
                      </Text>
                    </Box>
                  </Grid>
                </Grid>

                <Box
                className={classes.Favorite}
                  sx={{
                    border: "1px solid #EAEAEA",
                    borderRadius: "4px",
                    display: "flex",
                    margin: "10px 0px 0px 10px",
                    padding: "10px",
                  }}
                >
                  <FavoriteBorderIcon
                    sx={{ color: "red" }}
                  ></FavoriteBorderIcon>
                  <Text
                    variant="span"
                    component="div"
                    gutterBottom
                    sx={{
                      letterSpacing: "0.28px",
                      color: "#707070",
                      opacity: "1",
                      textAlign: "center",
                      // fontSize:"10px",
                      // font: "normal normal normal 14px/16px Nunito Sans",
                      margin: "2px 0px 5px 6px",
                    }}
                  >
                    Favorite of {data.likes} Customers
                  </Text>
                </Box>
                <Box></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  grandParent: {
    padding: "1rem",
  
    "@media (max-width:768px)": {
      padding: "0px",
    },
  },
  parentBox: {
    display: "flex",
    flexDirection: "row",
    "@media (max-width:768px)": {
      flexDirection: "column",
    },
  },
  childBox: {
    margin: "0px 1rem",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    "@media (max-width:768px)": {
      margin: "0px 0rem",
    },
  },
  subChildBox: {
    width: "100%",
    margin: "0px 1rem",

    display: "flex",
    flexDirection: "row",
    "@media (max-width:768px)": {
      display: "block",
      margin: "0px 0rem",
      textAlign: "center",
    },
  },
  textBox: {
    display: "flex",
    height: "auto",
    color: "#474747",
    width: "50%",
    margin: "0.5rem",

    flexWrap: "wrap",

    "@media (max-width:768px)": {
      width: "100%",
    },
  },
  image: {
    "@media (max-width:768px)": {
      margin: "0px 15vw",
    },
  },
  Favorite:{
    "@media (max-width:768px)": {
      padding:"10px 49px" ,
      margin: "10px 0px 0px 0px"
    },
  }
  
}));

export default BasicDetail;

const iconStyle = { margin: "7px 5px 0px 5px", width: "20px", height: "20px" };
