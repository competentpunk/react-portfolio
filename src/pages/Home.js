import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PortfolioContainer from '../components/PortfolioContainer';
import "../css/Home.css";

export default function Home() {
  return (
   
<div>
       <div>
        <Navbar />
      </div>
    <div>
      <Container>
        <div>
        <h1>Home Page</h1>
        <p>Hi. I'm Erynn.</p>
        </div>
        <div>
      <h1>Fullstack Portfolio</h1>
      <PortfolioContainer />
    </div>
      </Container>
    </div>
    
 <div>
 <Footer />
 </div>
 </div>
  );
}
