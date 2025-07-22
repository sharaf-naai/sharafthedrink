import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';

import Navbar from '../components/Navbar.jsx';
import Home from './pages/Home';
import Locations from './pages/Locations.jsx'
import Flavors from './pages/Flavors.jsx'
import About from './pages/About.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Flavors" element={<Flavors />} />
        <Route path="/Locations" element={<Locations />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  </StrictMode>
);
