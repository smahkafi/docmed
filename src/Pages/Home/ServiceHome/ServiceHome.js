import React from 'react';
import { Button } from 'react-bootstrap';

const ServiceHome = (props) => {
    const {image, name, description} = props.service;
    return (
                    <div className="col-sm-12 col-md-6 col-lg-4 justify-content-center border border-success">
                        <div className="card mx-auto" style={{width: "18rem"}}>
                            <img src={image} className="card-img-top img-fluid" alt="..."/>
                        </div>
                        <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{description}</p>
                                <Button>See More</Button>
                        </div>
                    </div>
    );
};

export default ServiceHome;




