import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

                        <FontAwesomeIcon icon={faEnvelope} />  <input onBlur={getEmail} className="input-field border-bottom border-0 w-50" type="email" name="email" placeholder="Email" required />
                        <br /> <br />
                        <FontAwesomeIcon icon={faUnlock} />   <input onBlur={getPassword} className="input-field border-bottom border-0 w-50" type="password" name="password" placeholder="Password" required />
                        <br /> <br />
                        <input
                            className="mt-5 w-22 btn btn-danger align-self-start"
                            type="submit"
                            value="Sign In" />
                        <br /> <br />

                        <p>Or---------</p>
                        <button onClick={handleGoogleSignIn} type="submit" className="btn btn-primary me-2"> <FontAwesomeIcon icon={faGoogle} /> Google Sign In</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
























// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import { faKey } from '@fortawesome/free-solid-svg-icons';
// import img from '../../../imges/login/login.jpg'
// import { useLocation, useHistory } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';

// const Login = () => {
//     const { allContext} = useAuth()
//     const {setUser, handlePasswordChange, handleLogin, signInUsingGoogle, handleEmailChange, error } = allContext;
//     const location = useLocation();
//     const history = useHistory();
//     const redirect_url = location.state?.from || '/home';

//     const handleGoogleSignIn = (e) => {
//         e.preventDefault()
//         signInUsingGoogle()
//             .then(result => {
//                setUser(result.user);
//                 history.push(redirect_url)
//             })
//     }
//     return (

//         <div className="container my-5 pb-3">
//             <div className="row">

//             <div className="col-sm-12 col-md-6">
//                 <h2 className="text-warning my-5 text-center">Sign In</h2>

//                 <form onSubmit={handleLogin} className="text-center">
//                     <p className="text-danger">{error}</p>

//                     <input onBlur={handleEmailChange} className="input-field border-bottom border-0 w-50 " type="email" name="email" placeholder="Type Unique Your Email" required />
//                     <br /> <br />
//                     <input onBlur={handlePasswordChange} className="input-field border-bottom border-0 w-50" type="password" name="password" placeholder="Type A New Password" required /><br/>

//                     <input className="mt-5 w-30 btn btn-danger m-auto" type="submit" value="Login" />
//                         <br /> <br />
//                         <h5>or</h5>
//                         <button onClick={handleGoogleSignIn} type="submit" className="btn btn-primary me-2"> <FontAwesomeIcon icon={faGoogle} /> Google Sign In</button>

//                 </form>
//             </div>

//             <div className="col-md-6 col-sm-12">
//                 <div className="img">
//                     <img className="img-fluid w-75 rounded" src={img} alt="" />
//                 </div>
//             </div>


//             </div>
//         </div>
//     );
// };

// export default Login;