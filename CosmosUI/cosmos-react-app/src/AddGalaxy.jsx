import React, { useState } from 'react';
import axios from 'axios';

const AddGalaxy = () => {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/galaxies', { name });
            setName(''); // Optional: Reset the input field after submission
        } catch (error) {
            console.error('Error adding galaxy:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Galaxy Name"
                required
            />
            <button type="submit">Add Galaxy</button>
        </form>
    );
};

export default AddGalaxy;
