import React from 'react';
import axios from 'axios';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Dashboard</h1>
                                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                    <strong>Welcome Back!</strong> Haven't seen you in a while.
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
