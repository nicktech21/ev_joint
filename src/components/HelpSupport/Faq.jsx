

import * as React from "react";


import { makeStyles } from "@mui/styles";
import Box from "components/common/Box";
import Text from "components/common/Text";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useMediaQuery from '@mui/material/useMediaQuery';


const Faq = ({props}) => {
  const classes = useStyles();
  const arrr = [props]?.map((prop,i) => {
    return (
      <>
        <Accordion key={i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            key={i}
          >
            <Text color="text.secondary" className={classes.heading} key={i}>{prop[i]?.que}</Text>
          </AccordionSummary>
          <AccordionDetails key={i}>
            <Text>{prop[i]?.ans}</Text>
          </AccordionDetails>
        </Accordion>
      </>
    );
  })
  return (
    <Box className={classes.faq_container}>
      <Text
        sx={{
          fontSize: "28px",
          letterSpacing: "0px",
          color: "#707070",
          opacity: 1,
          textAlign: "left",
          marginBottom: "40px",
        }}
        variant="h1"
        component="div"
      >
        FAQs
      </Text>
      {arrr}
     
    
    </Box>
  );
};


const useStyles = makeStyles((theme) => ({
  faq_container: {
    marginLeft: "2.5rem",
    marginRight: "2.5rem",
    marginTop: "3.75rem",
    ['@media (max-width:768px)']: { 
      marginLeft: "0rem",
    marginRight: "2.5rem",
    marginTop: "3.75rem",
    }
  },
  faq_title: {
    color: "#707070",
    font : "nunito sans",
    fontSize: "14px",
    fontWeight: "bold",
},
faq_answer: {
  color: "#646464",
  font : "nunito sans",
  fontSize: "14px",
}
}));

export default Faq;
