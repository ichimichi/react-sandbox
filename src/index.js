import {
  BackendError,
  NotFound,
} from "./Pages";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AppProvider from "./AppProvider/AppProvider";
import Dashboard from "./Containers/Dashboard";
import React from "react";
import SignIn from "./Auth/signin";
import SignUp from "./Auth/signup";
import { render } from "react-dom";
import { useAppState } from './AppProvider/AppProvider';


const AuthorizedRoute = ({ component, ...rest }) => {
  const { logged } = useAppState()

  if (logged === null) {
    return <div>Loading...</div>
  } else if (logged === false) {
    return <Redirect to="/signin" push />
  }

  return <Route component={component} {...rest} />
}

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
        <AuthorizedRoute path="/" component={Dashboard} />
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  </AppProvider>,
  document.getElementById("root")
);

