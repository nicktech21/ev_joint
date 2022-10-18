import React from "react";
import cx from "classnames";
import { makeStyles, createStyles, useTheme } from "@mui/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import SidebarMenu from "./SidebarMenu";
import Box from "components/common/Box";
import Image from "components/common/Image";
import Drawer from "components/common/Drawer";
import Avatar from "components/common/Avatar";

const drawerWidth = 240;

const Sidebar = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const MEDIA_LG_UP = useMediaQuery(theme.breakpoints.up('lg'));

    const {
        isDrawerExpanded=true, // default to true  
        onDrawerToggle,
        menuConfig = [],
        onLogoutClick
    } = props;

    return (
        <Drawer
            variant={MEDIA_LG_UP ? "permanent" : "temporary"}
            open={isDrawerExpanded}
            onClose={() => onDrawerToggle(false)}
            classes={{
                root: cx({ [classes.drawerRoot]: true, [classes.drawerExpanded]: isDrawerExpanded, [classes.drawerCollapsed]: !isDrawerExpanded }),
                paper: cx({ [classes.drawerPaper]: true, [classes.drawerExpanded]: isDrawerExpanded, [classes.drawerCollapsed]: !isDrawerExpanded })
            }}
        >
            {isDrawerExpanded ? (
                <Box className={cx({ [classes.drawerHeader]: true, [classes.drawerHeaderExpanded]: isDrawerExpanded })} onClick={() => onDrawerToggle(false)}>
                    <Image alt="Ev Joint" src="/images/ev_joint.png"  height={38} />
                    
                </Box>
            ) : (
                <Box className={cx({ [classes.drawerHeader]: true, [classes.drawerHeaderCollapsed]: !isDrawerExpanded })} onClick={() => onDrawerToggle(true)}>
                    <Avatar
                        src="/images/ev_joint.png"
                        sx={{ height: 38, width: 38 }}
                        style={{ cursor: "pointer" }}
                    />
                    
                </Box>
            )}

            <SidebarMenu
                onLogoutClick={onLogoutClick}
                isDrawerExpanded={isDrawerExpanded}
                menuConfig={menuConfig}
            />
        </Drawer>
    )
}

const useStyles = makeStyles((theme) => createStyles({
    drawerRoot: {
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        border: `0 !important`,
    },
    drawerExpanded: {
        width: drawerWidth,
        overflowX: "hidden",
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),  
    },
    drawerCollapsed: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(9),
    },

    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    drawerHeaderExpanded: {
        justifyContent: 'space-between',
        

    },
    drawerHeaderCollapsed: {
        justifyContent: 'center'
    }
}));

export default React.memo(Sidebar);