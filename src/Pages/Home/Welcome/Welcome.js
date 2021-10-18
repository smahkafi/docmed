import React from 'react';
import { Button, Container } from 'react-bootstrap';
import AboutImg from '../../../imges/About/about.webp'

const Welcome = () => {
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 px-1">
                        <img className="img-fluid" src={AboutImg} alt=""/>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 px-1">
                        <h6>Welcome to Docmed</h6>
                        <h2>Best Care For Your Good Health</h2>
                        <p>Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</p>
                        <li> Apartments frequently or motionless.</li>
                        <li>Duis aute irure dolor in reprehenderit in voluptate.</li>
                        <li> Voluptatem quia voluptas sit aspernatur.</li>
                        <Button>Learn More</Button>                        
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Welcome;