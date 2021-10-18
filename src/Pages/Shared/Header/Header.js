import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
  const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Docmed</Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} className="" to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className="" to="/about">About Us</Nav.Link>
                        <Nav.Link as={HashLink} className="" to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} className="" to="/contact">Contact</Nav.Link>

                        {user?.email ?
                            <Nav.Link onClick={logOut} className="menu-items" >Log Out</Nav.Link>
                            :
                            <Nav.Link as={Link} to="/login" className="menu-items">Log In</Nav.Link>}
                            
                            <Nav.Link as={Link} to="/registration" className="menu-items">Sign Up</Nav.Link>

                            <Navbar.Text>
                                <Nav.Link to="/login#login"> {user?.displayName} </Nav.Link>
                            </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;