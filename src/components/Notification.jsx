import React from "react";

import Box from "../components/common/Box";
import { makeStyles } from "@mui/styles";

import Stack from "../components/common/Stack";
import Card from "../components/common/Card";
import CardContent from "../components/common/CardContent";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CardActions from "@mui/material/CardActions";
import Text from "components/common/Text";
import Divider from "@mui/material/Divider";
import { useHistory } from "react-router-dom";

const Notification = ({ data }) => {
  let history = useHistory();
  const classes = useStyles();
  const arr = data.map((item, index) => {
    return (
      <Card className={classes.rootnotification}>
        <CardContent>
          <Text className={classes.heading} color="text.secondary" gutterBottom>
            {item.title}
          </Text>

          <Divider style={{ margin: "1.2rem" }} variant="middle" />

          <Text className={classes.content} color="text.secondary">
            {item.description}
          </Text>
        </CardContent>
        <CardActions className={classes.date}>
          <Text className={classes.date}>{item.date}</Text>
        </CardActions>
      </Card>
    );
  });
  return ( <Box className={classes.center}>
  <Card>
      <CardContent>

          <Text
              variant="h5"
              color="#202020"
              sx={{ fontSize: "24px", fontWeight: "bold", marginBottom: "40px" }}
          >
              
              <ArrowBackIcon
                  sx={{ fontSize: "24px", fontWeight: "bold", marginRight: "10px" }}
                  onClick={() => history.goBack()}
              />
              NOTIFICATION
          </Text>
          <Stack
              direction="column"
              spacing={2}
              justifyContent="space-between"
              sx={{
                  marginBottom: "1.25rem",
              }}
          >

             {arr}
            
          </Stack>
      </CardContent>
  </Card>

</Box>);
};

const useStyles = makeStyles((theme) => ({
  viewButtonLabel: { textTransform: "none" },

  rootnotification: {
    width: "60%",
    marginTop: "1rem",
    ["@media (max-width:768px)"]: {
      width: "100%",
      marginTop: "1rem",
    },
  },

  pageHeading: {
    fontSize: "24px",
    fontFamily: "Nunito Sans",
    fontWeight: "bold",
    textTransform: "none",
    color: "#707070",
    opacity: 1,
  },

  heading: {
    fontSize: "1rem",
    fontFamily: "Nunito Sans",
    fontWeight: "bold",
  },

  content: {
    fontSize: "0.75rem",
    fontFamily: "Nunito Sans",
  },
  date: {
    fontSize: "0.75rem",
    fontFamily: "Nunito Sans",
    float: "right",
  },
}));
export default Notification;
