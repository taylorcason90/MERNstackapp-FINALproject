import React, { useState, useEffect } from 'react';
// import Navbar from './Layout/Navbar'; // Import the correct Navbar component
import axios from 'axios';
import '../../src/App.css';

function Home({ isLoggedIn }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          'https://api.pexels.com/v1/search?query=technology&per_page=1',
          {
            headers: {
              Authorization: 'Te2AxJtvuJZTZLxU21ZBZiZ0jEFAaZiQ0QzjK2YzqbF4Ui2XghQzwO7B',
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

  return (
    <div>
      {/* <Navbar /> Render the correct Navbar component */}
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
          {!isLoggedIn && (
            <div className="welcome-section">
              <p className="create">Create your account now!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
