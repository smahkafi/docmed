import React from 'react';
import { Container } from 'react-bootstrap';
import doctor1 from '../../imges/Doctors/doctor-1.webp'
import doctor2 from '../../imges/Doctors/doctor-2.webp'
import doctor3 from '../../imges/Doctors/doctor-3.webp'
import doctor4 from '../../imges/Doctors/doctor-4.webp'
import doctor5 from '../../imges/Doctors/doctor-5.webp'
import doctor6 from '../../imges/Doctors/doctor-6.webp'
import doctor7 from '../../imges/Doctors/doctor-7.webp'
import doctor8 from '../../imges/Doctors/doctor-8.webp'
import './Doctors.css'

const Doctors = () => {
    return (
        <Container>
            <h2> Doctors List</h2>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4 m-2 border doctors p-0" style={{width: "18rem"}}>
                    <div class="card" className='mx-auto'>
                        <img src={doctor2} class="card-img-top img-fluid" alt="..."/>
                    </div>
                    <div class="card-body doctors-contents">
                        <h5 class="card-title">Mirazul Alom</h5>
                        <p class="card-text">Neurologist</p>
                    </div>
                </div>
                
                <div className="col-sm-12 col-md-6 col-lg-4 border m-2 doctors p-0" style={{width: "18rem"}}>
                    <div class="card" className='mx-auto'>
                        <img src={doctor3} class="card-img-top img-fluid" alt="..."/>
                    </div>
                    <div class="card-body doctors-contents">
                        <h5 class="card-title">Mirazul Alom</h5>
                        <p class="card-text">Neurologist</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 border m-2 doctors p-0" style={{width: "18rem"}}>
                    <div class="card" className='mx-auto'>
                        <img src={doctor4} class="card-img-top img-fluid" alt="..."/>
                    </div>
                    <div class="card-body doctors-contents">
                        <h5 class="card-title">Mirazul Alom</h5>
                        <p class="card-text">Neurologist</p>
                    </div>
                </div>
                
                <div className="col-sm-12 col-md-6 col-lg-4 border m-2 doctors p-0" style={{width: "18rem"}}>
                    <div class="card" className='mx-auto'>
                        <img src={doctor5} class="card-img-top img-fluid" alt="..."/>
                    </div>
                    <div class="card-body doctors-contents">
                        <h5 class="card-title">Mirazul Alom</h5>
                        <p class="card-text">Neurologist</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 border m-2 doctors p-0" style={{width: "18rem"}}>
                    <div class="card" className='mx-auto'>
                        <img src={doctor6} class="card-img-top img-fluid" alt="..."/>
                    </div>
                    <div class="card-body doctors-contents">
                        <h5 class="card-title">Mirazul Alom</h5>
                        <p class="card-text">Neurologist</p>
                    </div>
                </div>
                
                <div className="col-sm-12 col-md-6 col-lg-4 border m-2 doctors p-0" style={{width: "18rem"}}>
                    <div class="card" className='mx-auto'>
                        <img src={doctor7} class="card-img-top img-fluid" alt="..."/>
                    </div>
                    <div class="card-body doctors-contents">
                        <h5 class="card-title">Mirazul Alom</h5>
                        <p class="card-text">Neurologist</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 border m-2 doctors p-0" style={{width: "18rem"}}>
                    <div class="card" className='mx-auto'>
                        <img src={doctor8} class="card-img-top img-fluid" alt="..."/>
                    </div>
                    <div class="card-body doctors-contents">
                        <h5 class="card-title">Mirazul Alom</h5>
                        <p class="card-text">Neurologist</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 border m-2 doctors p-0" style={{width: "18rem"}}>
                    <div class="card" className='mx-auto'>
                        <img src={doctor1} class="card-img-top img-fluid" alt="..."/>
                    </div>
                    <div class="card-body doctors-contents">
                        <h5 class="card-title">Mirazul Alom</h5>
                        <p class="card-text">Neurologist</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Doctors;