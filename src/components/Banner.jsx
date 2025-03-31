import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import headerImg from "../assets/img/header-img.svg";
import './Banner.css'; // Create this CSS file

export const Banner = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const rotatingTexts = ["DevSecOps Engineer", "FullStack Developer", "SalesForce Engineer"];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseBetweenTexts = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const fullText = rotatingTexts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseBetweenTexts);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % rotatingTexts.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, currentTextIndex, isDeleting, rotatingTexts]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={6}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div className={`banner-content ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <span className="tagline">DevOps | SRE | Cloud Engineer</span>
                  <h1 className="banner-title">
                    Hi! I'm <span className="highlight">Evans Kariuki</span>
                    <br />
                    <span className="rotating-text">
                      {currentText}
                      <span className="cursor">|</span>
                    </span>
                  </h1>
                  <p className="banner-description">
                    Creating efficient, scalable solutions with modern cloud technologies
                    and robust security practices.
                  </p>
                  <button 
                    onClick={() => console.log('connect')} 
                    className="connect-button"
                  >
                    Let's Connect <ArrowRightCircle className="button-icon" />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div className={`banner-image ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <img src={headerImg} alt="Developer illustration" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};