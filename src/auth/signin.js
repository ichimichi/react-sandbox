import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {Link} from "react-router-dom";
import React, {useState, useHistory} from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";

import axios from 'axios'
import { useAppState } from '../AppProvider/AppProvider';

const useStyles = makeStyles(theme => ({
    card: {
        overflow: "visible"
    },
    session: {
        position: "relative",
        zIndex: 4000,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    background: {
        backgroundColor: theme.palette.primary.main
    },
    content: {
        padding: `40px ${theme.spacing(1)}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "1 0 auto",
        flexDirection: "column",
        minHeight: "100%",
        textAlign: "center"
    },
    wrapper: {
        flex: "none",
        maxWidth: "400px",
        width: "100%",
        margin: "0 auto"
    },
    fullWidth: {
        width: "100%"
    },
    logo: {
        display: "flex",
        flexDirection: "column"
    }
}));

const SignIn = (props) => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { setLogged } = useAppState()

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = 'http://localhost:8090/login'
        const body = {
            username: username,
            password: password
        }

        const options = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            data: body,
            url,
        };

        // console.log(props)
        axios(options).then((response) => {
            if (response.status === 200) {
                console.log(response);
                setLogged(true);
                props.history.push('/')

                // props.auth.setIsLoggedIn(true);
            }
        }).catch((error) => {
            console.log(error);
            setLogged(false);
            setMessage('Invalid username or password')

        });
    }

    return (
        <div className={classNames(classes.session, classes.background)}>
            <div className={classes.content}>
                <div className={classes.wrapper}>
                    <Card>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <div
                                    className={classNames(classes.logo, `text-xs-center pb-xs`)}
                                >
                                    <img
                                        src={`${process.env.PUBLIC_URL}/static/images/logo-dark.svg`}
                                        alt=""
                                        className="block"
                                    />
                                    <Typography variant="caption">
                                        Sign in with your account to continue.
                                    </Typography>
                                    <Typography variant="caption">
                                        {message}
                                    </Typography>
                                </div>
                                <TextField
                                    id="username"
                                    label="Username"
                                    className={classes.textField}
                                    fullWidth
                                    margin="normal"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <TextField
                                    id="password"
                                    label="Password"
                                    className={classes.textField}
                                    type="password"
                                    fullWidth
                                    margin="normal"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="checkedA"/>}
                                    label="Stayed logged in"
                                    className={classes.fullWidth}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    type="submit"
                                >
                                    Login
                                </Button>
                                <div className="pt-1 text-md-center">
                                    <Link to="/forgot">
                                        <Button>Forgot password?</Button>
                                    </Link>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link to="/signup">
                                        <Button>Create new account.</Button>
                                    </Link>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
