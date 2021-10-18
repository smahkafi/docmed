import React from 'react';
import { Carousel } from 'react-bootstrap';
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
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Banner2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;