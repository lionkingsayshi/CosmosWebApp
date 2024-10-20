import React, { useState } from 'react';
import GalaxiesList from './GalaxiesList.jsx'; // Import the GalaxiesList component
import './Dashboard.css'; // Optional: for styling

const Dashboard = () => {
    // State to manage displaying GalaxiesList
    const [showGalaxies, setShowGalaxies] = useState(false);
    
    // List of image file names
    const imageFiles = ['galaxy2.jpg'];

    return (
        <div className="full-screen-grid">
            {imageFiles.map((image, index) => (
                <img key={index} src={`/images/${image}`} alt={`Image ${index + 1}`} className="full-screen-image" />
            ))}

            {/* Buttons Overlay */}
            <div className="button-container">
                {/* Button to show GalaxiesList */}
                <button className="overlay-button" onClick={() => setShowGalaxies(true)}>
                    Load Galaxies
                </button>
                {/* Additional button can be added here */}
            </div>

            {/* Conditionally render GalaxiesList */}
            {showGalaxies && <GalaxiesList />}
        </div>
    );
};

export default Dashboard;
