import React from 'react';
import {Button, Container} from 'react-bootstrap';

const Emergency = () => {
    return (
        <div className="bg-info my-5 "> 
            <Container>
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4 px-3 py-5">
                            <h2 className="text-white">Hospitality</h2>
                            <p className="text-white">Clinical excellence must be the priority for any health care service provider.</p>
                            <Button className="rounded-2 bg-dark">Apply For A Bed</Button>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 bg-primary px-3 py-5">
                            <h2 className="text-white">Emergency Care</h2>
                            <p className="text-white">Clinical excellence must be the priority for any health care service provider.</p>
                            <Button className="rounded-2 bg-dark">+10 672 356 3567</Button>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 px-3 py-5">
                            <h2 className="text-white">Chamber Service</h2>
                            <p className="text-white">Clinical excellence must be the priority for any health care service provider.</p>
                            <Button className="rounded-2 bg-dark">Make An Appointment</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Emergency;