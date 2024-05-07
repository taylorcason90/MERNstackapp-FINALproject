import React from 'react';
import { Link } from 'react-router-dom';

function SidebarLeft() {
  return (
    <div className="sidebar-left">

      <h6>News Feed</h6>
      <Link to="/news-feed">Go to News Feed</Link>
      <h6>Friends</h6>
      <h6>Groups</h6>
      <h6>Games</h6>
      <p>see more....</p>
    </div>
  );
}

export default SidebarLeft;
