import React from 'react';
import Emergency from './Emergency/Emergency';
import Welcome from './Welcome/Welcome';
// import Carousel from './Carousel/Carousel'

const Home = () => {
    return (
        <div>
            {/* <Carousel></Carousel> */}
            {/* <Carousel></Carousel> */}
            <Emergency></Emergency>
            <Welcome></Welcome>
        </div>
    );
};

export default Home;