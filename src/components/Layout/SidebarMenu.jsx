import React from "react";
import cx from "classnames";
import { createStyles, makeStyles, } from "@mui/styles";
import { alpha } from "@mui/material/styles";
import List from "components/common/List";
import Divider from "components/common/Divider";
import ListItem from "components/common/ListItem";
import IconButton from "components/common/IconButton";
import ListItemText from "components/common/ListItemText";
import ListItemIcon from "components/common/ListItemIcon";
import ListItemAvatar from "components/common/ListItemAvatar";
import ListSubheader from "components/common/ListSubheader";
import ListItemButton from "components/common/ListItemButton";
import ListItemSecondaryAction from "components/common/ListItemSecondaryAction";


const SidebarMenu = (props) => {
    const { menuConfig = [], isDrawerExpanded,  onLogoutClick, } = props;
    
    const classes = useStyles();
    return (
        <List
            classes={{
                root: classes.listRoot
            }}
        >
            {menuConfig.map((item, index) => {
                const {
                    type,
                    onClick = () => { },
                    primaryText,
                    secondaryText = "",
                    icon = null,
                    secondaryAction = "",
                    isActive = false,
                    isDisabled = false,
                    avatar,
                    isAdmin
                } = item;
                const key = `${type}__${index}`;

                if (type === "header") {
                    return (
                        <ListSubheader key={key}>
                            {primaryText}
                        </ListSubheader>
                    )
                }

                if (type === "item") {
                    if (isDrawerExpanded) {
                        return (
                            <ListItem
                                key={key}
                                sx={{ py:0 }}
                                
                                  
                             
                            >
                                <ListItemButton onClick={onClick} disabled={isDisabled} classes={{ root: cx({ [classes.listItemRoot]: true, [classes.listItemActive]: isActive }) }}>
                                    { icon && <ListItemIcon classes={{ root: classes.listItemIconRoot }}>{icon}</ListItemIcon> }
                                    { avatar && <ListItemAvatar classes={{ root: classes.listItemAvatarRoot }}>{avatar}</ListItemAvatar> }
                                    <ListItemText
                                        primary={primaryText}
                                        secondary={secondaryText}
                                        classes={{
                                            primary: cx({ [classes.listItemPrimaryText]: true, [classes.listItemPrimaryTextActive]: isActive }),
                                            secondary: cx({ [classes.listItemSecondaryText]: true, [classes.listItemSecondaryTextActive]: isActive }),
                                        }}
                                    />
                                    {secondaryAction ? (
                                        <ListItemSecondaryAction>
                                            {secondaryAction}
                                        </ListItemSecondaryAction>
                                    ) : null}
                                </ListItemButton>
                            </ListItem>
                        )
                    }
                    return (
                        <ListItem
                            key={key}
                            sx={{ px: 1.5, py: 0 }}
                        >
                            <ListItemButton onClick={onClick} disabled={isDisabled} classes={{ root: cx({ [classes.listItemCollapsedRoot]: true, [classes.listItemActive]: isActive }) }}>
                            { icon && <IconButton disableRipple disableFocusRipple>{icon}</IconButton> }
                            { avatar && <ListItemAvatar classes={{ root: classes.listItemAvatarRoot }}>{avatar}</ListItemAvatar> }
                            </ListItemButton>
                            {/* <ListItemIcon>{icon}</ListItemIcon> */}
                        </ListItem>
                    )
                }

                if (type === "divider") {
                    return (
                        <ListItem key={key} className={classes.divider}>
                            <Divider />
                        </ListItem>
                    )
                }

                if (type === "spacer") {
                    return (
                        <ListItem key={key} className={classes.spacer} />
                    )
                }


                if (type === "logout") {
                    if (isDrawerExpanded) {
                        return (
                            <ListItem
                                key={key}
                                sx={{ py:0,
                                position: "absolute",
                                bottom:"1.375rem",
                                }}
                              
                             
                            >
                                <ListItemButton onClick={onLogoutClick} disabled={isDisabled} classes={{ root: cx({ [classes.listItemRoot]: true, [classes.listItemActive]: isActive }) }}>
                                    { icon && <ListItemIcon classes={{ root: classes.listItemIconRoot }}>{icon}</ListItemIcon> }
                                    { avatar && <ListItemAvatar classes={{ root: classes.listItemAvatarRoot }}>{avatar}</ListItemAvatar> }
                                    <ListItemText
                                        primary={primaryText}
                                        secondary={secondaryText}
                                        classes={{
                                            primary: cx({ [classes.listItemLogoutText]: true, [classes.listItemPrimaryTextActive]: isActive }),
                                            secondary: cx({ [classes.listItemSecondaryText]: true, [classes.listItemSecondaryTextActive]: isActive }),
                                        }}
                                    />
                                    {secondaryAction ? (
                                        <ListItemSecondaryAction>
                                            {secondaryAction}
                                        </ListItemSecondaryAction>
                                    ) : null}
                                </ListItemButton>
                            </ListItem>
                        )
                    }
                    return (
                        <ListItem
                            key={key}
                            sx={{ px: 1.5, py: 0,
                                position: "absolute",
                                bottom:"1.375rem",
                            }}
                        >
                            <ListItemButton onClick={onLogoutClick} disabled={isDisabled} classes={{ root: cx({ [classes.listItemCollapsedRoot]: true, [classes.listItemActive]: isActive }) }}>
                            { icon && <IconButton disableRipple disableFocusRipple>{icon}</IconButton> }
                            { avatar && <ListItemAvatar classes={{ root: classes.listItemAvatarRoot }}>{avatar}</ListItemAvatar> }
                            </ListItemButton>
                            
                        </ListItem>
                    )
                }


                return null;
            })}





        </List>
    )
}

