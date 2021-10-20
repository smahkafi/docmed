import React from 'react';
import bg from '../../../imges/Departments/bg.webp'
import img1 from '../../../imges/Departments/img1.webp'
import img2 from '../../../imges/Departments/img2.webp'
import img3 from '../../../imges/Departments/img3.webp'
import './Departments.css'

const Departments = () => {
    return (
        <div className="mt-5 bg-light">
            <div className="container">
                <div className="departments-heading">
                    <h2>Departments</h2>
                </div>
                
                <div className="row my-5">
                    <div className="col-sm-12 col-md-12 col-lg-6 align-self-center">
                        <h2>Chiropractic</h2>
                        <p className='text-secondary department-details'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        
                        <div className='btn btn-success my-2'>Read More</div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <img src={img1} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-sm-12 col-md-12 col-lg">
                        <img src={img2} className="img-fluid" alt="" />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 align-self-center ">
                        <h2>Acupuncture</h2>
                        <p className='text-secondary department-details'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        
                        <div className='btn btn-success my-2'>Read More</div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-sm-12 col-md-12 col-lg-6 align-self-center ">
                        <h2>Chiropractic</h2>
                        <p className='text-secondary department-details'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        
                        <div className='btn btn-success my-2'>Read More</div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <img src={img3} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Departments;