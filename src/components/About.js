import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About Kariuki Evans Ngugi</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Professional Summary</h2>
        <p className="text-gray-600 leading-relaxed">
          A dedicated DevOps Engineer with over three years of experience in cloud computing, cybersecurity, 
          and software development. Specializing in streamlining CI/CD pipelines across platforms like Azure, 
          CRM D365, and Power Platform to ensure efficient and secure deployments.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">DevSecOps Expertise</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          My DevSecOps expertise spans the full lifecycle, integrating security with tools like OWASP ZAP and 
          SonarQube, automating testing, and fortifying infrastructure.
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Security integration throughout development lifecycle</li>
          <li>Automated testing and vulnerability scanning</li>
          <li>Infrastructure hardening and security best practices</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">Cloud & DevOps</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Microsoft Azure</li>
              <li>Docker and Kubernetes</li>
              <li>CI/CD Pipeline Automation</li>
              <li>Infrastructure as Code</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">Development</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>React & TypeScript</li>
              <li>Microservices Architecture</li>
              <li>Backend Engineering</li>
              <li>Scripting (Bash, Python)</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Professional Approach</h2>
        <p className="text-gray-600 leading-relaxed">
          I'm a collaborative professional committed to driving innovation with a meticulous, hands-on approach. 
          My focus is on delivering impactful solutions that bridge development and operations while maintaining 
          robust security standards.
        </p>
      </section>
    </div>
  );
};

export default About;