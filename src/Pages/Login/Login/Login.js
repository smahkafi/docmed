import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../hooks/useAuth';
import img from '../../../imges/login/login.jpg'

const Login = () => {
    const { handleResetPassword, handlePasswordChange, handleLogin, signInUsingGoogle, user, handleEmailChange, error,  } = useAuth();
    return (
        <div className="container my-5 pb-3">
            <div className="row">

            <div className="col-sm-12 col-md-6">
                <h2 className="text-warning my-5 text-center">Sign In</h2>
                <div onSubmit={handleLogin} className="text-center">
                    <p className="text-danger">{error}</p>

                    <input className="input-field border-bottom border-0 w-50" type="text" name="first name" placeholder="First name" />
                        <br /> <br />
                        <input className="input-field border-bottom border-0 w-50" type="text" name="last name" placeholder="Last name" />
                        <br /> <br />
                        <input className="input-field border-bottom border-0 w-50" type="phone" name="phone" placeholder="Phone +880" />
                        <br /> <br/>

                        <input onBlur={handlePasswordChange} className="input-field border-bottom border-0 w-50" type="password" name="password" placeholder="Password" required />
                        <br /> <br />
                        <input
                            className="mt-5 w-30 btn btn-danger m-auto"
                            type="submit"
                            value="Login" />
                        <br /> <br />

                        <button onClick={signInUsingGoogle} type="submit" className="btn btn-primary me-2"> <FontAwesomeIcon icon={faGoogle} /> Google Sign In</button>

                        <button onClick={handleResetPassword} type="submit" className="btn btn-primary"> <FontAwesomeIcon icon={faKey} /> Reset Password</button>

                    </div>
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