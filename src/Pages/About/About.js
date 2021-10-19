import React from 'react';
import AboutBanner from './AboutBanner/AboutBanner';
import AboutContent from './AboutContent/AboutContent';

const About = () => {
    return (
        <div id="about">
            <AboutBanner></AboutBanner>
            <AboutContent></AboutContent>
        </div>
    );
};

export default About;