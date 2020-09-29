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
const Game = lazy(() => import('./routes/game'));

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
                            <Link to="/game">Game</Link>
                        </li>
                    </ul>
                </nav>

                <div className={"container"}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/about" component={"About"}>
                                <About />
                            </Route>
                            <Route path="/game" component={"Game"}>
                                <Game />
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