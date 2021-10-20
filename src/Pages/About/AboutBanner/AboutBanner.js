import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutBanner.css'
import img from '../../../imges/About/bradcam.png.webp'

const AboutBanner = () => {
    return (
        <div className="aboutbanner">
            <Container>
                <div className="mt-5 row d-flex align-items-center">
                    <div className="col-sm-12 col-md-6 col-lg-4 about-title about-title align-self-center">
                        <h1 className="">About Us</h1>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 justify-content-center align-items-center">
                        <img src={img} className="img-fluid" alt=""/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutBanner;