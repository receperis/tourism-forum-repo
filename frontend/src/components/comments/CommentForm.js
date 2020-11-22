import React, { useState } from "react";

export default function CommentForm({ onSubmit, initialBody, onCancel, formTitle}) {
  const [body, setBody] = useState(initialBody || "");

  const onCreateCommentClick = (e) => {
    e.preventDefault();
    const postData = { body };
    onSubmit(postData).catch((err) => {
      alert("error occured");
    });
    };
  return (
    <div className="comment">
      <div className="card-body">
        <h4 className="card-title">{formTitle || "Create a comment"}</h4>
        <form onSubmit={onCreateCommentClick}>
          <div className="form-group">
            <label>Body:</label>
            <textarea
              className="form-control"
              placeholder="Comment Body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <button className="btn btn-info" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
