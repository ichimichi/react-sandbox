import React from 'react';
import {Link} from 'react-router-dom'

function Home(props) {
    return (
        <div className="content">
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
                            <div className="card">
                                <div className="card-header card-header-text card-header-primary">
                                    <div className="card-text">
                                        <h4 className="card-title">Here is the Text</h4>
                                    </div>
                                </div>
                                <div className="card-body">
                                    The place is close to Barceloneta Beach and bus stop just 2 min by walk and near
                                    to "Naviglio" where you can enjoy the main night life in Barcelona...

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
