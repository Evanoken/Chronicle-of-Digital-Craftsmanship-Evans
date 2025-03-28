import { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import profilephoto from '../assets/img/profile-photo.jpeg';
import { HashLink } from 'react-router-hash-link';
import './NavBar.css'; // Create this file for custom styles

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
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={profilephoto}
            alt="Profile"
            className="navbar-profile-img"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="navbar-nav ms-auto">
            <HashLink 
              to="#home" 
              className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
              onClick={() => onUpdateActiveLink('home')}
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              HOME
            </HashLink>
            <HashLink 
              to="#about" 
              className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
              onClick={() => onUpdateActiveLink('about')}
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              ABOUT
            </HashLink>
            <HashLink 
              to="#skills" 
              className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`}
              onClick={() => onUpdateActiveLink('skills')}
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              SKILLS
            </HashLink>
            <HashLink 
              to="#projects" 
              className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
              onClick={() => onUpdateActiveLink('projects')}
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              PROJECTS
            </HashLink>
          </div>
          <span className="navbar-text">
            <HashLink to="#connect">
              <button className="connect-button">
                <span>Let's Connect</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};