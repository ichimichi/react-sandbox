import React from 'react';
import {Link} from 'react-router-dom'

function Prompt(props) {
    return (
        <div className="content">
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
                                <div className="card card-login card-hidden">
                                    <div className="card-header card-header-rose text-center">
                                        <h4 className="card-title">Wait !</h4>
                                    </div>
                                    <div className="card-body ">
                                        <p className="card-description text-center">You need to sign in to see the content</p>
                                    </div>
                                    <div className="card-footer justify-content-center">
                                        <Link to={"/signin"} className="btn btn-rose btn-link btn-lg">Sign In</Link>
                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Prompt;
