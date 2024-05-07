import React, { useState } from 'react';

function Post({ username, content, imageUrl, onSharePost, isShared }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  const handleLike = () => {
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);
    } else {
      setLikes(likes - 1);
      setIsLiked(false);
    }
  };

  const handleShare = () => {
    onSharePost(); // Invoke the callback to handle share action
    // Additional logic based on isShared state
    if (isShared) {
      console.log('This post has been shared!');
      // Perform actions related to shared posts
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentInput.trim() !== '') {
      const newComment = {
        id: comments.length + 1,
        username: username, // Assuming `username` is a string
        text: commentInput,
      };
      setComments([...comments, newComment]);
      setCommentInput('');
    }
  };

  return (
    <div className="post">
      <h4>{username}</h4>
      <p>{content}</p>
      {imageUrl && <img src={imageUrl} alt="Post" />}
      <div className="post-actions">
        <button onClick={handleLike}>{isLiked ? 'Unlike' : 'Like'}</button>
        <span>{likes} Likes</span>
        <button onClick={handleShare}>Share</button>
      </div>
      <div className="comments-section">
        <h5>Comments:</h5>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <strong>{comment.username}</strong>: {comment.text}
            </li>
          ))}
        </ul>
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
          />
          <button type="submit">Comment</button>
        </form>
      </div>
    </div>
  );
}

export default Post;
