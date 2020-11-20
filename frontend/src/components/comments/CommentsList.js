import React from 'react';
import Comment from './Comment';

function CommentsList({comment, onCommentDelete, onCommentUpdate}) {
    console.log("comments details",comment);
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