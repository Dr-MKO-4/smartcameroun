// src/pages/About.jsx
import React from 'react';
import { Card, Row, Col, Image, Container } from 'react-bootstrap';

export default function About() {
  const team = [
    { name: "Dr. Marie Tchounga", role: "CEO & Fondatrice", photo: "/assets/marie.jpg" },
    { name: "Ing. Paul Mbarga", role: "CTO", photo: "/assets/paul.jpg" },
    { name: "Mme Aïcha Ngassa", role: "Commercial", photo: "/assets/aicha.jpg" }
  ];

  return (
    <div>
      <section className="mb-5 text-center">
        <h1 className="display-5 fw-bold mb-4">Notre mission</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
          Smart Cameroun SA (SCA) est une entreprise spécialisée en intelligence artificielle et data science.
          Nous accompagnons les organisations au Cameroun dans l’exploitation de leurs données pour optimiser
          leurs décisions, automatiser leurs processus et prédire leurs résultats.
        </p>
        <h2 className="text-2xl font-semibold mt-5 mb-4">Nos valeurs</h2>
        <Row className="g-4 mb-5">
          {team.map((member, index) => (
            <Col md={4} key={index}>
              <Card className="text-center shadow-sm h-100">
                <Image src={member.photo} fluid className="rounded-top" />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="text-muted mb-2">{member.role}</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
}
