import React from 'react';

function Comment({comment, onCommentDelete}){
    return <div className="card mt-4">
        <div className="card-body">
            <div>
                {comment.body}
            </div>

            <div>
                <button className="btn btn-danger" onClick={() => onCommentDelete(comment) }>
                    Delete Comment
                </button>
            </div>
        </div>
    </div>
}

export default Comment;