import React from 'react';
import Post from './Post';

function PostList({posts}) {
    return <div className="mt-4">
        {
        posts.map(post => <Post post= {post} />)
        }
    </div>
}

export default PostList;