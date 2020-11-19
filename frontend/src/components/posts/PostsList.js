import React from 'react';
import Post from './Post';

function PostsList({posts, onPostUpdate, onPostDelete}) {
    return <div className="mt-6">
        Posts List
        {
          posts.map(post => 
            <Post key={post.id}
                post={post}
                onPostUpdate = {onPostUpdate}
                onPostDelete={onPostDelete}
            />
         )  
        }
    </div>

}

export default PostsList;