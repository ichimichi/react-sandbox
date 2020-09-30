import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SideBar from "./sidebar";


const SignIn = lazy(() => import('./auth/signin'));
const SignUp = lazy(() => import('./auth/signup'));

ReactDOM.render(
    <>
        <Router>
            <SideBar/>
            <div className="main-panel">
                <div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/signin" component={"SignIn"}>
                                <SignIn/>
                            </Route>
                            <Route path="/signup" component={"SignUp"}>
                                <SignUp/>
                            </Route>
                        </Switch>
                    </Suspense>
                </div>
            </div>
        </Router>
    </>,
    document.getElementById('root')
);
