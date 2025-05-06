// src/pages/About.jsx
import React from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';

export default function About() {
  const team = [
    { name: "Dr. Marie Tchounga", role: "CEO & Fondatrice", photo: "/assets/marie.jpg" },
    { name: "Ing. Paul Mbarga",   role: "CTO",               photo: "/assets/paul.jpg"  },
    { name: "Mme Aïcha Ngassa",   role: "Commercial",        photo: "/assets/aicha.jpg" }
  ];

  return (
    <div className="page-wrapper py-5">
      <section className="text-center mb-5">
        <h1 className="display-5 fw-bold mb-4" data-aos="fade-down">
          Notre mission
        </h1>
        <p
          className="lead text-muted mx-auto"
          style={{ maxWidth: '1500px' }}
          data-aos="fade-up" data-aos-delay="100"
        >
          Smart Cameroun SA (SCA) est une entreprise spécialisée en intelligence artificielle et data science.
          Nous accompagnons les organisations au Cameroun dans l’exploitation de leurs données pour optimiser
          leurs décisions, automatiser leurs processus et prédire leurs résultats.
        </p>
      </section>

      <section>
        <h2 className="fw-semibold mb-4 text-center" data-aos="fade-down" data-aos-delay="200">
          Nos valeurs
        </h2>
        <Row className="g-4">
          {team.map((member, idx) => (
            <Col md={4} key={idx}>
              <Card className="text-center shadow-sm h-100" data-aos="zoom-in" data-aos-delay={250 + idx * 100}>
                <Image src={member.photo} fluid className="rounded-top" alt={member.name}/>
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
