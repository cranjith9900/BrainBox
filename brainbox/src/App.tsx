import { StrictMode, useState } from 'react';
import { Link } from 'react-router-dom';

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import SAPAriba from './pages/SAPAriba';
import S4Hana from './pages/S4Hana';
import InnovationGarage from './pages/InnovationGarage';
import Temp from './components/temp';
function App() {
  return (
    <StrictMode>
    <MantineProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sap-ariba" element={<SAPAriba />} />
        <Route path="/s4hana-migration" element={<S4Hana />} />
        <Route path="/innovation-garage" element={<InnovationGarage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/temp" element={<Temp />} />
      </Routes>
    </Router>
    </MantineProvider>
    </StrictMode>
  );
}

export default App;
