import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';
import Post from '../Post';

function UserProfile() {
  const token = localStorage.getItem('token');
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');

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

  const handleSharePost = async () => {
    try {
      // Assuming there's an API endpoint to create a new post
      const response = await axios.post(
        'http://localhost:4000/api/posts',
        { content: newPostContent },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Update posts state with the new post
      setPosts([...posts, response.data]);
      // Clear input field after posting
      setNewPostContent('');
    } catch (error) {
      console.error('Error sharing post:', error);
    }
  };

  return (
    <div className="user-profile-container">
      <div className="left-sidebar">
        <SidebarLeft />
      </div>
      <div className="profile-details">
        {loading ? (
          <p>Loading user profile...</p>
        ) : userProfile ? (
          <>
            <p>Username: {userProfile.username}</p>
            <p>Email: {userProfile.email}</p>

            {/* User Post Creation */}
            <div className="post-create-section">
              <textarea
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                placeholder="What's on your mind?"
                rows={3}
              />
              <button onClick={handleSharePost}>Share</button>
            </div>

            {/* Display user's posts */}
            {posts.map((post) => (
              <Post
                key={post.id}
                username={post.username}
                content={post.content}
                imageUrl={post.imageUrl}
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
