import {
  BackendError,
  NotFound,
} from "./Pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AppProvider from "./AppProvider/AppProvider";
import Dashboard from "./Containers/Dashboard";
import React from "react";
import SignIn from "./Auth/signin";
import SignUp from "./Auth/signup";
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
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  </AppProvider>,
  document.getElementById("root")
);

