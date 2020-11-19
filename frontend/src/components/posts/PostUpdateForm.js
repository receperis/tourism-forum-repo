import React, { useState } from 'react';

function PostUpdateForm({onSubmit, initialTitle, initialBody}) {
    const onSavePostClick = () => {
        const postData = { title, body };
        onSubmit(postData)
            .then(() => {
               setTitle("");
               setBody(""); 
            })
            .catch((err) => alert("error occured"));
    };
    const [title, setTitle] = useState(initialTitle ? initialTitle : "");
    const [body, setBody] = useState(initialBody ? initialBody : "");

    return (
        <div className="card mt-4">
        <div className="card-body">
            <h4 className="card-title">Update Post</h4>
            <div>
                <div className="form-group">
                    <label>Title:</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Body:</label>
                    <textarea
                        type="password" 
                        placeholder="Post body" 
                        className="form-control" 
                        value={body}
                        onChange={e => setBody(e.target.value)} />
                </div>
                <div className="form-group">
                    <button 
                        className="btn btn-success" 
                        onClick={onSavePostClick}>
                        Save Post
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default PostUpdateForm;
