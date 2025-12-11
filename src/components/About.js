import React from 'react';
import './About.css'; // Create this file for custom styles

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h1 className="about-title">About <span className="highlight">Kariuki Evans Ngugi</span></h1>
        
        <div className="about-card">
          <h2 className="section-title">Professional Summary</h2>
          <p className="about-text">
            A dedicated DevOps Engineer with over three years of experience in cloud computing, cybersecurity, 
            and software development. Specializing in streamlining CI/CD pipelines across platforms like Azure, AWS, 
            CRM D365, and Power Platform to ensure efficient and secure deployments.
          </p>
        </div>

        <div className="about-card">
          <h2 className="section-title">DevSecOps Expertise</h2>
          <p className="about-text">
            My DevSecOps expertise spans the full lifecycle, integrating security with tools like OWASP ZAP and 
            SonarQube, automating testing, and fortifying infrastructure.
          </p>
          <ul className="skills-list">
            <li>Security integration throughout development lifecycle</li>
            <li>Automated testing and vulnerability scanning</li>
            <li>Infrastructure hardening and security best practices</li>
          </ul>
        </div>

        <div className="about-card">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skills-column">
              <h3 className="skills-subtitle">Cloud & DevOps</h3>
              <ul className="skills-list">
                <li>Microsoft Azure & AWS</li>
                <li>Docker and Kubernetes</li>
                <li>CI/CD Pipeline Automation</li>
                <li>Infrastructure as Code</li>
              </ul>
            </div>
            <div className="skills-column">
              <h3 className="skills-subtitle">Development</h3>
              <ul className="skills-list">
                <li>React & TypeScript</li>
                <li>Microservices Architecture</li>
                <li>Backend Engineering</li>
                <li>Scripting (Bash, Python)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-card">
          <h2 className="section-title">Professional Approach</h2>
          <p className="about-text">
            I'm a collaborative professional committed to driving innovation with a meticulous, hands-on approach. 
            My focus is on delivering impactful solutions that bridge development and operations while maintaining 
            robust security standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
