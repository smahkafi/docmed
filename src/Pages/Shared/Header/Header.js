import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
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

                        {/*  <Button onClick={logOut} variant="outline-primary">Log out</Button> 
                            <Nav.Link as={Link} to="/login">Login</Nav.Link> */}

                        <Navbar.Text>
                        <Nav.Link to="/login#login">fgh</Nav.Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;