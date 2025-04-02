import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import profilephoto from '../assets/img/profile-photo.jpeg';
import { HashLink } from 'react-router-hash-link';
import './NavBar.css'; // Create this CSS file

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={`navbar-main ${scrolled ? "scrolled" : ""}`}>
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
          <img
            src={profilephoto}
            alt="Profile"
            className="navbar-profile-img"
          />
          <span className="navbar-name">Evans Kariuki</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
          <Nav className="navbar-nav ms-auto">
            <Nav.Link
              href="#home"
              className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
              onClick={() => onUpdateActiveLink('about')}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#experience"
              className={`nav-link ${activeLink === 'experience' ? 'active' : ''}`}
              onClick={() => onUpdateActiveLink('experience')}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              className={`nav-link ${activeLink === 'portfolio' ? 'active' : ''}`}
              onClick={() => onUpdateActiveLink('portfolio')}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#blog"
              className={`nav-link ${activeLink === 'blog' ? 'active' : ''}`}
              onClick={() => onUpdateActiveLink('blog')}
            >
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
// refw