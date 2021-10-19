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
                    <h1 className="text-dark">Health care</h1>
                    <h4 className="text-dark">For Hole Family </h4>
                    <p className="text-dark">In healthcare sector, service excellence is the facility of <br />
                    the hospital as healthcare service provider to consistently.</p>
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
                    <h1 className="text-dark">Health care</h1>
                    <h4 className="text-dark">For Hole Family </h4>
                    <p className="text-dark">In healthcare sector, service excellence is the facility of <br />
                    the hospital as healthcare service provider to consistently.</p>
                    <Button>Check Our Service</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;