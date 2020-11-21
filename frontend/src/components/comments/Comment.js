import React, { useState } from "react";
import CommentForm from './CommentForm';

function Comment({ comment, onCommentDelete, onCommentUpdate }) {
  const [isUpdate, setIsUpdate] = useState(false);

  const onUpdateComment = () => {
    setIsUpdate(true);
  };

  const onCommentFormSubmit = (commentData) => {
    const updatedComment = { ...comment, ...commentData };
    return onCommentUpdate(updatedComment)
        .then(() => setIsUpdate(false));
  };

  const onCommentFormCancel = () => {
    setIsUpdate(false);
  };

  return(
  <div>
    { isUpdate ? (
        <CommentForm
            initialBody={comment.body}
            onSubmit={onCommentFormSubmit}
            onCancel={onCommentFormCancel}
            formTitle="Update comment"
        />
    ) : (
      <div className="card mt-4">
        <div className="card-body">
          <div>{comment.body}</div>
          <p className="badge badge-primary text-wrap">{comment.user.name}</p>

          <div>
            <button
              className="btn btn-danger mt-3"
              onClick={() => onCommentDelete(comment)}
            >
              Delete
            </button>
            <button
              className="btn btn-warning mt-3 ml-2"
              onClick={onUpdateComment}>
              update
            </button>
          </div>
        </div>
      </div>
    )
    }
  </div>
  );
}

export default Comment;
