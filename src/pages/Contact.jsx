// src/pages/Contact.jsx
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    // TODO: intégrer envoi via API ou service mail
    alert('Message envoyé !');
  };

  return (
    <div className="py-5" style={{ width: '1480.9px' }}  >
      <h1 className="text-3xl font-bold mb-4 text-center">Contactez-nous</h1>
      <Form onSubmit={handleSubmit} className="space-y-4">
        <Form.Group className="mb-3">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
          />
        </Form.Group>
        <div className="text-center">
          <Button type="submit" variant="success" size="lg">
            Envoyer
          </Button>
        </div>
      </Form>
    </div>
  );
}