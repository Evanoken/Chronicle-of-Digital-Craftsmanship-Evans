import { Container, Row, Col } from "react-bootstrap";
import { Envelope, Github, Linkedin, Twitter } from "react-bootstrap-icons";
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* Left Section - Quick Links */}
          <Col md={4} className="footer-section">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </Col>

          {/* Middle Section - Contact Info */}
          <Col md={4} className="footer-section">
            <h5 className="footer-heading">Get In Touch</h5>
            <div className="contact-info">
              <p>
                <Envelope className="footer-icon" />
                <a href="mailto:evansngugikariuki@gmail.com">evansngugikariuki@gmail.com</a>
              </p>
              <p>
                <span className="footer-icon">📍</span> Nairobi, Kenya
              </p>
            </div>
          </Col>

          {/* Right Section - Social Links */}
          <Col md={4} className="footer-section">
            <h5 className="footer-heading">Connect With Me</h5>
            <div className="social-icons">
              <a href="https://linkedin.com/in/evans-ngugi" target="_blank" rel="noopener noreferrer">
                <Linkedin className="social-icon" />
              </a>
              <a href="https://github.com/evanskariuki" target="_blank" rel="noopener noreferrer">
                <Github className="social-icon" />
              </a>
              <a href="https://twitter.com/evanskariuki" target="_blank" rel="noopener noreferrer">
                <Twitter className="social-icon" />
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row>
          <Col className="text-center copyright">
            <p>© {currentYear} Evans Kariuki. All rights reserved.</p>
            <p className="small-text">Built with React and passion</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};