import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../../imges/About/aboutcontent.webp'

const AboutContent = () => {
    return (
        <Container>
            <div className="row d-flex">
                <div className="col-sm-12 col-md-6 col-md-6 align-self-center">
                    <img class src={img} alt=""/>
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


{/* <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}