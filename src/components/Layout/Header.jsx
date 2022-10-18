import React from "react";
import { makeStyles, createStyles } from "@mui/styles";
import NotificationIcon from "@mui/icons-material/NotificationsOutlined";

import Link from "components/common/Link";
import Avatar from "components/common/Avatar";
import Stack from "components/common/Stack";
import Badge from "components/common/Badge";
import AppBar from "components/common/AppBar";
import ToolBar from "components/common/ToolBar";
import IconButton from "components/common/IconButton";
import MenuIcon from "@mui/icons-material/MenuOutlined";

const Header = (props) => {
  const {
    Profile,
    isDrawerExpanded,
    onDrawerToggle,

  
  } = props;
  const classes = useStyles();


  return (
    <>
      <AppBar className={classes.appBarRoot} position="sticky" elevation={0}>
        <ToolBar sx={{ display: { xs: "auto", lg: "none" } }}>
          {isDrawerExpanded ? null : (
            <IconButton onClick={onDrawerToggle}>
              <MenuIcon />
            </IconButton>
          )}
        </ToolBar>

        <ToolBar className={classes.toolBarRoot}>
          <Stack direction="row" spacing={1.5}>
           
            <Link href="/notifications">
            <IconButton size="small">
              {/* <Badge overlap="circular" color="primary" variant="dot"> */}
                <NotificationIcon fontSize="small" />
              {/* </Badge> */}
            </IconButton>
            </Link>
             <Link href="/profile">
            <IconButton size="small">
                {Profile ? (

              <Avatar
                sx={{
                  width: 25,
                  height: 25,
                }}
                src={Profile}
                variant="body1"
                title="F"
              ></Avatar>
              ) : (
                <Avatar
                sx={{
                  width: 25,
                  height: 25,
                }}
                src="/images/tmp.png"
                variant="body1"
                title="F"
              ></Avatar>
              )
              }
            </IconButton>
            </Link>
          </Stack>
        </ToolBar>
      </AppBar>
    </>
  );
}
          

const useStyles = makeStyles((theme) =>
  createStyles({
    appBarRoot: {
      backgroundColor: `${theme.palette.background.paper} !important`,
      color: "#1e1e1e !important",
      flexDirection: "row",
      justifyContent: "space-between",
     [theme.breakpoints.up("lg")]: {
        justifyContent: "flex-end",
      },
      boxShadow: "0px 0px 10px #ebebeb",
    },

    toolBarRoot: {
      justifyContent: "flex-end",
    },
  })
);

export default React.memo(Header);
