import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="bg-secondary">
            <Container className="mt-5">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4 justify-content-center border">
                        <div>
                            <img src={`https://preview.colorlib.com/theme/docmed/img/xfooter_logo.png.pagespeed.ic.xG_fu5FTHW.webp`} alt="icon"/>
                            <span>Docmed</span>
                        </div>
                        <div>
                            <p>Firmament morning sixth subdue darkness creeping gathered divide.</p>
                            <Link to="https://www.facebook.com"><FontAwesomeIcon className="icon" icon={faTwitterSquare}/></Link>
                            <FontAwesomeIcon className="icon" icon={faFacebookSquare}/>
                            <FontAwesomeIcon className="icon" icon={faYoutubeSquare}/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 justify-content-center border">
                        <h2>Usefull Links</h2>
                        <p><Link to="/home">Home</Link></p>
                        <p><Link to="/about">About Us</Link></p>
                        <p><Link to="/services">Services</Link></p>
                        <p><Link to="/contact">Contact</Link></p>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 justify-content-center border">
                        <h2>Address</h2>
                        <p>200, D-block, Green lane USA</p>
                        <p>+10 367 467 8934</p>
                        <p>docmed@contact.com</p>
                    </div>
                </div>
            </Container>
            <div className="bg-light py-5">
                <h6 className="text-warning">Copyright &copy; 2021 All rights reserved</h6>
            </div>
        </div>
    );
};

export default Footer;