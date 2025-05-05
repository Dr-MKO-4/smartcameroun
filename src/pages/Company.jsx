// src/pages/Company.jsx
import React from 'react';
import { Accordion, ListGroup, Container, Row, Col } from 'react-bootstrap';

export default function Company() {
  return (
    <div>
      <Row className="g-4">
        <Col lg={6}>
          <h2 className="mb-4">Mode Opératoire</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Infrastructure</Accordion.Header>
              <Accordion.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>Bureaux Douala/Yaoundé</ListGroup.Item>
                  <ListGroup.Item>Cloud GPU & infrastructure 4G</ListGroup.Item>
                  <ListGroup.Item>ERP Odoo & CI/CD</ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Processus Projet</Accordion.Header>
              <Accordion.Body>
                <ol>
                  <li>Cadrage client</li>
                  <li>Collecte données</li>
                  <li>Prototypage IA</li>
                  <li>Déploiement</li>
                  <li>Transfert compétences</li>
                </ol>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col lg={6}>
          <h2 className="mb-4">Gouvernance</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Conformité</Accordion.Header>
              <Accordion.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>SA conforme OHADA</ListGroup.Item>
                  <ListGroup.Item>Certification CNDP</ListGroup.Item>
                  <ListGroup.Item>Assurances RC Pro</ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Financement</Accordion.Header>
              <Accordion.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>Subventions AFD</ListGroup.Item>
                  <ListGroup.Item>Levée BA</ListGroup.Item>
                  <ListGroup.Item>Prêts bancaires</ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </div>
  );
}