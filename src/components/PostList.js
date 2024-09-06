import React from "react";
import Post from "./Post";
import posts from "../data/posts.json";

export default function PostList({ onPostClick }) {
    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} post={post} onPostClick={() => onPostClick(post.id)} />
            ))}
        </div>
    );
}