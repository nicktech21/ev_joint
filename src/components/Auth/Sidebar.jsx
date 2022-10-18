import React from 'react'
import { makeStyles } from "@mui/styles";
import Box from "components/common/Box";
import Image from "components/common/Image";
import Text from "components/common/Text";

export default function Sidebar() {
   const classes = useStyles();
  return (
    <Box className={classes.sidebar}>
    <Box className={classes.logobox}>
      <Image src="charge.png" className={classes.charge_logo} alt=""/>
    </Box>
    <Box mt={1}>
      <Text variant="h1" className={classes.login_heading}>Connecting Charging Station</Text>
    </Box>

    <Box mt={3}>
      <h1 className={classes.login_heading_2}>
        It is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The
        point of using Lorem Ipsum is that it has a more-or-less
      </h1>
    </Box>

    <Box mt={10}>
      <Image src="login_1.png" className={classes.login_avatar}  alt="" />
    </Box>
  </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  sidebar: {
    backgroundColor: "#19aa69",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    position:"fixed",
    width:"26%!important",
    paddingLeft:"50px;",
    paddingRight:"50px",
  },
  login_avatar: {
    flex: "1",
    width:"100% !important",
  },
  logobox: {
   marginTop:"100px",
   paddingRight:"70px",
  },
  charge_logo: {
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
    width:"100%",
  },
  login_heading: {
  font: "normal normal bold 21px/28px Nunito Sans !important",
  letterSpacing : "0px",
  color: "#FFFFFF",
  textAlign: "left",
  opacity: "1",
  },
  login_heading_2: {
    color: "#fff",
    fontSize: "14px",
    fontWeight: "normal",
    fontFamily: "Nunito Sans",
    flex: "1",
    lineHeight:1.4,
  },
}));
