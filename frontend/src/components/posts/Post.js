import React from 'react';

function Post({post}){
    return <div className="card mt-4">
        <div className="card-body">
            <div className="card-title">
                <h3>
                    {post.title}
                </h3>
            </div>
            <div>
                {post.body}
            </div>
        </div>
    </div>
}

export default Post;