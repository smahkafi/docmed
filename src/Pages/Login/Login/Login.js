import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import img from '../../../imges/login/login.jpg'
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { allContext} = useAuth()
    const {setUser, handlePasswordChange, handleLogin, signInUsingGoogle, handleEmailChange, error } = allContext;
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleGoogleSignIn = (e) => {
        e.preventDefault()
        signInUsingGoogle()
            .then(result => {
               setUser(result.user);
                history.push(redirect_url)
            })
    }
    return (

        <div className="container my-5 pb-3">
            <div className="row">

            <div className="col-sm-12 col-md-6">
                <h2 className="text-warning my-5 text-center">Sign In</h2>
                
                <form onSubmit={handleLogin} className="text-center">
                    <p className="text-danger">{error}</p>

                    <input onBlur={handleEmailChange} className="input-field border-bottom border-0 w-50 " type="email" name="email" placeholder="Type Unique Your Email" required />
                    <br /> <br />
                    <input onBlur={handlePasswordChange} className="input-field border-bottom border-0 w-50" type="password" name="password" placeholder="Type A New Password" required /><br/>

                    <input className="mt-5 w-30 btn btn-danger m-auto" type="submit" value="Login" />
                        <br /> <br />
                        <h5>or</h5>
                        <button onClick={handleGoogleSignIn} type="submit" className="btn btn-primary me-2"> <FontAwesomeIcon icon={faGoogle} /> Google Sign In</button>

                </form>
            </div>

            <div className="col-md-6 col-sm-12">
                <div className="img">
                    <img className="img-fluid w-75 rounded" src={img} alt="" />
                </div>
            </div>

            
            </div>
        </div>
    );
};

export default Login;