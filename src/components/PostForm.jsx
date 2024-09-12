import React, { useState } from "react";

export default function PostForm({ onAddPost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            id: Date.now(),
            title,
            content,
            author
        };

        onAddPost(newPost);

        setTitle('');
        setContent('');
        setAuthor('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Title: 
                    <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                </label>
            </div>

            <div>
                <label>Content:
                    <textarea 
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </label>
            </div>

            <div>
                <label>Author:
                    <input 
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)} />
                </label>
            </div>

            <button type="submit">Add Post</button>
        </form>
    );
}