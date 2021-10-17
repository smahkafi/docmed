import React from 'react';
import { Link} from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Link className="m-2 link-text" to="/home">Home</Link>
            <Link className="m-2 link-text" to="/about">About Us</Link>
            <Link className="m-2 link-text" to="/services">Services</Link>
            <Link className="m-2 link-text" to="/contact">Contact</Link>
        </div>
    );
};

export default Header;