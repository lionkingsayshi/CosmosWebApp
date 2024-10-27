// src/components/Experience.jsx

import React from 'react';
import '../CSS/Experience.css';

const Experience = () => {
  return (
    <div className="experience-container">
      <h2>Work Experience</h2>
      <form className="experience-form">
        {/* Experience at Société Générale */}
        <div className="job-title">
          <h3>Software Engineer at Société Générale Global Solution Centre</h3>
          <p><strong>(Mar' 2023 - Present) [Bangalore]</strong></p>
        </div>
        <div className="job-description">
          <p>
            Design, code, test, debug, and document for projects and programs associated with the technology domain,
            including upgrades and deployments.
          </p>
          <p>
            Migrated legacy applications to microservices (<code>.NET MVC</code> to <code>.NET Core</code> with Dapper & EF Core)
            and MSSQL to PostgreSQL.
          </p>
          <p>
            Optimized performance by code splitting, lazy loading, efficient state management, server-side rendering (SSR),
            EF Core optimization, pagination, filtering, and projections, configuring middlewares,
            implemented in-memory & Redis caching, implemented DDD and TDD,
            implemented error handling and logging, migrating to microservices,
            using load balancer for traffic management.
          </p>
          <p>
            Individually collaborated with stakeholders on various ALM tools developed using <code>.NET Core + React</code>.
          </p>
          <p>
            Created end-to-end CI/CD pipeline using Jenkins, Terraform, Ansible, containers, and GitHub Actions.
          </p>
          <p>
            Organized boot camps and knowledge-sharing sessions with various teams within the organization.
          </p>
        </div>

        {/* Experience at Cognizant Technology Services */}
        <div className="job-title">
          <h3>Programmer Analyst at Cognizant Technology Services</h3>
          <p><strong>(Dec' 2021 - Feb’ 2023) [Bangalore]</strong></p>
        </div>
        <div className="job-description">
          <p>
            Designed and developed complex, high-quality, enterprise-transforming business applications by coordinating with the project manager with sprint planning and tools like JIRA.
          </p>
          <p>
            Technologies used: <code>.NET Core MVC</code> with C#, HTML, CSS, JavaScript, jQuery, AJAX, SQL Server, JSON.
          </p>
          <p>
            Participation in design reviews, test case reviews, and production support readiness reviews for new releases.
          </p>
          <p>
            Work experience in unit testing frameworks, DevOps with Azure, and knowledge of CI/CD pipelines like Jenkins.
          </p>
          <p>
            Implemented software design patterns in developing microservices.
          </p>
          <p>
            Built and maintained web applications using C#, .NET 4.0 & above, SQL; created new software systems.
          </p>
          <p>
            Updated and managed existing products and provided beneficial technical support to clients and colleagues.
          </p>
          <p>
            Working knowledge of .NET Core apps on Docker/Kubernetes and Azure DevOps.
          </p>
          <p>
            Experienced in middleware authentication.
          </p>
          <p>
            Experienced in architecture and design patterns with ASP.NET Core, dependency injection, SOLID principles, and Singleton pattern.
          </p>
          <p>
            Worked with JSON, XML, and GraphQL to communicate with client-side applications.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Experience;
