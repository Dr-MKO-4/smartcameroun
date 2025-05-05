// src/pages/Home.jsx
import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div >
      <section className="text-center mb-5">
        <h1 className="display-5 fw-bold mb-4">
          <span className="text-primary">IA</span> pour la transformation numérique camerounaise
        </h1>
        <p className="lead mb-4">
          De la donnée à la décision : solutions clés en main pour entreprises et institutions
        </p>
        <Button
          as={Link}
          to="/contact"
          size="lg"
          variant="success"
          className="me-2"
        >
          Démarrer un projet
        </Button>
        <Button
          as={Link}
          to="/services"
          variant="outline-primary"
          size="lg"
        >
          Nos services
        </Button>
      </section>

      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Notre Mission</Card.Title>
              <Card.Text>
                Transformer les données en avantage compétitif grâce à des solutions IA adaptées aux réalités locales
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Valeur Ajoutée</Card.Title>
              <ul className="list-unstyled mb-0">
                <li>✓ Expertise locale certifiée</li>
                <li>✓ Accompagnement end-to-end</li>
                <li>✓ Conformité réglementaire</li>
                <li>✓ ROI mesurable</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}