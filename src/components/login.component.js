import { React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { isUserLoggedIn, login } from '../actions/'

import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';

const Signin = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);

    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);

    const dispatch = useDispatch();

    const userLogin = (e) => {

        e.preventDefault();

        const user = {
            email, password
        }

        dispatch(login(user));
    }

    if(auth.authenticate){
        return <Redirect to={`/`} />
    }
  
       
    return (
        <div className="main-wrapper login-body">
            <div className="login-wrapper">
                <div className="container">
                    <div className="loginbox">
                        <div className="login-left">
                            {/* <h3 className="smartLogo">Login</h3> */}
                            <img src="./assets/images/login.svg" width="300px" height="300px" />
                        </div>
                        <div className="login-right">
                            <div className="login-right-wrap">
                                <h1>Login</h1>


                                <form onSubmit={userLogin}>

                                    <div className="form-group">
                                        <input className="form-control"
                                            label="Email"
                                            placeholder="Email"
                                            value={email}
                                            type="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            required />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control"
                                            label="Password"
                                            placeholder="Password"
                                            value={password}
                                            type={isRevealPwd ? "text" : "password"}
                                            type="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />



                                    </div>
                                    <label>
                                        <input type="checkbox" />Show password
                                  
                                    </label>


                                    <center>
                                        <div className="form-group mb-0">
                                            {/* <button className="btn btn-lg btn-common animated fadeInUp">Login</button> */}
                                            <AwesomeButton type="twitter">Sign In</AwesomeButton>
                                        </div>
                                    </center>
                                </form>


                                <div className="login-or">
                                    <span className="or-line"></span>
                                    <span className="span-or">or</span>
                                </div>


                                <div className="social-login">
                                    <span>Login with</span>
                                    <Link to="/" className="socialmedia"><i className="fab fa-facebook-f"></i></Link>
                                    <Link to="/" className="socialmedia"><i className="fab fa-google-plus-g"></i></Link>
                                </div>


                                <div className="text-center dont-have">Don't have an account? <Link to="/">
                                    Create Account</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Signin;