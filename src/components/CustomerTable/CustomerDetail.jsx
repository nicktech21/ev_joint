import * as React from "react";
import PropTypes from "prop-types";
import Text from "components/common/Text";
import Box from "components/common/Box";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { styled } from "@mui/styles";
import { makeStyles } from "@mui/styles";
import PersonalDetail from "components/CustomerTable/PersonalDetail/PersonalDetail";
import ChargingHistory from "./ChargingHistory/ChargingHistory";
// import ChargingDataContainer from "containers/CustomerDetail/ChargingContainer";
// import PhotosContainer from "containers/CustomerDetail/PhotosContainer/PhotosContainer";
import ReviewsDataContainer from "containers/CustomerDetail/ReviewsContainer/ReviewsDataContainer";
import PhotosUploaded from "./PhotosUploaded/PhotosUploaded";
import { useHistory } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
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
    </div>
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

export default function BasicTabs({ props }) {

  console.log('props data ', props, '{props.personalDetailData.name}====',  props.personalDetailData.name  );
  const theme = useTheme();
  const chargingData = props.chargingData;
  console.log("personalDetailData====",chargingData,  props );

  const [value, setValue] = React.useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
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
        margin: "auto"
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
  const classes = useStyles();
  let history = useHistory();
  console.log("vhjvhvjh ", props.personalDetailData.photos);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          overflow: "hidden",
        }}
      >


        <Text variant="h4" component="div" gutterBottom

          sx={{ margin: "15px 10px 25px 10px", color: "#707070" }}
          className={classes.pdetailheading}
        >
          <ArrowBackIcon
            sx={{ fontSize: "24px", fontWeight: "bold", cursor: "pointer", marginRight: "10px" }}
            onClick={() => history.goBack()}
          />
          {props.personalDetailData.name}
        </Text>


        <PersonalDetail props={props.personalDetailData} />
        <Box sx={{ width: "100%", borderColor: "divider" }}>
          <MTabs
            sx={{ width: "100%" }}
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <MTab label="CHARGING HISTORY" {...a11yProps(0)} />
            <MTab label="PHOTO UPLOADED" {...a11yProps(1)} />
            <MTab label="REVIEWS" {...a11yProps(2)} />
          </MTabs>
        </Box>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            {/* <ChargingDataContainer props={props.chargingData} /> */}
            <ChargingHistory props={chargingData} />

           
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <PhotosUploaded props={props.personalDetailData.photos} />
            {/* <PhotosContainer props={props.personalDetailData.photos}/> */}
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Box sx={{
              display: "flex",
              flexWrap: "wrap",

            }} className={classes.parentBox}>
              <ReviewsDataContainer props={props.reviews} />
            </Box>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </>
  );
}
const useStyles = makeStyles((theme) => ({
  parentBox: {
    "@media (max-width:768px)": {
      display: "block",
    },
  },
}));
