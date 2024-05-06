import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:6000/api/auth/register', formData);
      console.log('Registration successful:', response.data);
      setRegistrationSuccess(true); // Update state to indicate successful registration
    } catch (error) {
      console.error('Registration failed:', error.response.data);
      // Handle registration error (e.g., display error message)
    }
  };

  // Render registration success message and redirect to login
  if (registrationSuccess) {
    return (
      <div>
        <h2>Registration Successful!</h2>
        <p>You can now proceed to log in.</p>
        {/* Add a link/button to navigate to the login page */}
        <a href="/login">Go to Login</a>
      </div>
    );
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for username, email, password */}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
