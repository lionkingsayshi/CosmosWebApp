// src/apiService.js
import axios from 'axios';

const API_URL = 'https://localhost:7241/api/cosmos'; // Adjust this to your API endpoint

export const getGalaxies = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getGalaxyById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const addGalaxy = async (galaxy) => {
    const response = await axios.post(API_URL, galaxy);
    return response.data;
};

export const updateGalaxy = async (id, galaxy) => {
    const response = await axios.put(`${API_URL}/${id}`, galaxy);
    return response.data;
};

export const deleteGalaxy = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
