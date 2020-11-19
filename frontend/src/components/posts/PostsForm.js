import React, { useState } from 'react';

function PostsForm({ onSubmit }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title" >Create a new post</h4>
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

                    <div className= "form-group">
                        <label>Body:</label>
                        <textarea 
                            className="form-control"
                            placeholder= "Post Body"
                            value={body}
                            onChange={e => setBody(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <button 
                            className="btn btn-info" 
                            onClick={() => onSubmit({title, body})}>
                            Post 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostsForm;