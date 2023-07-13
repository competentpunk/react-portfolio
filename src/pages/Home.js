import React from 'react';
import Navbar from '../components/Navbar';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import "../css/Home.css";

export default function Home() {
  return (
   
<div>
       <div>
        <Navbar />
      </div>
    <div>
      <Container>
        <h1>Home Page</h1>
        <p>Hi. I'm Erynn.</p>
      </Container>
    </div>
    
 <div>
 <Footer />
 </div>
 </div>
  );
}
