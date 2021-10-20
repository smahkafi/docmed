import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../../imges/About/aboutcontent.webp'


const AboutContent = () => {
  return (
    <Container>
      <div className="mt-5 row d-flex">
        <div className="col-sm-12 col-md-6 col-md-6 align-self-center">
          <img className="img-fluid" src={img} alt="" />
        </div>
        <div className="col-sm-12 col-md-6 col-md-6 align-self-center">
          <h2>Leading edge care for Your family</h2>
          <p>Esteem spirit temper too say adieus who direct esteem. It esteems luckily picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</p>
        </div>
      </div>
    </Container>
  );
};

export default AboutContent;
