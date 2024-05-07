import React, { useState, useEffect } from 'react';
import Navbar from './Layout/Navbar';
import axios from 'axios';
import '../../src/App.css';

function Home() {
  const [image, setImage] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          'https://api.pexels.com/v1/search?query=technology&per_page=1', // New search query for technology-related image
          {
            headers: {
              Authorization: 'Bearer YOUR_API_KEY_HERE', // Replace YOUR_API_KEY_HERE with your Pexels API key
            },
          }
        );
        if (response.data.photos.length > 0) {
          setImage(response.data.photos[0].src.medium);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="main-content">
          <h1 className="title">Welcome to MetLink</h1>
          {image && (
            <img
              src={image}
              alt="Technology"
              className="main-image"
            />
          )}
          {!isAuthenticated && (
            <div className="welcome-section">
              {/* <h2 className="welcome">Welcome to our MetaLink App!</h2> */}
              <p className="create">Create your account now!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
