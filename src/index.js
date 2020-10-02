import React, {Suspense, lazy, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory
} from "react-router-dom";
import SideBar from "./sidebar";
import Dashboard from "./dashboard";
import Profile from "./profile";
import Prompt from "./prompt";
import Home from './home'

const SignIn = lazy(() => import('./auth/signin'));
const SignUp = lazy(() => import('./auth/signup'));

function App() {
    let history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSuccess = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };


    return (
        <>
            <Router>
                <SideBar isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
                <div className="main-panel">
                    <div>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/signin">
                                    <SignIn handleSuccess={handleSuccess}/>
                                </Route>
                                <Route path="/signup">
                                    <SignUp/>
                                </Route>
                                <Route path="/prompt">
                                    <Prompt/>
                                </Route>
                                <PrivateRoute path="/dashboard" isLoggedIn={isLoggedIn}>
                                    <Dashboard/>
                                </PrivateRoute>
                                <PrivateRoute path="/profile" isLoggedIn={isLoggedIn}>
                                    <Profile/>
                                </PrivateRoute>
                            </Switch>
                        </Suspense>
                    </div>
                </div>
            </Router>
        </>
    );

}

function PrivateRoute({children, isLoggedIn, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) =>
                isLoggedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/prompt",
                        }}
                    />
                )
            }
        />
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
