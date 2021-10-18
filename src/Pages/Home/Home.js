import React from 'react';
import Banner from './Banner/Banner';
import Emergency from './Emergency/Emergency';
import ServicesHome from './ServicesHome/ServicesHome';
import Welcome from './Welcome/Welcome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Emergency></Emergency>
            <Welcome></Welcome>
            <ServicesHome></ServicesHome>
        </div>
    );
};

export default Home;