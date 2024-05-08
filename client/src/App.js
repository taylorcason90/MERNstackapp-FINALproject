import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import UserProfile from './components/Layout/UserProfile';
import NewsFeed from './components/Layout/NewsFeed'; // Import NewsFeed component
import Navbar from './components/Layout/Navbar'; // Import Navbar component
import './App.css'; // Import CSS file

function App() {
  // State to track whether the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Render Navbar component */}
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          {/* UserProfile and NewsFeed accessible only when logged in */}
          {isLoggedIn && <Route path="/userprofile" element={<UserProfile />} />}
          {isLoggedIn && <Route path="/news-feed" element={<NewsFeed />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
