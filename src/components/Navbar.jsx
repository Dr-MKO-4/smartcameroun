// src/components/CustomNavbar.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function CustomNavbar() {
  const { pathname } = useLocation();

  return (
    <Navbar
      expand="lg"
      bg="white"
      variant="light"
      className="shadow-sm py-3"
      fixed="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} height="42" alt="Smart Cameroun SA" />
          <span className="ms-2 fw-bold text-primary">Smart Cameroun SA</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-center">
            {[
              { to: '/', label: 'Accueil' },
              { to: '/services', label: 'Services' },
              { to: '/solutions', label: 'Solutions' },
              { to: '/company', label: 'Notre Société' },
              { to: '/about', label: 'À propos' },
              { to: '/contact', label: 'Contact' },
            ].map((link) => (
              <Nav.Link
                as={Link}
                to={link.to}
                key={link.to}
                className={`px-2 px-lg-3 ${
                  pathname === link.to ? 'active fw-bold' : ''
                }`}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
