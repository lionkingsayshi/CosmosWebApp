import React, { useEffect, useState } from 'react';
import './Galaxy.css'; // Import the CSS fileimport React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './Modal'; // Import your Modal component

const GalaxiesList = () => {
    const [galaxies, setGalaxies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedGalaxy, setSelectedGalaxy] = useState(null); // State for selected galaxy
    const [modalOpen, setModalOpen] = useState(false); // State for modal visibility

    useEffect(() => {
        const fetchGalaxies = async () => {
            try {
                const response = await axios.get('https://localhost:7241/api/cosmos');
                setGalaxies(response.data);
            } catch (error) {
                console.error("Error fetching galaxies:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGalaxies();
    }, []);

    if (loading) {
        return <p>Loading galaxies...</p>;
    }

    const handleGalaxyClick = (galaxy) => {
        setSelectedGalaxy(galaxy);
        setModalOpen(true);
    };

    return (
        <div>
            <h1>Galaxies</h1>
            <ul>
                {galaxies.map(galaxy => (
                    <li key={galaxy.id} onClick={() => handleGalaxyClick(galaxy)} style={{ cursor: 'pointer' }}>
                        <h2>{galaxy.name}</h2>
                    </li>
                ))}
            </ul>

            {/* Modal for galaxy details */}
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} galaxy={selectedGalaxy} />
        </div>
    );
};

export default GalaxiesList;
