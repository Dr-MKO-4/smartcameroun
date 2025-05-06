// src/pages/Solutions.jsx
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

export default function Solutions() {
  const sectors = [
    { secteur: 'Agriculture', casUsage: 'Prédiction de rendements & optimisation irrigation' },
    { secteur: 'Finance',     casUsage: 'Détection fraude Mobile Money & scoring crédit' },
    { secteur: 'Santé',       casUsage: 'Gestion prédictive des flux patients' },
    { secteur: 'Éducation',   casUsage: 'Plateformes e-learning adaptatives' },
  ];

  return (
    <div className="page-wrapper py-5" style={{ width: '1480.9px' }}>
      <h1 className="display-5 fw-bold mb-4 text-center" data-aos="fade-down">
        Solutions Sectorielles
      </h1>
      <Row className="g-4">
        {sectors.map((sec, idx) => (
          <Col md={6} key={idx}>
            <Card className="h-100 shadow-sm" data-aos="flip-left" data-aos-delay={100 + idx * 100}>
              <Card.Body>
                <Card.Title>{sec.secteur}</Card.Title>
                <Card.Text className="text-muted">{sec.casUsage}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
