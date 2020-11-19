import React, {useState} from 'react';
import Auth from '../../services/Auth';
import PostUpdateForm from './PostUpdateForm';

function Post({post, onPostUpdate, onPostDelete }) {
    const [isUpdate, setIsUpdate] = useState(false);
    const onUpdateClick = () => {
        setIsUpdate(true);
    };

    const onPostUpdateFormSubmit = (postData) => {
        const updatedPost = {...post, ...postData};
        return onPostUpdate(updatedPost)
            .then(() => setIsUpdate(false));
    };

    const user = Auth.getUser();
    const isMyPost = user && post.user.id === user.id;

    return (
    <div>
        {
            isUpdate ? <PostUpdateForm 
                            initialTitle={post.title} 
                            initialBody={post.body}
                            onSubmit={onPostUpdateFormSubmit}
                        />
            :
            <div className="card mt-4">
            <div className="card-body">
            <div className="card-title">
                <h3>
                    {post.title}
                </h3>  
                </div>
                <div>
                    {post.body}
                </div>

                {isMyPost && (
                    <div className="mt-3">
                        <button className="btn btn-warning" onClick={onUpdateClick}>
                            Update
                        </button>
                        <button className="btn btn-danger ml-3" onClick= {() => onPostDelete(post)}>
                            Delete
                        </button>
                    </div>
                )}
            </div>    
        </div>
        }
        
    </div>
    
    );
}

export default Post;