import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceHome = (props) => {
    const { image, name, description, id } = props.service;
    return (
        <div  id="service" className="col-sm-12 col-md-6 col-lg-4 mx-1 my-2 border border-primary rounded doctors p-0 mx-auto" style={{width: "22rem"}}>
            <div class="card" className='mx-auto'>
                <img src={image} className="card-img-top img-fluid rounded" alt="Doctor photo"/>
            </div>
            <div class="card-body doctors-contents">
                <h5 className="card-title">{name}</h5>
                <p className="card-text" style={{textAlign: "justify"}}>{description}</p>
                <Link to={`/services/${id}`}>
                    <Button>See More</Button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceHome;