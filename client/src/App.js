import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import UserProfile from './components/Layout/UserProfile'; // Import UserProfile component

function App() {
  // State to track whether the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        {/* Define routes for different components */}
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          {/* Pass setIsLoggedIn function to Login component */}
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        {/* Conditionally render UserProfile component based on isLoggedIn state */}
        {isLoggedIn && <UserProfile />}
      </div>
    </Router>
  );
}

export default App;
