import React, { useState } from "react";
import PostForm from "./PostForm";
import Auth from '../../services/Auth';

function Post({ post, onPostUpdate, onPostDelete, onPostComment}) {

  const [isUpdate, setIsUpdate] = useState(false);

  const user = Auth.getUser();
  const isMyPost = user && post.user.id === user.id

  const onUpdateClick = () => {
    setIsUpdate(true);
  };

  const onPostFormSubmit = (postData) => {
    const updatedPost = { ...post, ...postData };
    return onPostUpdate(updatedPost)
      .then(() => setIsUpdate(false));
  };

  const onPostFormCancel = () => {
    setIsUpdate(false)
  }

  return (
    <div>
      {
      isUpdate ? (
       
       <PostForm
          initialTitle={post.title}
          initialBody={post.body}
          onSubmit={onPostFormSubmit}
          onCancel={onPostFormCancel}
          formTitle="Update post"
        />
        )
       : (
        <div className="card mt-4">
          <div className="card-body">
            <div className="card-title">
              <h3>{post.title}</h3>
              <p className="badge badge-primary text-wrap">{post.user.name}</p>
            </div>
            <div>{post.body}</div>

            <div className="mt-3">
              {isMyPost && (
                <>
                  <button className="btn btn-warning" onClick={onUpdateClick}>
                    Update
                  </button>
                  <button
                    className="btn btn-danger ml-3"
                    onClick={() => onPostDelete(post)}
                  >
                    Delete
                  </button>
                </>
              )}
              <button className="btn btn-info mcl-3"
              onClick={() => onPostComment(post)}>
              Add Comment 
              </button>
            </div>
            
          </div>
        </div>
        )
      }  
    </div>
  );
}
export default Post;

