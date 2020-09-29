import React, { Suspense, lazy } from "react";
import ReactDOM from 'react-dom';
import './index.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Home = lazy(() => import('./routes/home'));
const About = lazy(() => import('./routes/about'));
const User = lazy(() => import('./routes/user'));

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <div className={"container"}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/about" component={"About"}>
                                <About />
                            </Route>
                            <Route path="/users" component={"User"}>
                                <User />
                            </Route>
                            <Route path="/" component={"Home"}>
                                <Home />
                            </Route>
                        </Switch>
                    </Suspense>
                </div>
            </div>
        </Router>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)