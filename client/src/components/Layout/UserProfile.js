import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SidebarLeft from './SidebarLeft.js';
import SidebarRight from './SidebarRight.js'
import Post from '../Post.js';
import '../../App.js'

function UserProfile() {
  const token = localStorage.getItem('token');
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPostShared, setIsPostShared] = useState(false); // State to track shared posts

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserProfile(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setLoading(false);
      }
    };
    if (token) {
      fetchUserProfile();
    }
  }, [token]);

  const handleSharePost = () => {
    setIsPostShared(true); // Update state to indicate that a post has been shared
    // Additional logic for handling shared posts
  };

  // Mock posts data for demonstration
  const posts = [
    {
      id: 1,
      username: 'taylor c',
      content: 'Laughter is the way to go!',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      username: 'taylor c',
      content: 'I love social media',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="user-profile-container">
      {/* <h1>My Profile</h1> */}
      <div className="profile-details">
      <div className="left-sidebar">
              <SidebarLeft />
            </div>
            <div className="user-main-content"></div>
        {loading ? (
          <p>Loading user profile...</p>
        ) : userProfile ? (
          <>
           
            
              <p>Username: {userProfile.username}</p>
              <p>Email: {userProfile.email}</p>
              {/* Additional user details can be displayed here */}

              {/* Display user's posts */}
              {posts.map((post) => (
                <Post
                  key={post.id}
                  username={post.username}
                  content={post.content}
                  imageUrl={post.imageUrl}
                  onSharePost={handleSharePost} // Pass the share handler callback
                  isShared={isPostShared} // Pass the shared state to the Post component
                />
              ))}
          </>
        ) : (
          <p>No user profile found.</p>
        )}
      </div>
      <div className="right-sidebar">
              <SidebarRight />
            </div>
    </div>
  );
}

export default UserProfile;
