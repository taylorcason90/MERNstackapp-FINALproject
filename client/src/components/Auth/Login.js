import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const apiUrl = 'http://localhost:4000/api/auth/login';

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(apiUrl, { email, password });

      if (response.status === 200) {
        const { token } = response.data;
        console.log('Received token', token);
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
        console.log('Login successful!');
        navigate(`/userprofile`); // Redirect to user's profile page after login
      } else {
        console.error('Login failed:', response.data.error);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
