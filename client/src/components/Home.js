import React, { useState, useEffect } from 'react';
import Navbar from './Layout/Navbar';
import axios from 'axios';
import '../../src/App.css';

function Home() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          'https://api.pexels.com/v1/search?query=social&per_page=10',
          {
            headers: {
              Authorization: 'Bearer Te2AxJtvuJZTZLxU21ZBZiZ0jEFAaZiQ0QzjK2YzqbF4Ui2XghQzwO7B',
            },
          }
        );
        const fetchedImages = response.data.photos.map((photo) => photo.src.medium);
        setImages(fetchedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="main-content">
          <h1>News Feed</h1>
          {images.length > 0 && (
            <img
              src={images[currentImageIndex]}
              alt="Social Media"
              onClick={handleNextImage}
              style={{ cursor: 'pointer' }}
            />
          )}
          {!isAuthenticated && (
            <div>
              <h2 className="welcome">Welcome to our MetaLink App!</h2>
              <p className="create">Create your account now!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
