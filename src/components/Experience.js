import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import './Experience.css'; // Create this file for custom styling

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <h2>Professional Experience</h2>
        <p className="section-subtitle">My career journey and key achievements</p>
        
        <Tab.Container id="experience-tabs" defaultActiveKey="first">
          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link eventKey="first">Current</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Previous</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Internships</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div className="experience-item">
                <h3>Platform Developer (Contract)</h3>
                <h4>DigitalQatalyst | 05/2024 - 01/2025 | Dubai, UAE</h4>
                <ul>
                  <li>Architected and deployed 5 major enterprise platforms using Power Platform, JavaScript, and Azure DevOps</li>
                  <li>Reduced deployment time by 40% through automated CI/CD pipelines</li>
                  <li>Increased platform performance by 35% through React and TypeScript optimization</li>
                  <li>Led a team of 8 developers with 98% on-time delivery rate</li>
                </ul>
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="second">
              <div className="experience-item">
                <h3>Client Based Software Developer</h3>
                <h4>Amilda Wellness Boutique | 2023 | Amsterdam, Netherlands</h4>
                <ul>
                  <li>Maintained 20+ client email templates in Ovatu CRM</li>
                  <li>Improved client engagement rate by 35% with personalization</li>
                  <li>Resolved CRM issues within 24-hour SLA</li>
                </ul>
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="third">
              <div className="experience-item">
                <h3>Full-Stack Developer (Intern)</h3>
                <h4>The Jitu Company | 05/2023 - 12/2023 | Nyeri, Kenya</h4>
                <ul>
                  <li>Developed 4 e-commerce platforms serving 50,000+ monthly users</li>
                  <li>Improved system response time by 45% through Azure optimization</li>
                  <li>Reduced page load time by 60% using React best practices</li>
                </ul>
              </div>
              
              <div className="experience-item">
                <h3>Software Developer Intern</h3>
                <h4>Dedan Kimathi University | 01/2022 - 12/2022 | Nyeri, Kenya</h4>
                <ul>
                  <li>Built RESTful APIs serving 3,000+ daily users</li>
                  <li>Developed Java-based store management system reducing inventory time by 50%</li>
                  <li>Implemented automated testing with 90% code coverage</li>
                </ul>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>

        <div className="achievements">
          <h3>Key Achievements</h3>
          <Row>
            <Col md={3} sm={6}>
              <div className="achievement-item">
                <h4>60%</h4>
                <p>Reduction in security vulnerabilities</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="achievement-item">
                <h4>45%</h4>
                <p>Faster deployments</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="achievement-item">
                <h4>35%</h4>
                <p>Performance improvement</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="achievement-item">
                <h4>98%</h4>
                <p>On-time delivery rate</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};