const useStyles = makeStyles((theme) => createStyles({
   
    evRoot:{
        display: "flex",
        flexDirection: "column",

    },


    listRoot: {
        paddingRight: "8px",
        display: "flex",
        flexDirection: "column",
        height: "100%"
    },
    listItemRoot: {
        borderRadius: `${theme.spacing(0.5)} !important`,
        padding: `${theme.spacing(1.7)} !important`,
        paddingRight: `${theme.spacing(1.5)} !important`,
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    listItemCollapsedRoot: {
        borderRadius: `${theme.spacing(0.5)} !important`,
        paddingLeft: `${theme.spacing(1)} !important`,
        paddingRight: `${theme.spacing(1)} !important`,
        justifyContent: "center !important",
    },
    listItemActive: {
        backgroundColor: `${alpha(theme.palette.primary.main, 0.12)} !important`,
    },

    listItemAvatarRoot: {
        minWidth: "24px !important",
      
    },
    listItemIconRoot: {
        minWidth: "24px !important",
      
    },

    listItemPrimaryText: {
      //  fontSize: `${theme.typography.body2.fontSize} !important`,
          fontSize: "1rem !important",
        color: "#B4B4BE !important",
        lineHeight: `${theme.typography.body2.lineHeight} !important`,
       
    },
   listItemLogoutText: {
    fontSize: `${theme.typography.body2.fontSize} !important`,
    color: "#545454 !important",
    fontWeight: "bold !important",
    lineHeight: `${theme.typography.body2.lineHeight} !important`,
},

    listItemPrimaryTextActive: {
        color: `${theme.palette.primary.main} !important`,
        fontWeight: `bold !important`,
    },

    listItemSecondaryText: {
        fontSize: `${theme.typography.caption1.fontSize} !important`,
        color: "#252C32 !important",
        lineHeight: `${theme.typography.body2.lineHeight} !important`,
        maxWidth: "130px",
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    listItemSecondaryTextActive: {
        color: `${theme.palette.primary.main} !important`
    },

    spacer: {
        flexGrow: 1,
    },

    divider: {
        display: "block !important",
        paddingLeft: "0 !important",
        paddingRight: "0 !important",
    }
}))

export default React.memo(SidebarMenu);