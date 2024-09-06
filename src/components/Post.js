import React from "react";

export default function Post({ post, onClick }) {
    return (
        <div onClick={onClick} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px'}}>
            <h2>{post.title}</h2>
            <p>{post.content.substring(0, 100)}...</p>
            <p><strong>Author:</strong> {post.author}</p>
        </div>
    );
}