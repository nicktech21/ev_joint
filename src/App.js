import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,

} from "react-router-dom";
import { useSelector } from "react-redux";
import { PrivateRoute, PublicRoute } from "helper/route";
import PrimaryTheme from "theme/primaryTheme";
import PartnerNavigator from "navigator/PartnerNavigator";
import Login from "pages/Login";
import Registration from "pages/Register";
import ForgotPassword from "pages/ForgotPassword";
import SendOtp from "pages/SendOtp";
import ResetPassword from 'pages/ResetPassword';
import SetPassword from 'pages/SetPassword';
import LoginOtp from 'pages/LoginOtp'
import PageNotFound from "pages/PageNotFound404";

function App() {

  const auth = useSelector((state) => state.login);

  // const auth = { isAuthenticated: true };


  return (
    <PrimaryTheme>

      <Router>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <PublicRoute
            exact
            path="/login"
            component={Login}
            auth={auth}
            redirectTo="/dashboard"
          />
          <PublicRoute
            exact
            path="/Registration"
            component={Registration}
            auth={auth}
            redirectTo="/dashboard"
          />

          <PublicRoute
            exact
            path="/forgot-password"
            component={ForgotPassword}
            auth={auth}
            redirectTo="/dashboard"
          />
          <PublicRoute
            exact
            path="/send-otp"
            component={SendOtp}
            auth={auth}
            redirectTo="/dashboard"
          />


          <PublicRoute
            exact
            path="/reset-password"
            component={ResetPassword}
            auth={auth}
            redirectTo="/dashboard"
          />
          <PublicRoute
            exact
            path="/set-password"
            component={SetPassword}
            auth={auth}
            redirectTo="/dashboard"
          />
          <PublicRoute
            exact
            path="/verify-otp"
            component={LoginOtp}
            auth={auth}
            redirectTo="/dashboard"
          />

          <Route exact path="/not-found" component={PageNotFound} />
          <PrivateRoute auth={auth} component={PartnerNavigator} />
          <Redirect to={`not-found`} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>


    </PrimaryTheme>
    // <Login />
  );
}

export default App;
