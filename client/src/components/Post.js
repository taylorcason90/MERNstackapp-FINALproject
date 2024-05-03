import React from 'react';

function Post({ username, content, imageUrl }) {
  return (
    <div className="post">
      <h4>{username}</h4>
      <p>{content}</p>
      {imageUrl && <img src={imageUrl} alt="Post" />}
      {/* Add like, comment, share buttons */}
    </div>
  );
}

export default Post;
