import React from 'react';
import Navbar from '../components/Navbar';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import "../css/About.css";

export default function About() {
  return (
    <Container>
    <div>
     <Navbar />
   </div>
    <div>
      <h1>About Me</h1>
      <p>
      Hi. I’m Erynn, based in North Carolina.  In 2017, I moved from Southern California to finish my Journalism: Editing and Graphic Design degree at The University of North Carolina at Chapel Hill (yes, I am pretentious enough to write all of that out).
      I'm learning to code. Enjoy my website.
      </p>
    </div>
    <div>
    <Footer />
    </div>
    </Container>
  );
}
