import {
  BackendError,
  Lockscreen,
  NotFound,
  PasswordReset,
  Signup
} from "./primer/pages";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AppProvider from "./primer/components/AppProvider/AppProvider";
import Dashboard from "./primer/containers/Dashboard";
import React from "react";
import SignIn from "./auth/signin";
import SignUp from "./auth/signup";
import { render } from "react-dom";

render(
  <AppProvider>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/404" component={NotFound} />
        <Route exact path="/500" component={BackendError} />
        {/*<Route exact path="/Lockscreen" component={Lockscreen} />*/}
        {/*<Route exact path="/forgot" component={PasswordReset} />*/}
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        {/*<Route path="/" component={Dashboard} />*/}
        <Redirect to={'/signin'}/>
      </Switch>
    </BrowserRouter>
  </AppProvider>,
  document.getElementById("root")
);

