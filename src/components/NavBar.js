import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import profilephoto from '../assets/img/profile-photo.jpeg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

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
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img
              src={profilephoto}
              alt="profilephoto"
              style={{ borderRadius: '50%', width: '50px', height: '50px' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}
              >
                HOME
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('about')}
              >
                ABOUT
              </Nav.Link>
              <Nav.Link
                href="#experience"
                className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('experience')}
              >
                Experience
              </Nav.Link>
              <Nav.Link
                href="#portfolio"
                className={activeLink === 'portfolio' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('portfolio')}
              >
                PORTFOLIO
              </Nav.Link>
              <Nav.Link
                href="#blog"
                className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('blog')}
              >
                BLOG
              </Nav.Link>
              
            </Nav>
            <span className="navbar-text">
              
              <HashLink to="#connect">
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};