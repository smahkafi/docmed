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
    const itemMatched = services?.find(service => service?.id === Number(servicesId))
    console.log(itemMatched)
    return (
        <div className="col-sm-12 col-md-12 col-lg-12 mx-auto my-5 border doctors p-0 rounded" style={{width: "16rem"}}>
            <div class="card" className='mx-auto'>
                <img src={itemMatched?.image} className="card-img-top img-fluid rounded" alt="Doctor photo"/>
            </div>
            <div class="card-body doctors-contents">
                <h4 className="card-title">{itemMatched?.name}</h4>
                <p className="card-text">{itemMatched?.description}</p>
                <div className="btn btn-primary">
                    Book Now
                </div>
            </div>
        </div>
    );
};

export default Services;


            //     <div id="service" className="col-sm-12 col-md-6 col-lg-4 justify-content-center border border-success mx-auto mt-5">
            //     <div className="card mx-auto my-3" style={{width: "18rem"}}>
            //         <img src={itemMatched?.image} className="card-img-top img-fluid rounded" alt="Doctor photo"/>
            //     </div>
            //     <div className="card-body">
            //         <h5 className="card-title">{itemMatched?.name}</h5>
            //         <p className="card-text">{itemMatched?.description}</p>
            //         <div className="btn btn-primary">
            //             Book Now
            //         </div>
            //     </div>
            // </div>