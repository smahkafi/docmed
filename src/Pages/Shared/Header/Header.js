import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
  const { allContext } = useAuth();
  const {user, logOut} = allContext;
  console.log(user)
    return (
        <>
            <Navbar bg="info" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Docmed</Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} className="text-dark" to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className="text-dark" to="/about">About Us</Nav.Link>
                        <Nav.Link as={HashLink} className="text-dark" to="/home#service">Services</Nav.Link>
                        <Nav.Link as={HashLink} className="text-dark" to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={HashLink} className="text-dark" to="/contact">Contact</Nav.Link>

                        {!user?.email ? (
                            <>
                                <Nav.Link as={NavLink} to="/signup" className="menu-items">
                                    <div className="btn btn-primary">
                                    Sign Up
                                    </div>
                                </Nav.Link>

                                <Nav.Link as={NavLink} to="/login" className=" ms-2 menu-items">
                                    <div className="btn btn-primary">
                                        Sign In
                                    </div>
                                </Nav.Link>
                            </>
                        ): (
                            <NavDropdown
                                title={
                                    <img 
                                    style={{
                                            width: "45px",
                                            borderRadius: "50%",
                                        }}
                                        src={user?.photoURL}
                                        alt=""/>}>
                                    <div className="text-center">
                                    <h6>{user?.displayName}</h6>
                                    <p className="m-0 mb-2">{user?.email}</p>
                                    <button onClick={logOut} className="btn btn-primary">
                                        Log Out
                                    </button>
                                </div>
                            </NavDropdown>
                        )}                            
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;