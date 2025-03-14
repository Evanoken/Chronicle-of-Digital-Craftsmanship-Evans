import 'animate.css';
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline"><b>DevOps | SRE | Cloud Engineer</b></span>
                <h1>{`Hi! I'm Evans Kariuki`} <span className="txt-rotate" dataPeriod="1000" data-rotate='["DevSecOps Engineer", "FullStack Developer", "SalesForce Engineer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                  I’m Kariuki Evans Ngugi, a dedicated DevOps Engineer with over three years of experience in cloud computing, cybersecurity, and software development. I specialize in streamlining CI/CD pipelines across platforms like Azure, CRM D365, and Power Platform, ensuring efficient and secure deployments. My DevSecOps expertise spans the full lifecycle, integrating security with tools like OWASP ZAP and SonarQube, automating testing, and fortifying infrastructure. I excel in microservices architecture, leveraging service orchestration, API-driven communication, containerization with Docker, and Kubernetes for deployment, alongside robust monitoring and logging. I also bring proficiency in React, TypeScript, machine learning, scripting, and backend engineering, consistently delivering impactful solutions. I’m a collaborative professional committed to driving innovation with a meticulous, hands-on approach.
                  </p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
