import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">MetLink</Link>
        </div>
        
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          {/* Add search button if needed */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
