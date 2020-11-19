import React from 'react';
import Comment from './Comment';

function CommentCard({comments, onCommentDelete}) {
    return <div className="mt-4">
        {
        comments.map(comment => <Comment key={comment.id} comment= {comment} onCommentDelete = {onCommentDelete} />)
        }
    </div>
}
export default CommentCard;  