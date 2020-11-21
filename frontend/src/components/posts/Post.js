import React from 'react';

function Post({post}){
    return <div className="list">
        <div className="list-body">
            <div className="list-title">
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