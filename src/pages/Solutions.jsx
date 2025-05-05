// src/pages/Solutions.jsx
import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

export default function Solutions() {
  const sectors = [
    { secteur: 'Agriculture', casUsage: 'Prédiction de rendements & optimisation irrigation' },
    { secteur: 'Finance', casUsage: 'Détection fraude Mobile Money & scoring crédit' },
    { secteur: 'Santé', casUsage: 'Gestion prédictive des flux patients' },
    { secteur: 'Éducation', casUsage: 'Plateformes e-learning adaptatives' },
  ];

  return (
    <div>

      <h1 className="display-5 fw-bold mb-4">Solutions Sectorielles</h1>
      <Row className="g-4">
        {sectors.map((sector, index) => (
          <Col md={6} key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{sector.secteur}</Card.Title>
                <Card.Text className="text-muted">{sector.casUsage}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
