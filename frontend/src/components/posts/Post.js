import React, { useState } from "react";
import PostsApi from "../../api/PostsApi";
import PostsForm from "./PostsForm";
import PostUpdateForm from "./PostUpdateForm";

function Post({ post, onPostUpdate, onPostDelete }) {

  const [isUpdate, setIsUpdate] = useState(false);
  const [isShow , setIsShow] = useState(false);

  const onUpdateClick = () => {
    setIsUpdate(true);
  };

  const onCreateClick = () => {
    setIsShow(true);
  };

  const onPostUpdateFormSubmit = (postData) => {
    const updatedPost = { ...post, ...postData };
    return onPostUpdate(updatedPost).then(() => setIsUpdate(false));
  };

  const onPostCreateFormSubmit = (postData) => {
      const createPost = { ...post, ...postData };
      return onPostUpdate(createPost).then(() => setIsShow(false));
  }

  return (
    <div>
        {isShow ? (
            <PostsForm
                onSubmit={onPostCreateFormSubmit}
            />
        ):(
            <div className="card mt-4">
            <div className="card-body">
              <div className="card-title">
                <h3>{post.title}</h3>
              </div>
              <div>{post.body}</div>
              
              <div className="mt-3">
                <button className="btn btn-warning" onClick={onUpdateClick}>
                  Update
                </button>
                <button
                  className="btn btn-danger ml-3"
                  onClick={() => onPostDelete(post)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
        
        
      {isUpdate ? (
        <PostUpdateForm
          initialTitle={post.initialTitle}
          initialBody={post.initialBody}
          onSubmit={onPostUpdateFormSubmit}
        />
      ) : (
        <div className="card mt-4">
          <div className="card-body">
            <div className="card-title">
              <h3>{post.title}</h3>
            </div>
            <div>{post.body}</div>

            <div className="mt-3">
              <button className="btn btn-warning" onClick={onUpdateClick}>
                Update
              </button>
              <button
                className="btn btn-danger ml-3"
                onClick={() => onPostDelete(post)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Post;

