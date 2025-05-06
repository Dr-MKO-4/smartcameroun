// src/pages/Company.jsx
import React from 'react';
import { Row, Col, Accordion, ListGroup } from 'react-bootstrap';

export default function Company() {
  return (
    <div className="page-wrapper py-5" >
      <Row className="g-4" >
        <Col lg={6} style={{ minWidth: '1200px' }}>
          <h2 data-aos="fade-down" >Mode Opératoire</h2>
          <Accordion defaultActiveKey="0" data-aos="fade-up" data-aos-delay="100">
            <Accordion.Item eventKey="0" data-aos="fade-right">
              <Accordion.Header>Infrastructure</Accordion.Header>
              <Accordion.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>Bureaux Douala/Yaoundé</ListGroup.Item>
                  <ListGroup.Item>Cloud GPU & infrastructure 4G</ListGroup.Item>
                  <ListGroup.Item>ERP Odoo & CI/CD</ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" data-aos="fade-right" data-aos-delay="150">
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

        <Col lg={6} style={{ width: '1200px' }}>
          <h2 data-aos="fade-down" data-aos-delay="200">Gouvernance</h2>
          <Accordion data-aos="fade-up" data-aos-delay="300">
            <Accordion.Item eventKey="0" data-aos="fade-left">
              <Accordion.Header>Conformité</Accordion.Header>
              <Accordion.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>SA conforme OHADA</ListGroup.Item>
                  <ListGroup.Item>Certification CNDP</ListGroup.Item>
                  <ListGroup.Item>Assurances RC Pro</ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" data-aos="fade-left" data-aos-delay="150">
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
