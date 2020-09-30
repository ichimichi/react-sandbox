import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
    <>
        <div className="sidebar" data-color="rose" data-background-color="black"
             data-image="../assets/img/sidebar-1.jpg">
            <div className="logo">
                <a href="http://www.creative-tim.com" className="simple-text logo-mini">
                    NI
                </a>
                <a href="http://www.creative-tim.com" className="simple-text logo-normal">
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
                        <a className="nav-link" href="../examples/dashboard.html">
                            <i className="material-icons">dashboard</i>
                            <p> Dashboard </p>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
        <div className="main-panel">
            <div className="content">
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
                                <form className="form" method="" action="">
                                    <div className="card card-login card-hidden">
                                        <div className="card-header card-header-rose text-center">
                                            <h4 className="card-title">Sign In</h4>
                                        </div>
                                        <div className="card-body ">
                                            <p className="card-description text-center">Enter details below to sign in to your account</p>
                                            <span className="bmd-form-group">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="material-icons">face</i>
                                                        </span>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="User Name..."/>
                                                </div>
                                            </span>
                                            <span className="bmd-form-group">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="material-icons">lock_outline</i>
                                                        </span>
                                                    </div>
                                                    <input type="password" className="form-control" placeholder="Password..."/>
                                                </div>
                                            </span>
                                        </div>
                                        <div className="card-footer justify-content-center">
                                            <a href="#pablo" className="btn btn-rose btn-link btn-lg">Sign In</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>,
    document.getElementById('root')
);
