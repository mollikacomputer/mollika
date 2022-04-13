import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Link as NavLink } from "react-router-dom";
import './NavBar.css'
const NavBar = () => {
  return (
    <Navbar sticky="top">
    <Container>
      <Navbar.Brand href="#home">Mollika Computer</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Name : 
        </Navbar.Text>
      </Navbar.Collapse>
      {/*as={Link} to="/" থাকলে রিলোড হবে না  */}
      <Nav.Link as={Link} to="/" > Home </Nav.Link>
      <Nav.Link as={Link} to="/services" > Service </Nav.Link>
      <Nav.Link as={Link} to="/services#experts" > Experts </Nav.Link>
      <Nav.Link as={Link} to="/contactus" > Contact Us </Nav.Link>
      <Nav.Link as={Link} to="/aboutus" > About Us </Nav.Link>
      <Nav.Link as={Link} to="/registration" > Registration </Nav.Link>
      <Nav.Link as={Link} to="/login" > LogIn </Nav.Link>
    </Container>
  </Navbar>
  );
};

export default NavBar;
