// src/Modal.jsx
import React from 'react';
import './CSS/Modal.css'; // Optional: for styling

const Modal = ({ isOpen, onClose, galaxy }) => {
    if (!isOpen) return null; // Don't render anything if the modal is not open

    const handleCloseRefresh = () => {
        window.location.reload(); // Refresh the page
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>{galaxy.name}</h2>
                <h3>Solar Systems</h3>
                <ul>
                    {galaxy.solarSystems.map(solarSystem => (
                        <li key={solarSystem.id}>
                            <h4>{solarSystem.name}</h4>

                            {/* Display Stars in Solar System */}
                            <h5>Stars</h5>
                            <ul>
                                {solarSystem.stars.map((star, index) => (
                                    <li key={index}>
                                        <strong>{star.name}</strong> - Distance: {star.distance} light years, Mass: {star.mass}, Radius: {star.radius}, Luminosity: {star.luminosity}
                                    </li>
                                ))}
                            </ul>

                            {/* Display Planets in Solar System */}
                            <h5>Planets</h5>
                            <ul>
                                {solarSystem.planets.map((planet, index) => (
                                    <li key={index}>
                                        <strong>{planet.name}</strong> - Mass: {planet.mass}, Radius: {planet.radius}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                {/* Display Stars in Galaxy */}
                <h3>Galaxy Stars</h3>
                <ul>
                    {galaxy.stars.map((star, index) => (
                        <li key={index}>
                            <strong>{star.name}</strong> - Distance: {star.distance} light years, Mass: {star.mass}, Radius: {star.radius}, Luminosity: {star.luminosity}
                        </li>
                    ))}
                </ul>

                {/* Display Black Holes */}
                <h3>Black Holes</h3>
                <ul>
                    {galaxy.blackHoles.map((blackHole, index) => (
                        <li key={index}>
                            <strong>{blackHole.name}</strong> - Mass: {blackHole.mass}
                        </li>
                    ))}
                </ul>

                {/* Close button that refreshes the page */}
                <button className="overlay-button-modal" onClick={handleCloseRefresh}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
