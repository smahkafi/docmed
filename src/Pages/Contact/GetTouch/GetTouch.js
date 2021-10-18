import React from 'react';

const GetTouch = () => {
    return (
        <div>
            <h2>Get in Touch</h2>
            <div className="row">
                <div className="col-sm-12 col-md-7 col-lg-7">
                    <input type="text-area" placeholder="Enter Message" />
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                </div>
                <div className="col-sm-12 col-md-2 col-lg-2"></div>
                <div className="col-sm-12 col-md-3 col-lg-3"></div>
            </div>
        </div>
    );
};

export default GetTouch;