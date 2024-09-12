import React, { useState } from "react";
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import initialPosts from './data/posts.json';
import Header from "./components/Header";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const selectedPost = posts.find((post) => post.id === selectedPostId);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="App">
      <Header />
      { selectedPost ? (
        <PostDetail post={selectedPost} />
      ) : (
        <>
          <PostForm onAddPost={handleAddPost} />
          <PostList  posts={posts} onPostClick={setSelectedPostId} />
        </>
      )}
      { selectedPost && <button className="button" onClick={() => setSelectedPostId(null)}>Back to list</button>}
    </div>
  );
}

export default App;
