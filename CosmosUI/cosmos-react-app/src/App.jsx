import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage'; // Import the login page
import Dashboard from './Dashboard'; // Import the protected page after login
import Portfolio from './Portfolio/Portfolio';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Default route for Login Page */}
                <Route path="/" element={<LoginPage />} />

                {/* Protected Dashboard Route */}
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Protected Portfolio page Route */}
                <Route path="/Portfolio/Portfolio" element={<Portfolio/>} />

                {/* Redirect any undefined routes */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
