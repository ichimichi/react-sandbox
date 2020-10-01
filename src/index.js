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

class App extends React.Component {
    render() {
        return (
            <>
                <Router>
                    <SideBar/>
                    <div className="main-panel">
                        <div>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Switch>
                                    <Route path="/signin">
                                        <SignIn/>
                                    </Route>
                                    <Route path="/signup">
                                        <SignUp/>
                                    </Route>
                                </Switch>
                            </Suspense>
                        </div>
                    </div>
                </Router>
            </>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
