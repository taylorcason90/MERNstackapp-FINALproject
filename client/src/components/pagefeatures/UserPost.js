// Inside UserProfile component
const [userPosts, setUserPosts] = useState([]);

// Fetch user posts and update state
const fetchUserPosts = async () => {
  try {
    const response = await axios.get('http://localhost:4000/api/user/posts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUserPosts(response.data);
  } catch (error) {
    console.error('Error fetching user posts:', error);
  }
};

useEffect(() => {
  if (token) {
    fetchUserPosts();
  }
}, [token]);

// Render user posts using Post component
{userPosts.map((post) => (
  <Post
    key={post.id}
    username={post.username}
    content={post.content}
    imageUrl={post.imageUrl}
    onSharePost={handleSharePost}
    isShared={isPostShared}
  />
))}
