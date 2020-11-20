import React from 'react';
import Post from './Post';

function PostsList({posts, onPostUpdate, onPostDelete, onPostComment}) {
    return <div className="mt-4">
        {
          posts.map(post => (<Post 
                key={post.id}
                post={post}
                onPostUpdate = {onPostUpdate}
                onPostDelete={onPostDelete}
                onPostComment= {onPostComment}/>)
         )  
        }
    </div>

}

export default PostsList;