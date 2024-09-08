import React from "react";

export default function Post({ post, onClick }) {
    return (
        <div 
        className="post post-preview"
        onClick={onClick} 
        >
            <h2>{post.title}</h2>
            <p>{post.content.substring(0, 100)}...</p>
            <p><strong>Author:</strong> {post.author}</p>
        </div>
    );
}