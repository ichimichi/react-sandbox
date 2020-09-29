import React, {Suspense, lazy} from "react";
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

function NavBar(props) {
    const routePaths = props.names.map((name, i) => {
        return (
            <li key={i}>
                <Link to={props.paths[i]}>{name}</Link>
            </li>
        );
    });

    return (
        <nav>
            <ul>
                {routePaths}
            </ul>
        </nav>
    );
}

function Container(props) {
    let routes = [];

    for(let i = 0; i < props.components.length; i++){
        routes.push(
            <Route key={i} path={props.paths[i]} component={props.names[i]}>
                {props.components[i]}
            </Route>
        );
    }


    return (
        <div className={"container"}>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    {routes}
                </Switch>
            </Suspense>
        </div>
    );

}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            routeName : ['Home', 'About', 'Game'],
            routePath :['/', '/about', '/game'],
            routeComponent :[<Home/>, <About/>, <Game/>]
        }
    }
    render() {
        return (
            <Router>
                <div>
                    <NavBar names={this.state.routeName} paths={this.state.routePath}/>
                    <Container components={this.state.routeComponent} names={this.state.routeName} paths={this.state.routePath}/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)