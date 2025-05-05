import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
  once: true,       // n’anime qu’une fois
  duration: 600,    // durée de l’animation en ms
  easing: 'ease-out',
});

import Home        from './pages/Home';
import Services    from './pages/Services';
import Solutions   from './pages/Solutions';
import About       from './pages/About';
import Company     from './pages/Company';
import Contact     from './pages/Contact';
import CustomNavbar from './components/Navbar';
import Footer       from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Navbar avec fond blanc et ombre */}
        <CustomNavbar className="shadow-sm bg-white"/>

        {/* Zone principale */}
        <main className="flex-grow-1 bg-light py-4">
          {/* Fluid container pour mobile, marges sur grand écran */}
          <Container fluid className="px-3 px-md-5">
            <Routes>
              <Route path="/"          element={<Home />} />
              <Route path="/services"  element={<Services />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/company"   element={<Company />} />
              <Route path="/about"     element={<About />} />
              <Route path="/contact"   element={<Contact />} />
            </Routes>
          </Container>
        </main>

        {/* Footer “sticky” */}
        <Footer className="mt-auto bg-white text-center py-3 shadow-top"/>
      </div>
    </Router>
  );
}

export default App;
