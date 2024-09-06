import React from "react";

export default function PostDetail({ post }) {
    return (
        <article className="post">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p><strong>Author:</strong> {post.author}</p>
        </article>
    );
}