import React, { useState } from "react";
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import posts from './data/posts.json';

function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const selectedPost = posts.find(post => post.id === selectedPostId);
  return (
    <div className="App">
      <h1>Welcom to Blog!</h1>
      { selectedPost ? (
        <PostDetail post={selectedPost} />
      ) : (
        <PostList onPostClick={setSelectedPostId} />
      )}
      { selectedPost && <button className="button" onClick={() => setSelectedPostId(null)}>Back to list</button>}
    </div>
  );
}

export default App;
