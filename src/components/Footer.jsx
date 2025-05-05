// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>Smart Cameroun SA</h5>
            <p className="text-muted">L'intelligence artificielle au service du développement</p>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Liens rapides</h5>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-decoration-none text-light">À propos</Link></li>
              <li><Link to="/services" className="text-decoration-none text-light">Services</Link></li>
              <li><Link to="/contact" className="text-decoration-none text-light">Contact</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li><a href="mailto:contact@smartcamerounsa.cm" className="text-decoration-none text-light">contact@smartcamerounsa.cm</a></li>
              <li><a href="tel:+237691697924" className="text-decoration-none text-light">+237 691 6979 24</a></li>
              <li>Yaoundé, Cameroun</li>
            </ul>
          </Col>
        </Row>
        <div className="text-center mt-4 text-muted">
          © {new Date().getFullYear()} Smart Cameroun SA
        </div>
      </Container>
    </footer>
  );
}