import React from "react";
import Post from "./Post";
//import posts from "../data/posts.json";

export default function PostList({ posts, onPostClick }) {
    return (
        <div className="post-list">
            {posts.map(post => (
                <Post key={post.id} post={post} onClick={() => onPostClick(post.id)} />
            ))}
        </div>
    );
}