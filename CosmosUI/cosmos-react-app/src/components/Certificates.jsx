// src/components/Certificates.js

import React from 'react';
import '../CSS/Certificate.css'; // Import your CSS file for styling

const Certificates = () => {
  return (
    <div className="certificates-form-container">
      <h2>Certificates</h2>
      <form className="certificates-form">
        <ul>
          <li>Azure Fundamentals AZ-900</li>
          <li>Azure DevOps AZ-204 (Preparation Certificate)</li>
          <li>Certified by Coursera on successful completion of Stanford University Machine Learning Course</li>
          <li>Certified by IIT Bombay as Runner Up in the Vice-Clutch competition in Tech-fest IIT Bombay 2017</li>
          <li>Certified by ISI Kolkata (Indian Statistical Institute) in Statistical Analysis on Neural Network and Artificial Intelligence</li>
        </ul>
      </form>
    </div>
  );
};

export default Certificates;
