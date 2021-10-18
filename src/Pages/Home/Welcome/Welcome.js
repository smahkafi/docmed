import React from 'react';
import { Button, Container } from 'react-bootstrap';
import AboutImg from '../../../imges/About/about.webp'
import './Welcome.css'

const Welcome = () => {
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 px-1 welcome">
                        <img className="img-fluid border" src={AboutImg} alt=""/>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 px-1 welcome text-start">
                        <h6>Welcome to Docmed</h6>
                        <h2>Best Care For Your Good Health</h2>
                        <p>Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</p>
                        <p>-  Apartments frequently or motionless.</p>
                        <p>- Duis aute irure dolor in reprehenderit in voluptate.</p>
                        <p>-  Voluptatem quia voluptas sit aspernatur.</p>
                        <Button>Learn More</Button>                        
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Welcome;