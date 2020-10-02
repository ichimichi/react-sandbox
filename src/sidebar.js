import React from 'react';
import avatar from './assets/avatar.jpg'
import {
    Link
} from "react-router-dom";

function SideBar(props) {
    return (
        <div className="sidebar" data-color="rose" data-background-color="black">
            <div className="logo">
                <Link to="/" className="simple-text logo-mini">
                    NI
                </Link>
                <Link to="/" className="simple-text logo-normal">
                    Nice Infotech
                </Link>
            </div>
            <div className="sidebar-wrapper">
                <div className="user">
                    <div className="photo">
                        <img src={avatar}/>
                    </div>
                    <div className="user-info">
                        <a data-toggle="collapse" href="#collapseExample" className="username">
                            <span>
                                Account
                                <b className="caret"></b>
                            </span>
                        </a>
                        <div className="collapse" id="collapseExample">
                            <ul className="nav">
                                {
                                    !(props.isLoggedIn) &&
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/signin">
                                                <span className="sidebar-mini"> SI </span>
                                                <span className="sidebar-normal"> Sign In </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/signup">
                                                <span className="sidebar-mini"> SU </span>
                                                <span className="sidebar-normal"> Sign Up </span>
                                            </Link>
                                        </li>
                                    </>
                                }
                                {
                                    (props.isLoggedIn) &&
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/profile">
                                                <span className="sidebar-mini"> MP </span>
                                                <span className="sidebar-normal"> My Profile </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/signin" onClick={props.handleLogout}>
                                                <span className="sidebar-mini"> LG </span>
                                                <span className="sidebar-normal"> Log Out </span>
                                            </Link>
                                        </li>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <ul className="nav">
                    <li className="nav-item active ">
                        <Link className="nav-link" to={'/dashboard'}>
                            <i className="material-icons">dashboard</i>
                            <p> Dashboard </p>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default SideBar;
