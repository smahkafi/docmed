import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import Banner1 from '../../../imges/banner/banner.png.webp'
import Banner2 from '../../../imges/banner/banner2.png.webp'

const Banner = () => {
    return (
            <>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="text-dark">First slide label</h3>
                    <p className="text-dark">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <Button>Check Our Service</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Banner2}
                    alt="Second slide"
                    />
                    <Carousel.Caption className="">
                    <h3 className="text-dark">Second slide label</h3>
                    <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button>Check Our Service</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;