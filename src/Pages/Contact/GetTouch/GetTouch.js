import React from 'react';
import { Button } from 'react-bootstrap';

const GetTouch = () => {
    return (
        <div>
            <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-8">
                <h2>Get in Touch</h2>
                <textarea class=" w-100" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder="Enter Message"></textarea>
                    <br />
                    <input class="form-control valid" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name"/>
                    <input class="form-control valid" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email"/>
                    <br />
                    <input class="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject"/>
                    <Button type="submit" class="button button-contactForm boxed-btn">Send</Button>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
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