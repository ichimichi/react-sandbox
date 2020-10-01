import React from 'react';
import Axios from 'axios';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSignIn = this.handleSignIn.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSignIn(){
        const body = {
            username : this.state.username,
            password : this.state.password
        }
        Axios.post('http://localhost:8080/login', {data: body}).then((response)=>{console.log(response)});
    }

    render() {
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
                                            <p className="card-description text-center">Enter details below to sign in
                                                to your account</p>
                                            <span className="bmd-form-group">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="material-icons">face</i>
                                                        </span>
                                                    </div>
                                                    <input type="text" className="form-control" name={"username"} value={this.state.username} onChange={this.handleChange}
                                                           placeholder="User Name..."/>
                                                </div>
                                            </span>
                                            <span className="bmd-form-group">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="material-icons">lock_outline</i>
                                                        </span>
                                                    </div>
                                                    <input type="password" className="form-control" name={"password"} value={this.state.password} onChange={this.handleChange}
                                                           placeholder="Password..."/>
                                                </div>
                                            </span>
                                        </div>
                                        <div className="card-footer justify-content-center">
                                            <a href="#pablo" className="btn btn-rose btn-link btn-lg" onClick={this.handleSignIn}>Sign In</a>
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
}

export default SignIn;
