import React from 'react';
import Navbar from '../components/NavBar';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import "../css/Portfolio.css";

export default function Blog() {
  return (
    <Container>
       <div>
        <Navbar bg="dark" variant="dark" expand="lg"/>
      </div>
    <div>
      <h1>Fullstack Portfolio</h1>
      <PortfolioContainer />
    </div>
    <div>
    <Footer />
    </div>
    </Container>
  );
}
