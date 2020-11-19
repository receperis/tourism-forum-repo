import React, { useState } from "react";

function PostForm({onSubmit}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onCreatePostClick = () => {
    const postData = { title, body };
    onSubmit(postData)
        .then(() => {
           setTitle("");
           setBody(""); 
        })
        .catch((err) => alert("error occured"));
};

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h4 className="card-title">Create a post</h4>
        <div>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Body:</label>
            <textarea
              className="form-control"
              placeholder="Post Body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button
              className="btn btn-primary"
              onClick={onCreatePostClick}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
