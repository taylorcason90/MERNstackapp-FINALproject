import React, { useState, useEffect } from 'react';
import Navbar from './Layout/Navbar';
import SidebarLeft from './Layout/SidebarLeft';
import SidebarRight from './Layout/SidebarRight';
import UserProfile from './Layout/UserProfile';
import Post from './Post';
import axios from 'axios'; // Import Axios for making HTTP requests
import '../../src/App.css'
function Home() {
  const [images, setImages] = useState([]); // State to store fetched images
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track current image index
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track user authentication status

  useEffect(() => {
    // Function to fetch images from Pexels API
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          'https://api.pexels.com/v1/search?query=social&per_page=10', // Example API endpoint
          {
            headers: {
              Authorization: 'Te2AxJtvuJZTZLxU21ZBZiZ0jEFAaZiQ0QzjK2YzqbF4Ui2XghQzwO7B', // Add your Pexels API key here
            },
          }
        );

        // Extract image URLs from the API response
        const fetchedImages = response.data.photos.map((photo) => photo.src.medium);
        setImages(fetchedImages); // Set fetched images in state
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages(); // Call the fetchImages function when the component mounts
  }, []); // Empty dependency array ensures this effect runs once

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle to the next image
  };

  // Check user authentication status on component mount
  useEffect(() => {
    const token = localStorage.getItem('token'); // Retrieve token from local storage
    setIsAuthenticated(!!token); // Update isAuthenticated based on token presence
  }, []);

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="main-content">
          {/* Main content area */}
          {!isAuthenticated && (
            <div className='welcome'>
              <h2>Welcome to our MetaLink App!</h2>
              <p>Create your account now!.</p>
            </div>
          )}
          
          {/* Display the current image */}
          {images.length > 0 && (
            <img className='fetchimage'
              src={images[currentImageIndex]}
              alt="Social Media"
              onClick={handleNextImage}
              style={{ cursor: 'pointer' }}
            />
          )}
          {/* Render the Post component only if the user is authenticated */}
          {isAuthenticated && (
            <div>
              <Post
                username="John Doe"
                content="This is a post."
                imageUrl="https://example.com/image1.jpg"
              />
              {/* Add more posts or feed items here */}
            </div>
          )}
         
        </div>
        {/* Render SidebarLeft and SidebarRight only if the user is authenticated */}
        {isAuthenticated && (
          <React.Fragment>
            <SidebarLeft />
            <SidebarRight />
            <UserProfile />
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default Home;
