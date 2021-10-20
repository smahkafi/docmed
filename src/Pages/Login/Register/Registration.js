import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import signup from '../../../imges/login/signup.jpg';

 
 
const Registration = () => {
    const { allContext } = useAuth();
    const { newRegister, getName, getEmail, getPassword } = allContext;
 
 
    return (
        <div className="container my-5 pb-3">
            <div className="row ">
                
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h2 className="text-primary text-center">Sign Up</h2>
 
                    <p className="text-center mb-5">
                    Have any account?
                    <NavLink className="text-decoration-none text-success" to="/login">
                             <div className="btn btn-info ms-2">
                             Please Sign In!
                             </div>
                        </NavLink>
                    </p>
 
 
                    <form onSubmit={newRegister} className="text-center">
 
                        <FontAwesomeIcon icon={faUser} /> <input onBlur={getName} className="input-field border-bottom border-0 w-50" type="text" name="name" placeholder="Name" required />
                        <br /> <br />
                        <FontAwesomeIcon icon={faEnvelope} /> <input onBlur={getEmail} className="input-field border-bottom border-0 w-50" type="email" name="email" placeholder="Email" required />
                        <br /> <br />
                        <FontAwesomeIcon icon={faLock} /> <input onBlur={getPassword} className="input-field border-bottom border-0 w-50" type="password" name="password" placeholder="Password" required />
                        <br /> <br />
                        <input
                            className="mt-5 w-30 btn btn-warning text-left"
                            type="submit"
                            value="Sign Up" />
 
                    </form>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="img">
                        <img className="img-fluid w-75" src={signup} alt="" />
                    </div>
                </div>
 
            </div>
        </div>
    );
};
 
export default Registration;
 



























// import React from 'react';
// import useAuth from '../../../hooks/useAuth';
// import signup from '../../../imges/login/signup.jpg'

// const Registration = () => {
//     const { handleRegistration, handleEmailChange, handlePasswordChange, getName } = useAuth();
//     return (
//         <div className="container my-5 pb-3">
//             <div className="row ">
//                 <div className="col-md-6 col-sm-12">
//                     <div className="img">
//                         <img className="img-fluid w-75" src={signup} alt="" />
//                     </div>
//                 </div>
//                 <div className="col-sm-12 col-md-6">
//                     <h2 className="text-warning my-5 text-center">Sign Up</h2>

//                     <div onSubmit={handleRegistration} className="text-center"></div>

//                         <input onBlur={getName} className="input-field border-bottom border-0 w-50" type="text" name="first name" placeholder="First name" />
//                         <br /> <br />

//                         <input onBlur={handleEmailChange} className="input-field border-bottom border-0 w-50 " type="email" name="email" placeholder="Type Unique Your Email" required />
//                         <br /> <br />
//                         <input onBlur={handlePasswordChange} className="input-field border-bottom border-0 w-50" type="password" name="password" placeholder="Type A New Password" required /><br/>

//                         <input className="mt-5 w-50 btn btn-primary m-auto mb-5" type="submit" value="Sign Up"/>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Registration;