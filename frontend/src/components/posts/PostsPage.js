import React, { useEffect, useState } from "react";
import PostsApi from '../../api/PostsApi';
import PostForm from './PostForm';
import PostsList from "./PostsList";


function PostsPage() {
    const [posts, setPosts] = useState([]);

    const getAll = () => {
        PostsApi.getAllPosts()
            .then((res) => {
                setPosts(res.data.sort((a,b) => a.id - b.id));
            });
    }
    useEffect(() => {
        getAll();   
    }, []);

    const createPost = (postData) => {      
        return PostsApi.createPost(postData)
            .then((res) => {
                setPosts([res.data , ...posts]);
            });
    };

    const updatedPost = (updatedPost) => {
        return PostsApi.updatePost(updatedPost)
            .then(res => getAll());
    };

    const deletePost = (post) => {
        return PostsApi.deletePost(post.id)
            .then(() => setPosts(posts.filter(a => a.id !== post.id)));
    }

    return (
        <div>
            <PostForm onSubmit={createPost} />   
            {
                <PostsList 
                    posts={posts}
                    onPostUpdate={updatedPost} 
                    onPostDelete={deletePost}
                />
      
            } 
            
        </div>    
    );
}

export default PostsPage;