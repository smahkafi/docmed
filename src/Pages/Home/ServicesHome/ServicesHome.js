import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
// import useAuth from '../../../hooks/useAuth';
import ServiceHome from '../ServiceHome/ServiceHome';

const ServicesHome = () => {
    // const {services, setServices} = useAuth()
    const [services, setServices] = useState([])
    useEffect ( () =>{
        fetch("https://raw.githubusercontent.com/smahkafi/jsonfile/main/docmed.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    return (
        <div className="bg-light mt-5">
            <Container>
                <div className="mt-4 text-center">
                    <h2>Our Departments</h2>
                    <p>Esteem spirit temper too say adieus who direct esteem. <br/> It esteems luckily or picture placing drawing.</p>
                </div>
                <div className="row d-flex mt-5">
                    {
                        services?.map(service=> <ServiceHome key={service.id} service={service}></ServiceHome>)
                    }
                </div>
            </Container>
        </div>
    );
 };

export default ServicesHome;



// const [servicesHomes, setServicesHomes] = useState([])




// const [servicesHomes, setServicesHomes] = useState([])
