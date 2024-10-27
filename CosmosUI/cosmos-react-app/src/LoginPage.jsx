import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Login.css'; // Import your CSS file for styling
import credentials from './LoginCredential.json';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation logic for username and password
    // Basic validation
    if (!username || !password) {
        setError('Both fields are required');
        return;
      }
  
      // Check against imported credentials
      if (username === credentials.username && password === credentials.password) {
        setError('');
        navigate('/dashboard'); // Redirect to dashboard if authentication is successful
      } else {
        setError('Invalid username or password');
      }
  };
  const goToPortfolio = () => {
    navigate('/Portfolio/Portfolio'); // Navigate to the Portfolio page
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Login ID:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label htmlFor="password">PWD:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div class="button-group">
          <button type="submit">Login</button>
          <a>Or</a>
          <button type="button" onClick={goToPortfolio}>Go to Souvik's Portfolio</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
