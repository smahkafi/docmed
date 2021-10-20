import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css'
import ContactBanner from './ContactBanner/ContactBanner';
import GetTouch from './GetTouch/GetTouch';
// import Map from './Map/Map';

const Contact = () => {
    return (
        <div id="contact" className="contact">
            <Container>
                <div>
                    
                <ContactBanner></ContactBanner>
                </div>
                <GetTouch></GetTouch>
            </Container>
        </div>
    );
};

export default Contact;