// src/pages/Services.jsx
import React from 'react';
import { Table, Badge, Container } from 'react-bootstrap';

export default function Services() {
  const services = [
    { domaine: 'Data Analytics', offre: 'Dashboards interactifs & Reporting BI', resultat: 'Pilotage en temps réel' },
    { domaine: 'IA', offre: 'ML/DL - Computer Vision/NLP', resultat: 'Automatisation avancée' },
    { domaine: 'RPA', offre: 'Robotisation des workflows', resultat: '+40% de productivité' },
    { domaine: 'Formation', offre: 'Bootcamps IA/Data Science', resultat: 'Compétences internes' },
  ];

  return (
    <>
      <h1 
        className="display-5 fw-bold mb-4" 
        data-aos="zoom-in"
      >
        Nos Services Clés
      </h1>

      <Table 
        striped 
        bordered 
        hover 
        responsive
        data-aos="fade-up" 
        data-aos-delay="150"
      >
        <thead className="bg-primary text-white">
          {/* ... */}
        </thead>
        <tbody>
          {services.map((s,i) => (
            <tr key={i} data-aos="flip-left" data-aos-delay={200 + i*50}>
              <td><Badge bg="primary">{s.domaine}</Badge></td>
              <td>{s.offre}</td>
              <td>{s.resultat}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}