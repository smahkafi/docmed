import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutBanner.css'

const AboutBanner = () => {
    return (
        <div className="aboutbanner">
            <Container>
                <div className="mt-5 d-flex align-items-center">
                    <div className="col-sm-12 about-title col-md-6 col-lg-4 about-title align-self-center">
                        <h1 className="">About Us</h1>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 justify-content-center align-items-center">
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutBanner;