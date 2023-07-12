import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className='footer fixed-bottom mt-auto py-3'>
      <Container className="flex-grow-1">
        <Row>
          <Col xs={12} sm={4} className="text-center">
            <p className="footer-text">Erynn M. Affeldt ©2023</p>
          </Col>
          <Col xs={12} sm={4} className="text-center text-sm-right">
            <a href="https://github.com/competentpunk" className="footer-link">GitHub</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
