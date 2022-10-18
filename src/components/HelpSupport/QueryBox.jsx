import react from "react";

import * as React from "react";

import { makeStyles } from "@mui/styles";

import Card from "@mui/material/Card";
import Box from "components/common/Box";
import Button from "components/common/Button";
import TextField from "components/common/TextField";
import Text from "components/common/Text";
import Image from "components/common/Image";

import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";


const QueryBox = () => {
  const classes = useStyles();
  return (
    <Box className={classes.query_box_container}>
      <Card sx={{   padding: "10px" }}>
        <CardContent>
          <Text
            sx={{
              
            }}
            className={classes.query_box_title}
            variant="body2"
            color="text.secondary"
          >
            SEND US YOUR QUERIES
          </Text>

          <Text
            sx={{
              fontSize: "14px",
              letterSpacing: "-0.1px",
              color: "#8F8F8F",
              opacity: 1,
              textAlign: "left",
            }}
            variant="body2"
            color="text.secondary"
          >
            Fill up the form and our team will get back to you in the next 24
            hours
          </Text>

          <Image className={classes.query_box_img} src="query_box_img.png" alt="logo" />

          <TextField
            id="outlined-multiline-static"
            label="Type your message here"
           labelid=""
            sx={{
              backgroundColor: "#ffffff",
            }}
            multiline
            rows={4}
          />
        </CardContent>
        <CardActions disableSpacing>
          <Box mt={1} ml={0.6}>
            <Button className={classes.QueryButton} type="submit">
              Send Message
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  QueryButton: {
    fontSize: "14px",
  },

  query_box_container: {
    marginRight: "0.5rem",
    

  },

  query_box_img: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50px",
    marginBottom: "18px",
    width: "269px",
    height: "141px",
    ['@media (max-width:768px)']: { 
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "50px",
      marginBottom: "18px",
      width: "70%",
      height: "8rem",
    }

  },
  query_box_title: {
    fontSize: "28px",
              letterSpacing: "0px",
              color: "#707070",
              opacity: 1,
              textAlign: "left",
  ['@media (max-width:768px)']: { 
    fontSize: "24px",
    letterSpacing: "0px",
    color: "#707070",
    opacity: 1,
    textAlign: "left",
  }
  }

}));

export default QueryBox;
