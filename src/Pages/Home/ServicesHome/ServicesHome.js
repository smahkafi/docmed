import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ServiceHome from '../ServiceHome/ServiceHome';

const ServicesHome = () => {
    const [servicesHomes, setServicesHomes] = useState([])

    useEffect(()=> {
        fetch('./docmed.json')
        .then(res => res.json())
        .then(data => setServicesHomes(data))
    },[])
    return (
        <div className="bg-light m-0">
            <Container>
                <div className="mt-5">
                    <h2>Our Departments</h2>
                    <p className="">Esteem spirit temper too say adieus who direct esteem.It esteems luckily or picture placing drawing.</p>
                </div>
                <div className="row d-flex ">
                    {
                        servicesHomes.map(service=> <ServiceHome key={service.id} service={service}></ServiceHome>)
                    }
                </div>
            </Container>
        </div>
    );
 };

export default ServicesHome;