import React from 'react';
import './Contact.css'
import ContactBanner from './ContactBanner/ContactBanner';
import GetTouch from './GetTouch/GetTouch';
import Map from './Map/Map';

const Contact = () => {
    return (
        <div className="contact">
            <ContactBanner></ContactBanner>
            <Map></Map>
            <GetTouch></GetTouch>
        </div>
    );
};

export default Contact;