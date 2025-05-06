// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-auto">
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <h5>Smart Cameroun SA</h5>
            <p >
              L'intelligence artificielle au service du développement
            </p>
          </Col>
          <Col md={4}>
            <h5>Liens rapides</h5>
            <ul className="list-unstyled small">
              <li><Link to="/" className="text-light">Accueil</Link></li>
              <li><Link to="/services" className="text-light">Services</Link></li>
              <li><Link to="/contact" className="text-light">Contact</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <ul className="list-unstyled small">
              <li><a href="mailto:contact@smartcamerounsa.cm" className="text-light">contact@smartcamerounsa.cm</a></li>
              <li><a href="tel:+237691697924" className="text-light">+237 691 6979 24</a></li>
              <li>Yaoundé, Cameroun</li>
            </ul>
          </Col>
        </Row>
        <div className="text-center small text-muted mt-4">
          © {new Date().getFullYear()} Smart Cameroun SA. Tous droits réservés.
        </div>
      </Container>
    </footer>
  );
}
