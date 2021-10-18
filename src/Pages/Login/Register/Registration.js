import React from 'react';
import useAuth from '../../../hooks/useAuth';
import signup from '../../../imges/login/signup.jpg'

const Registration = () => {
    const { handleRegistration, handleEmailChange, handlePasswordChange } = useAuth();
    return (
        <div className="container my-5 pb-3">
            <div className="row ">
                <div className="col-md-6 col-sm-12">
                    <div className="img">
                        <img className="img-fluid w-75" src={signup} alt="" />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <h2 className="text-warning my-5 text-center">Sign Up</h2>

                    <div onSubmit={handleRegistration} className="text-center"></div>

                    <input onBlur={handleEmailChange} className="input-field border-bottom border-0 w-50 " type="email" name="email" placeholder="Type Your Email" required />
                        <br /> <br />
                        <input onBlur={handlePasswordChange} className="input-field border-bottom border-0 w-50" type="password" name="password" placeholder="Type A New Password" required /><br/>
                        <input
                            className="mt-5 w-50 btn btn-primary m-auto mb-5"
                            type="submit"
                            value="Sign Up"/>
                </div>
            </div>
        </div>
    );
};

export default Registration;