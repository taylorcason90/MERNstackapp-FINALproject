import React from 'react';
import Post from '../Post'; // Import the Post component

function NewsFeed() {
  // Mock shared posts data for demonstration
  const sharedPosts = [
    {
      id: 1,
      username: 'user1',
      content: 'Shared post from user1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      username: 'user2',
      content: 'Shared post from user2',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="news-feed">
      <h1>News Feed</h1>
      {sharedPosts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          content={post.content}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default NewsFeed;
