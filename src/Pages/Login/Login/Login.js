import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import loginimg from '../../../imges/login/login.jpg';


const Login = () => {
    const { allContext } = useAuth();
    const { setUser, signInUsingGoogle, handleLogin, getEmail, getPassword, setError, } = allContext;

    const location = useLocation();
    const history = useHistory();
    const redirect = location?.state?.from || '/home';


    const handleGoogleSignIn = (e) => {
        e.preventDefault()
        signInUsingGoogle()
            .then(result => {
                console.log(result);
                setUser(result.user)
                history.push(redirect)
            })
    }

    return (
        <div className="container my-5 pb-3">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="img">
                        <img className="img-fluid w-75" src={loginimg} alt="" />
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <h2 className="text-success text-center">Sign In</h2>
                    <p className="text-center mb-5">
                        Are you New?
                        <NavLink className="text-decoration-none text-success" to="/signup">
                             <div className="btn btn-warning ms-2 mt-2">
                                Please Sign Up!
                             </div>
                        </NavLink>
                    </p>
                    
                    <p className="text-danger">{setError}</p>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin()
                            .then(result => {
                                const user = result.user
                                setUser(user);
                                setError('');
                                history.push(redirect)
                            })
                            .catch(error => {
                                setError(error.message)
                            })
                    }} className="text-center">
                        <FontAwesomeIcon icon={faEnvelope} />  <input onBlur={getEmail} className="border-bottom border-0 w-50" type="email" name="email" placeholder="Email" required />
                        <br /> <br />
                        <FontAwesomeIcon icon={faUnlock}/><input onBlur={getPassword} className="border-bottom border-0 w-50" type="password" name="password" placeholder="Password" required />
                        <br />
                        <div className="mt-5">
                            <input className="m-2 w-25 btn btn-danger align-self-start" type="submit" value="Sign In" /> <span className="text-secondary"> || </span>
                            <Button onClick={handleGoogleSignIn} type="submit" className="btn btn-primary  m-2"> <FontAwesomeIcon icon={faGoogle} /> Google Sign In</Button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;