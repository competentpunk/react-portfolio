import React from 'react';
import Navbar from '../components/NavBar';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import "../css/Home.css";

export default function Home() {
  return (
   
    <Container>
       <div>
        <Navbar bg="dark" variant="dark" expand="lg"/>
      </div>
    <div>
      <h1>Home Page</h1>
      <p>
        Hi. I'm Erynn.
      </p>
    </div>
    <div>
    <Footer />
    </div>
    </Container>
 
  );
}
