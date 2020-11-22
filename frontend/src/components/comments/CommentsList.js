import React from 'react';
import Comment from './Comment';

function CommentsList({comment, onCommentDelete, onCommentUpdate}) {
    return <div className="mt-4">
        {
        comment.map(comment => <Comment 
                key={comment.id} 
                comment= {comment} 
                onCommentDelete = {onCommentDelete} 
                onCommentUpdate = {onCommentUpdate}/>)
        }
    </div>
}
export default CommentsList;  