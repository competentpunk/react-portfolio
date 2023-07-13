import React from 'react';
import Navbar from '../components/Navbar';
import { Container, Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import "../css/Contact.css";

export default function Contact() {
  return (
    <Container>
       <div>
        <Navbar />
      </div>
      <div>
        <h1>Contact Me</h1>
        <ContactForm />
      </div>
      <div>
        <h2>Download Resume</h2>
        <Button variant="primary" href="https://indd.adobe.com/view/b5e9a98f-233e-4141-aa48-c458abe46d04" target="_blank">
          Download Resume
        </Button>
      </div>
      <div>
      <Footer />
      </div>
    </Container>
  );
}
