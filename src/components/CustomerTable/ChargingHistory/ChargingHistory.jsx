import React from "react";
import Text from "components/common/Text";
import Box from "components/common/Box";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
// import ViewdataContainer from "containers/CustomerDetail/ViewdDataContainer/ViewdataContainer";
import ViewDetail from "components/CustomerTable/ViewDetail/ViewDetail";

const Heading = styled(Text)({
  // color: #20b2aa;
  // font: "normal normal 600 18px/24px Nunito Sans",
  color: "#474747",
});

const Subtitel = styled(Text)({
  font: "normal normal normal 14/18px Nunito Sans",
  fontSize: "15px",
});




const ChargingHistory = ({ props }) => {

  const classes = useStyles();

  var Data = props;

  console.log('charging history',Data);

  const arrr = Data?.map((prop, index) => {

    console.log(   "props.invoice  view details",prop.invoice);

    return (
      <>
        <Box className={classes.grandParentBox} key={index}>
          <Box className={classes.parentBox}>
            <Text
              variant="h"
              component="div"
              gutterBottom
              sx={{
                // font: "normal normal 600 18px/24px Nunito Sans",
                color: "#474747",
              }}
            >
              {prop.StationName}
            </Text>

            <Box className={classes.subParentBox}>
              {prop.charging_status === "Charging" ? (
                <Box className={classes.childBox} style={{ backgroundColor: "rgb(232 247 240)" }}>
                  <Text
                    variant="h"
                    component="div"
                    gutterBottom
                    sx={{
                      letterSpacing: "0.28px",
                      color: "#19AA69",
                      opacity: "1",
                      // font: "normal normal 600 14px/19px Nunito Sans",
                      marginTop: "4px",
                      fontSize: "14px"
                    }}
                  >
                    {prop.charging_status}
                  </Text>
                </Box>) : (
                <Box className={classes.childBox}>
                  <Text
                    variant="h"
                    component="div"
                    gutterBottom
                    sx={{
                      letterSpacing: "0.28px",
                      color: "#19AA69",
                      opacity: "1",
                      font: "normal normal 600 14px/19px Nunito Sans",
                      marginTop: "4px",
                    }}
                  >
                    {prop.charging_status}
                  </Text>
                </Box>)}


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
          </Box>


          <Box className={classes.midBox}>
            <Box className={classes.bigDiv}>
              <img alt=""
                src="http://43.204.45.214:3000/manufacturer/hyundai.png"
                // src={prop.img}
                width={"50px"}
                height={"50px"}
                style={{ margin: "1rem 0px" }}
              />

              <Box className={classes.smallDiv}>
                <Heading>{prop.carName}</Heading>
                <Subtitel>{prop.sub}</Subtitel>
              </Box>
            </Box>
            <Box className={classes.bigDiv}>
              <img alt=""
                src="/images/chademo.png"
                width={"50px"}
                height={"50px"}
                style={{ margin: "1rem 0px" }}
              />
              <Box className={classes.smallDiv}>
                <Heading> {prop?.chademo}</Heading>
                <Subtitel>{prop?.sub}</Subtitel>
              </Box>
            </Box>
            <Box className={classes.bigDiv}>
              <img alt=""
                src="/images/power.png"
                width={"50px"}
                height={"50px"}
                style={{ margin: "1rem 0px" }}
              />
              <Box className={classes.smallDiv}>
                <Heading>Power Consuption</Heading>
                <Subtitel>{prop.power}</Subtitel>
              </Box>
            </Box>

            <Box className={classes.bigDiv}>
              <img alt=""
                src="/images/time.png"
                width={"50px"}
                height={"50px"}
                style={{ margin: "1rem 0px" }}
              />
              <Box className={classes.smallDiv}>
                <Heading>Time Duration</Heading>
                <Subtitel>{String(prop.time)}</Subtitel>
              </Box>
            </Box>
            <Box className={classes.bigDiv}>
              <img alt=""
                src="/images/wallet.png"
                width={"50px"}
                height={"50px"}
                style={{ margin: "1rem 0px" }}
              />
              <Box className={classes.smallDiv}>
                <Heading>Amount Paid</Heading>
                <Subtitel>{prop.amount}</Subtitel>
              </Box>
            </Box>
          </Box>
          <Box className={classes.buttonBox}>
            {/* <ViewdataContainer props={prop.invoice} /> */}
            <ViewDetail props={prop ? prop.invoice : ""} />
          </Box>
        </Box>
      </>
    );
  });

  return <>{arrr}</>;
};

const useStyles = makeStyles((theme) => ({
  smallDiv: {
    margin: " 1rem",
    display: "flex",
    flexDirection: "column",

    "@media (max-width:768px)": {
      margin: " 1rem",
      display: "flex",
      flexDirection: "column",
      width: "10rem",
      textAlign: "center",
    },
  },
  bigDiv: {
    margin: "1rem 0.5rem",
    display: "flex",
    flexDirection: "row",
    color: "#474747",
  },
  midBox: {
    display: "flex",
    justifyContent: "space-between",
    // flexDirection: "row",
    "@media (max-width:768px)": {
      flexWrap: "wrap",
      margin: "1rem 8%",
    },
  },
  grandParentBox: {
    border: "1px solid #EBEBEB",
    marginBottom: "15px",
    "@media (max-width:768px)": {
      justifyContent: "center",
      textAlign: "center",
      overflow: "hidden",
    },
  },
  parentBox: {
    margin: "1.5rem",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #EBEBEB",
    "@media (max-width:768px)": {
      flexDirection: "column",
    },
  },
  childBox: {
    borderRadius: "4px",
    width: "107px",
    marginLeft: "150px",
    padding: "2px 1px",
    textAlign: "center",
    height: "28px",
    "@media (max-width:768px)": {
      margin: "auto",
    },
  },
  subParentBox: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
    textAlign: "center",
  },
  buttonBox: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    "@media (max-width:768px)": {
      flexDirection: "row",
      margin: "0px 35%",
    },
  },
}));

export default ChargingHistory;
