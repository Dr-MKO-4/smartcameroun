// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home      from './pages/Home';
import Services  from './pages/Services';
import Solutions from './pages/Solutions';
import About     from './pages/About';
import Company   from './pages/Company';
import Contact   from './pages/Contact';

import './App.css';

AOS.init({ once: true, duration: 600, easing: 'ease-out' });

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100" expand="lg">
        {/* Navbar fixe */}
        <Navbar />

        {/* Conteneur unique desktop‑first + padding top pour navbar */}
        <main className="flex-grow-1 bg-light">
          <div className="page-wrapper" expand="lg">
            <Routes>
              <Route path="/"          element={<Home />} />
              <Route path="/services"  element={<Services />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/company"   element={<Company />} />
              <Route path="/about"     element={<About />} />
              <Route path="/contact"   element={<Contact />} />
              <Route path="*"          element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
