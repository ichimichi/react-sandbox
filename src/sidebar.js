import React from 'react';

function SideBar(props) {
    return (
        <div className="sidebar" data-color="rose" data-background-color="black"
             data-image="../assets/img/sidebar-1.jpg">
            <div className="logo">
                <a href="#" className="simple-text logo-mini">
                    NI
                </a>
                <a href="#" className="simple-text logo-normal">
                    Nice Infotech
                </a>
            </div>
            <div className="sidebar-wrapper">
                <div className="user">
                    <div className="photo">
                        <img src="../assets/img/faces/avatar.jpg"/>
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
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span className="sidebar-mini"> SI </span>
                                        <span className="sidebar-normal"> Sign In </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span className="sidebar-mini"> SU </span>
                                        <span className="sidebar-normal"> Sign Up </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ul className="nav">
                    <li className="nav-item active ">
                        <a className="nav-link" href="#">
                            <i className="material-icons">dashboard</i>
                            <p> Dashboard </p>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default SideBar;
