// src/components/Skills.js

import React from 'react';
import '../CSS/Skills.css'; // Import your CSS file for styling

const Skills = () => {
  return (
    <div className="skills-form-container">
      <h2>Skills</h2>
      <form className="skills-form">
        <div className="skills-section">
          <h3>Data Structures & Algorithms</h3>
        </div>
        <div className="skills-section">
          <h3>Programming Languages</h3>
          <ul>
            <li>C#</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="skills-section">
          <h3>Databases</h3>
          <ul>
            <li>SQL Server (2008/2012/2016)</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>IBM DB2</li>
          </ul>
        </div>
        <div className="skills-section">
          <h3>Design Patterns</h3>
          <ul>
            <li>Domain Driven Design</li>
            <li>SOLID</li>
            <li>Test Driven Design</li>
            <li>Event Driven Design</li>
            <li>Dependency Injection</li>
          </ul>
        </div>
        <div className="skills-section">
          <h3>Frameworks and Tools</h3>
          <ul>
            <li>ASP.NET Framework</li>
            <li>ASP.NET Core</li>
            <li>Web API (REST, SOAP, GraphQL)</li>
            <li>Next.js</li>
            <li>React.js</li>
          </ul>
        </div>
        <div className="skills-section">
          <h3>Cloud and Ops</h3>
          <ul>
            <li>DevOps CI/CD</li>
            <li>SG Cloud (Private)</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Microsoft Azure VM</li>
            <li>Azure Functions</li>
            <li>Azure SQL Database</li>
            <li>AWS S3 Bucket</li>
            <li>AWS Elastic</li>
            <li>ELK Stack</li>
          </ul>
        </div>
        <div className="skills-section">
          <h3>Others</h3>
          <ul>
            <li>Copilot</li>
            <li>Gemini</li>
            <li>GitHub</li>
            <li>GitLab</li>
            <li>Jenkins</li>
            <li>TeamCity</li>
            <li>Postman</li>
            <li>Snowflake</li>
            <li>SDLC</li>
            <li>Agile-Scrum</li>
            <li>RabbitMQ</li>
            <li>Swagger</li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Skills;
