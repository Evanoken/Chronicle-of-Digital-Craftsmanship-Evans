import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import './Experience.css';

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <h2>Professional Journey</h2>
        <p className="section-subtitle">My career experience and academic background</p>
        <br />
        <Tab.Container id="experience-tabs" defaultActiveKey="experience">
          <Nav variant="pills" className="mb-5 justify-content-center">
            <Nav.Item>
              <Nav.Link eventKey="experience">Experience</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="education">Education</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="achievements">Key Achievements</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            {/* Experience Tab */}
            <Tab.Pane eventKey="experience">
              <div className="timeline">
                {/* Current Position */}
                <div className="timeline-item current">
                  <div className="timeline-header">
                    <h3>Client Based Software Developer</h3>
                    <h4>Amilda Wellness Boutique | 2023 - Present | Amsterdam, Netherlands</h4>
                    <div className="current-badge">Current Position</div>
                  </div>
                  <ul>
                    <li>Maintaining and optimizing 20+ client email templates in Ovatu CRM</li>
                    <li>Improved client engagement rate by 35% through personalized communication strategies</li>
                    <li>Developing new CRM features to enhance customer experience and retention</li>
                    <li>Resolving technical issues within 24-hour SLA for 50+ business clients</li>
                  </ul>
                </div>

                {/* Previous Position */}
                <div className="timeline-item">
                  <div className="timeline-header">
                    <h3>Platform Developer (Contract)</h3>
                    <h4>DigitalQatalyst | 05/2024 - 01/2025 | Dubai, UAE</h4>
                  </div>
                  <ul>
                    <li>Architected and deployed 5 major enterprise platforms (DTMA, Tmaas, DTMP, DFSA, Invest UAU) using Power Platform</li>
                    <li>Reduced deployment time by 40% through implementation of automated CI/CD pipelines in Azure DevOps</li>
                    <li>Increased platform performance by 35% through optimization of React and TypeScript codebase</li>
                    <li>Led a team of 8 developers across multiple projects, maintaining 98% on-time delivery rate</li>
                  </ul>
                </div>

                {/* Internship Positions */}
                <div className="timeline-item">
                  <div className="timeline-header">
                    <h3>Full-Stack Developer (Intern)</h3>
                    <h4>The Jitu Company | 05/2023 - 12/2023 | Nyeri, Kenya</h4>
                  </div>
                  <ul>
                    <li>Developed 4 e-commerce platforms serving 50,000+ monthly active users using React, Redux, and TypeScript</li>
                    <li>Improved system response time by 45% through optimization of Azure database solutions</li>
                    <li>Reduced page load time by 60% through implementation of React performance best practices</li>
                  </ul>
                </div>
              </div>
            </Tab.Pane>

            {/* Education Tab */}
            <Tab.Pane eventKey="education">
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-header">
                    <h3>Bachelor of Science in Computer Science</h3>
                    <h4>Kirinyaga University | 01/2020 - 12/2024 | Kerugoya, Kenya</h4>
                  </div>
                  <ul>
                    <li>Specialization: Full-Stack Development and Cybersecurity</li>
                    <li>Final Year Project: AI-Based Weather Pattern classification and forecasting System</li>
                    <li>Coursework: Cloud Computing, Data Structures, Machine Learning, Secure Coding</li>
                  </ul>
                </div>

                <div className="timeline-item">
                  <div className="timeline-header">
                    <h3>Full-Stack Software Engineering Program</h3>
                    <h4>ALX Holberton School | 01/2022 - 01/2023 | Remote</h4>
                  </div>
                  <ul>
                    <li>Completed 1,500+ hours of intensive software engineering training</li>
                    <li>Led 3 capstone projects with average grade of 95%</li>
                    <li>Technologies: Python, JavaScript, React, Node.js, Databases</li>
                  </ul>
                </div>
              </div>
            </Tab.Pane>

            {/* Achievements Tab */}
            <Tab.Pane eventKey="achievements">
              <Row className="achievements-grid">
                <Col md={4} sm={6}>
                  <div className="achievement-card">
                    <div className="achievement-value">60%</div>
                    <div className="achievement-title">Security Reduction</div>
                    <p>Reduced vulnerabilities through DevSecOps implementation</p>
                  </div>
                </Col>
                
                <Col md={4} sm={6}>
                  <div className="achievement-card">
                    <div className="achievement-value">40%</div>
                    <div className="achievement-title">Deployment Speed</div>
                    <p>Faster deployments via CI/CD optimization</p>
                  </div>
                </Col>
                
                <Col md={4} sm={6}>
                  <div className="achievement-card">
                    <div className="achievement-value">35%</div>
                    <div className="achievement-title">Engagement Boost</div>
                    <p>Increased client engagement at Amilda</p>
                  </div>
                </Col>
                
                <Col md={4} sm={6}>
                  <div className="achievement-card">
                    <div className="achievement-value">98%</div>
                    <div className="achievement-title">On-Time Delivery</div>
                    <p>Project completion rate at DigitalQatalyst</p>
                  </div>
                </Col>
                
                <Col md={4} sm={6}>
                  <div className="achievement-card">
                    <div className="achievement-value">50%</div>
                    <div className="achievement-title">Efficiency Gain</div>
                    <p>Inventory management improvement at university</p>
                  </div>
                </Col>
                
                <Col md={4} sm={6}>
                  <div className="achievement-card">
                    <div className="achievement-value">95%</div>
                    <div className="achievement-title">Satisfaction</div>
                    <p>Client satisfaction rate across positions</p>
                  </div>
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};