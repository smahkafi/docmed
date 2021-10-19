import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Services = () => {
    const { servicesId } = useParams();
    const [services, setServices] = useState([]);
    useEffect ( () =>{
        fetch('https://raw.githubusercontent.com/smahkafi/jsonfile/main/docmed.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]) 
    const itemMatched = services?.find(service => service?.id === servicesId)
    console.log(itemMatched)
    return (
            <div className="col-sm-12 col-md-6 col-lg-4 justify-content-center border border-success">
                <div className="card mx-auto my-3" style={{width: "18rem"}}>
                    <img src={itemMatched?.image} className="card-img-top img-fluid rounded" alt="Doctor photo"/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{itemMatched?.name}</h5>
                    <p className="card-text">{itemMatched?.description}</p>
                    <Button>Enroll</Button>
                </div>
            </div>
    );
};

export default Services;