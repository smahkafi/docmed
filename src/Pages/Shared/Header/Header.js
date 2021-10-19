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
                        <Nav.Link as={HashLink} className="text-dark" to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} className="text-dark" to="/contact">Contact</Nav.Link>

                        {!user?.email ? (
                            <>
                                <Nav.Link as={NavLink} to="/registration" className="menu-items">Sign Up</Nav.Link>

                                <Nav.Link as={NavLink} to="/login" className="menu-items">Sign In</Nav.Link>
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





// {user?.email ?
//     <Nav.Link onClick={logOut} className="menu-items" >Log Out</Nav.Link>
//     :
//     <Nav.Link as={Link} to="/login" className="menu-items">Log In</Nav.Link>}
    
//     <Nav.Link as={Link} to="/registration" className="menu-items">Sign Up</Nav.Link>

//     <Navbar.Text>
//         <Nav.Link to="/login#login"> {user?.displayName} </Nav.Link>
//     </Navbar.Text>