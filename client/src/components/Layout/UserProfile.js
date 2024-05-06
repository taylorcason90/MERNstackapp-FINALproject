import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';

function UserProfile() {
  const token = localStorage.getItem('token');
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:6000/api/user-profile/`, {
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

  return (
    <div className="user-profile-container">
      <h1>My Profile</h1>
      {loading ? (
        <p>Loading user profile...</p>
      ) : userProfile ? (
        <div className="profile-details">
          <p>Username: {userProfile.username}</p>
          <p>Email: {userProfile.email}</p>
          {/* Additional user details can be displayed here */}
          <SidebarLeft />
          <SidebarRight />
        </div>
      ) : (
        <p>No user profile found.</p>
      )}
    </div>
  );
}

export default UserProfile;
