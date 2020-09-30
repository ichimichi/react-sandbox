import React from 'react';

function SignIn(props) {
    return (
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
    );
}

export default SignIn;
