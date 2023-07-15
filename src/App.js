import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { createHttpLink } from '@apollo/client';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

function App() {
  return (
        <Router>
          <Routes>
            <Route path="/react-portfolio" element={<Home />} />
            <Route path="/react-portfolio/about" element={ <About />} />
            <Route path="/react-portfolio/contact" element={<Contact /> } />
            <Route path="*" element={<Navigate to="/react-portfolio" />} />
          </Routes>
        </Router>
  );
};

export default App;
