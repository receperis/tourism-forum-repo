import React, { useState } from 'react';

function CommentForm({ onSubmit }){
    const[body, setBody] = useState("");
    return(
        <div className="card">
            <div className= "card-body">
                <label>Comment:</label>
                    <textarea 
                        className="form-control"
                        placeholder= "Comment"
                        value={body}
                        onChange={e => setBody(e.target.value)} />
            </div>

            <div className="form-group">
                <button 
                    className="btn btn-info ml-3" 
                    onClick={() => onSubmit({ body })}>
                    Comment 
                </button>
            </div>
        </div>
            
       
    );
}

export default CommentForm;