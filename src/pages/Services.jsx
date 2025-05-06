// src/pages/Services.jsx
import React from 'react';
import { Table, Badge } from 'react-bootstrap';

export default function Services() {
  const services = [
    { domaine: 'Data Analytics', offre: 'Dashboards interactifs & Reporting BI', resultat: 'Pilotage en temps réel' },
    { domaine: 'IA',             offre: 'ML/DL - Computer Vision/NLP',          resultat: 'Automatisation avancée'  },
    { domaine: 'RPA',            offre: 'Robotisation des workflows',           resultat: '+40% de productivité'   },
    { domaine: 'Formation',      offre: 'Bootcamps IA/Data Science',           resultat: 'Compétences internes'   },
  ];

  return (
    <div >
      <h1 className="display-5 fw-bold mb-4" data-aos="fade-down" >
        Nos Services Clés
      </h1>

      <Table
        striped bordered hover responsive
        data-aos="fade-up" data-aos-delay="150"
        style={{width:'1480.9px'}}
      >
        <thead className="bg-primary text-white" >
          <tr>
            <th>Domaine</th>
            <th>Offre</th>
            <th>Résultat</th>
          </tr>
        </thead>
        <tbody>
          {services.map((s, i) => (
            <tr key={i} data-aos="fade-left" data-aos-delay={200 + i * 50}>
              <td><Badge bg="primary">{s.domaine}</Badge></td>
              <td>{s.offre}</td>
              <td>{s.resultat}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
