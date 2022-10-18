import React from "react";
import LayoutContainer from "containers/Layout";
import { Redirect, Switch } from "react-router-dom";
import { PrivateRoute } from "helper/route";
//Pages
import Charging from "pages/ChargingTable";
import Dashboard from "pages/Dashboard";
import HelpSupport from "pages/HelpSupport";
import Booking from "pages/BookingTable";
import Customer from "pages/CustomerTable";
import CustomerDetail from "pages/CustomerDetail";
import AddStation from "pages/AddStation";
import EditStation from "pages/EditStation";
import MyProfile from "pages/MyProfile";
import Notification from "pages/Notification";
import StationDetail from "pages/StationDetail";
import Vendor from "pages/Vendor";


const PartnerNavigator = (props) => {
  
  const { match } = props;
  const auth = { isAuthenticated: true };
  return (
    <>
      <Switch>
        <Redirect exact from={match.path} to={`${match.path}dashboard`} />
        <LayoutContainer {...props}>
        
          <Switch>
            <PrivateRoute
              exact
              auth={auth}
              path={`${match.path}dashboard`}
              component={Dashboard}
            />
            <PrivateRoute
              exact
              auth={auth}
              path={`${match.path}charging`}
              component={Charging}
            />
            <PrivateRoute
              exact
              auth={auth}
              path={`${match.path}helpsupport`}
              component={HelpSupport}
            />

            <PrivateRoute
              exact
              auth={auth}
              path={`${match.path}booking`}
              component={Booking}
            />

            <PrivateRoute
              exact
              auth={auth}
              path={`${match.path}customer`}
              component={Customer}
            />
            <PrivateRoute
              exact
              auth={auth}
              path={`${match.path}vendor`}
              component={Vendor}
            />

            <PrivateRoute
              exact
              auth={auth}
              path={`${match.path}customer/details/:id`}
              component={CustomerDetail}
              render={(props) => {
                const customerId = this.props.computedMatch.params.id;
          
                return <CustomerDetail {...props} customerId={customerId} />;
              }
              }

            />


<PrivateRoute
              exact
              auth={auth}
              path={`${match.path}station/details/:id`}
              component={StationDetail}
              render={(props) => {
                const stationId = this.props.computedMatch.params.id;

                return <StationDetail {...props} stationId={stationId} />;
              }
              }
            />

            <PrivateRoute
              exact
              auth={auth}
              path={`${match.path}add/station`}
              component={AddStation}
            />

<PrivateRoute
              exact
              auth={auth}
              path={`${match.path}edit/station/:id`}
              component={EditStation}
              render={(props) => {
                const stationId = this.props.computedMatch.params.id;
                return <EditStation {...props} stationId={stationId} />;
              }
              }
            />

<PrivateRoute
              exact
              auth={auth}
              path={`${match.path}profile`}
              component={MyProfile}
            />

            
<PrivateRoute
              exact
              auth={auth}
              path={`${match.path}notifications`}
              component={Notification}
            />




          </Switch>
        </LayoutContainer>
      </Switch>
    </>
  );
};

export default PartnerNavigator;
