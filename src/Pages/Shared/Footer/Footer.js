import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="bg-secondary">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4 justify-content-center">
                        <div>
                            <img src={`https://preview.colorlib.com/theme/docmed/img/xfooter_logo.png.pagespeed.ic.xG_fu5FTHW.webp`} alt="icon" />
                            <p className="text-light">Firmament morning sixth subdue darkness creeping gathered divide.</p>
                        </div>
                        <div>
                            <Link to="/home" className="ps-2">
                                <FontAwesomeIcon className="icon fs-3 text-info" icon={faTwitterSquare} /></Link>
                            <Link to="/home" className="ps-2">
                                <FontAwesomeIcon className="icon fs-3 text-primary" icon={faFacebookSquare} /></Link>
                            <Link to="/home" className="ps-2">
                                <FontAwesomeIcon className="icon fs-3 text-danger" icon={faYoutubeSquare} />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 align-self-center">
                        <h6 className="text-light ">Copyright &copy; 2021 All rights reserved</h6>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 justify-content-center text-light">
                        <h2>Address</h2>
                        <p>200, D-block, Green lane USA</p>
                        <p>+10 367 467 8934</p>
                        <p>docmed@contact.com</p>
                    </div>
                </div>
            </div>
            <div className="bg-light pt-2">
            </div>


            <div>

            </div>
        </div>


    );
};

export default Footer;