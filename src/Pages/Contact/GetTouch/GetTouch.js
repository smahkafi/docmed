import React from 'react';

const GetTouch = () => {
    return (
        <div>
            <h2>Get in Touch</h2>
            <div className="row">
                <div className="col-sm-12 col-md-7 col-lg-7">
                    <input type="text-area" placeholder="Enter Message" /><br />
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" /><br />
                    <input type="text" placeholder="Your Subject" />
                    <input type="submit" value="Send" />
                </div>
                <div className="col-sm-12 col-md-2 col-lg-2"></div>
                <div className="col-sm-12 col-md-3 col-lg-3">
                    <div>
                        <h4>Buttonwood, California</h4>
                        <p>Rosemead, CA 91770</p>
                    </div>
                    <div>
                        <h4>+1 253 565 2365</h4>
                        <p>Mon to Fri 9am to 6pm</p>
                    </div>
                    <div>
                        <h4>support@colorlib.com</h4>
                        <p>Send us your query anytime!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetTouch;