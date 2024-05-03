import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
      
      <h1><b>MetLink</b></h1>
      <div>
        <button type="button" className="hmpgbtn"><Link to="/" className="link">Home</Link></button>
       <button type="button" className="hmpgbtn"><Link to="/login" className="link">Login</Link></button>
        <button type="button" className="hmpgbtn"><Link to="/register" className="link">Register</Link></button>
      </div>
    </nav>
  );
}

export default Navbar;
