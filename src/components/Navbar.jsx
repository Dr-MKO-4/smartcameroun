// src/components/CustomNavbar.jsx
import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Assurez-vous d'ajouter le logo dans src/assets/logo.png

export default function CustomNavbar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image src={logo} alt="Smart Cameroun SA" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/services" className="mx-2">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/solutions" className="mx-2">
              Solutions
            </Nav.Link>
            <Nav.Link as={Link} to="/company" className="mx-2">
              Notre Société
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-2">
              À propos
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="mx-2">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}