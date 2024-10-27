// src/Portfolio.jsx

import React, { useState } from 'react';
import '../CSS/Portfolio.css'; // Ensure your CSS is included
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('About');

  const sections = {
    About: (
      <div>
        <h2>About Me</h2>
        <p>Hi, I’m Souvik! I'm a software developer with in-depth experience in Asp.net core and React development and design. In a nutshell, I create application and API's that help organizations address business challenges and meet their needs.</p>
        <p>At Societe Generale Global Solution Centre, my role as a Software Engineer centers around developing resilient software that leverages the full stack of .Net Core, complemented by front-end innovation with React. Our team's commitment to cloud technologies like AWS and SG Cloud, coupled with an agile approach to DevOps, has been integral to our digital transformation efforts.</p>
        <p>My educational grounding in Computer Science from Chandigarh University has equipped me with a robust foundation in object-oriented programming and Azure DevOps Services. With a passion for continuous learning, I've augmented my skill set with certifications in Machine Learning and Reinforcement Learning, which guide my contributions to creating intelligent, scalable solutions.</p>
      </div>
    ),
    Experience: <Experience />,
    Skills: <Skills />,
    Certificates: <Certificates />,
    Education: <Education />,
    Achievements: <Achievements />,
    Contact: <Contact />,
  };

  return (
    <div className="portfolio-container">
      <nav className="side-menu">
        <ul>
          {Object.keys(sections).map((section) => (
            <li
              key={section}
              className={activeSection === section ? 'active' : ''}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </li>
          ))}
        </ul>
      </nav>
      <div className="main-content">
        {sections[activeSection]}
      </div>
    </div>
  );
};

export default Portfolio;
