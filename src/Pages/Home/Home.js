import React from 'react';
import Banner from './Banner/Banner';
import Departments from './Departments/Departments';
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
            <Departments></Departments>
        </div>
    );
};

export default Home;