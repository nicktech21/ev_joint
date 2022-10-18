import React from "react";
 
//common components
import Stack from "components/common/Stack";
import Avatar from "components/common/Avatar";
import Header from "components/Layout/Header";
import Sidebar from "components/Layout/Sidebar";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";


const routes = {
    demoComponents:`/demo`,
    dashboard: `/dashboard`,
    charging: `/charging`,
    customer: `/customer`,
    booking: `/booking`,
    vendor:`/vendor`,
    helpsupport: `/helpsupport`,
    
   
};

class LayoutContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawerExpanded: true,
            isNotificationDropdownOpen: false,
            notificationAnchorEl: null,
            logoutsuccess: false,
        };
    }

    handleDrawerToggle = (isDrawerExpanded) => {
        this.setState({ isDrawerExpanded });
    };

    handleNotificationOpen = (e) => {
        this.setState({
            notificationAnchorEl: e.currentTarget,
            isNotificationDropdownOpen: true,
        });
    };

    handleNotificationClose = () => {
        this.setState({
            notificationAnchorEl: null,
            isNotificationDropdownOpen: false,
        });
    };

    handleLogoutClick = () => {
       
        this.setState({ logoutsuccess: true });

        setTimeout(() => {
            this.props.logoutAction();
        this.props.history.replace("/login");
        }, 2000);

       
        
       
    };

    handleSidebarRedirection = (pathname) => {
        if (window.innerWidth < 900) {
            this.handleDrawerToggle(false);
        }
        this.props.history.push(pathname);
    };

    isActiveRoute = (pathname) =>
    
    {

        const url = this.props.location.pathname.slice(0, this.props.location.pathname.lastIndexOf('/'));

       if (this.props.location.pathname === pathname)
       {
        return true;
        
       }
       else if(this.props.location.pathname === "/add/station" && pathname ==="/charging" )
       {
return true ;

       }
       else if(this.props.location.pathname === "/add/station" && pathname ==="/charging" )
       {
return true ;

       }

       else if(url === "/edit/station" && pathname ==="/charging" )
       {
return true ;

       }
       
    else if (url === "/station/details" && pathname ==="/charging" )
       {
return true ;

       }

       else if (url === "/customer/details" && pathname ==="/customer" )
      {
            return true ;
            
     }
       else
       {

        return false ;
      }
     

    } 

    render() {
        const {
            isDrawerExpanded,
            isNotificationDropdownOpen,
            notificationAnchorEl,
        } = this.state;
        const {
            children,
            notifications = [],
        } = this.props;

        const sidebarMenuConfig = [
            {
                type: "item",
                primaryText: "Dashboard",
                icon: (
                    <Avatar
                        sx={{
                            width: 22,
                            height: 22,
                            
                        }}
                        src="/images/DashboardIcon.svg"
                        variant="body1"
                        title="F"
                    >
                    </Avatar>
                ),
                onClick: () => this.handleSidebarRedirection(routes.dashboard),
                isActive: this.isActiveRoute(routes.dashboard),
            },
            {
                type: "item",
                primaryText: "Charging Station",
                icon: (
                    <Avatar
                    sx={{
                        width: 22,
                        height: 22,
                    }}
                    src="/images/ActivityIcon.svg"
                    variant="body1"
                    title="F"
                >
                </Avatar>
                ),
                onClick: () => this.handleSidebarRedirection(routes.charging),
                isActive: this.isActiveRoute(routes.charging),
            },
            {
                type: "item",
                primaryText: "Customers",
                icon: (
                    <Avatar
                    sx={{
                        width: 22,
                        height: 22,
                    }}
                    src="/images/ChargingIcon.svg"
                    variant="body1"
                    title="F"
                >
                </Avatar>
                ),
                onClick: () => this.handleSidebarRedirection(routes.customer),
                isActive: this.isActiveRoute(routes.customer),
            },
            {
                type: "item",
                primaryText: "Bookings",
                icon: (
                    <Avatar
                    sx={{
                        width: 22,
                        height: 22,
                    }}
                    src="/images/BookingIcon.svg"
                    variant="body1"
                    title="F"
                >
                </Avatar>
                ),
                onClick: () => this.handleSidebarRedirection(routes.booking),
                isActive: this.isActiveRoute(routes.booking),
            },
           
            {
                type: "item",
                primaryText: "Help and Support",
                icon: (
                    <Avatar
                    sx={{
                        width: 22,
                        height: 22,
                    }}
                    src="/images/HelpIcon.svg"
                    variant="body1"
                    title="F"
                >
                </Avatar>
                ),
                onClick: () => this.handleSidebarRedirection(routes.helpsupport),
                isActive: this.isActiveRoute(routes.helpsupport),
            },
            {
                type: "logout",
                primaryText: "Logout",
               
                avatar: (
                    <Avatar
                        sx={{
                            width: 22,
                            height: 22,
                            padding: "10px"
                        }}
                        src="/images/LogoutIcon.png"
                        variant="body1"
                        title="F"
                    >
                    </Avatar>
                ),
                onclick: () => this.handleLogoutClick(),
            },
            
        
            
        ];

        const sidebarMenuConfigadmin = [

            {
                type: "item",
                primaryText: "Dashboard",
                icon: (
                    <Avatar
                        sx={{
                            width: 22,
                            height: 22,
                        }}
                        src="/images/DashboardIcon.svg"
                        variant="body1"
                        title="F"
                    >
                    </Avatar>
                ),
                onClick: () => this.handleSidebarRedirection(routes.dashboard),
                isActive: this.isActiveRoute(routes.dashboard),
            },
            {
                type: "item",
                primaryText: "Charging Station",
                icon: (
                    <Avatar
                    sx={{
                        width: 22,
                        height: 22,
                    }}
                    src="/images/ActivityIcon.svg"
                    variant="body1"
                    title="F"
                >
                </Avatar>
                ),
                onClick: () => this.handleSidebarRedirection(routes.charging),
                isActive: this.isActiveRoute(routes.charging),
            },
            {
                type: "item",
                primaryText: "Customers",
                icon: (
                    <Avatar
                    sx={{
                        width: 22,
                        height: 22,
                    }}
                    src="/images/ChargingIcon.svg"
                    variant="body1"
                    title="F"
                >
                </Avatar>
                ),
                onClick: () => this.handleSidebarRedirection(routes.customer),
                isActive: this.isActiveRoute(routes.customer),
            },
            {
                type: "item",
                primaryText: "Bookings",
                icon: (
                    <Avatar
                    sx={{
                        width: 22,
                        height: 22,
                    }}
                    src="/images/BookingIcon.svg"
                    variant="body1"
                    title="F"
                >
                </Avatar>
                ),
                onClick: () => this.handleSidebarRedirection(routes.booking),
                isActive: this.isActiveRoute(routes.booking),
            },
            {
                type: "item",
                primaryText: "Vendor",
                isAdmin: this.props.profile.is_admin,
                icon: (
                    <Avatar
                    sx={{
                        width: 22,
                        height: 22,
                    }}
                    src="/images/BookingIcon.svg"
                    variant="body1"
                    title="F"
                >
                </Avatar>
                ),
                onClick: () => this.handleSidebarRedirection(routes.vendor),
                isActive: this.isActiveRoute(routes.vendor),
            },
            {
                type: "item",
                primaryText: "Help and Support",
                icon: (
                    <Avatar
                    sx={{
                        width: 22,
                        height: 22,
                    }}
                    src="/images/HelpIcon.svg"
                    variant="body1"
                    title="F"
                >
                </Avatar>
                ),
                onClick: () => this.handleSidebarRedirection(routes.helpsupport),
                isActive: this.isActiveRoute(routes.helpsupport),
            },
            {
                type: "logout",
                primaryText: "Logout",
               
                avatar: (
                    <Avatar
                        sx={{
                            width: 22,
                            height: 22,
                            padding: "10px"
                        }}
                        src="/images/LogoutIcon.png"
                        variant="body1"
                        title="F"
                    >
                    </Avatar>
                ),
                onclick: () => this.handleLogoutClick(),
            },
          

        ];


        return (
            <Stack direction="row" sx={{ minHeight: "100vh" }}>

<Snackbar
          open={this.state.logoutsuccess}
          autoHideDuration={1000}
          onClose={() => this.setState({ logoutsuccess: false })}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert severity="success">Logout Successfully</Alert>
        </Snackbar>

                <Sidebar
                    onLogoutClick={this.handleLogoutClick}
                    menuConfig={ this.props.profile.is_admin ? sidebarMenuConfigadmin : sidebarMenuConfig}
                    isDrawerExpanded={isDrawerExpanded}
                    onDrawerToggle={this.handleDrawerToggle}
                />

                <Stack
                    sx={{
                        flex: 1,
                        backgroundColor: {
                            xs: "background.paper",
                            md: "grey.100",
                        },
                        width: "100%",
                    }}>
                    <Header
                        Profile={this.props.profile.thumbnail}
                        onDrawerToggle={this.handleDrawerToggle}
                        isDrawerExpanded={isDrawerExpanded}
                        notifications={notifications}
                        onNotificationOpen={this.handleNotificationOpen}
                        onNotificationClose={this.handleNotificationClose}
                        isNotificationDropdownOpen={isNotificationDropdownOpen}
                        notificationAnchorEl={notificationAnchorEl}
                    />
                    <Stack
                     
                        sx={{
                            flex: 1,
                            maxWidth: "100%",
                            px: { xs: 2, md: 3 },
                            py: 0,
                            pb: { xs: 2, md: 3 },
                        }}>
                        {children}
                       
                    </Stack>
                </Stack>
            </Stack>
        );
    }
}

export default LayoutContainer;
