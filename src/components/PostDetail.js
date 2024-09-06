import React from "react";

export default function PostDetail({ post }) {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p><strong>Author:</strong> {post.author}</p>
        </div>
    );
}