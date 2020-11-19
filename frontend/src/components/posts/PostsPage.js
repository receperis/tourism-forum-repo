import React, { useEffect, useState } from "react";
import PostsApi from '../../api/PostsApi';
import PostsForm from './PostsForm';
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
        PostsApi.createPost("/posts",postData)
            .then((res) => {
                setPosts([res.data , ...posts]);
            });
        console.log(postData);
    };

    const updatedPost = (updatedPost) => {
        return PostsApi.updatePost("/posts",updatedPost)
            .then(res => getAll());
    };

    const deletePost = (post) => {
        return PostsApi.deletePost(post.id)
            .then(() => setPosts(posts.filter(a => a.id !== post.id)));
    }

    return (
        <div>
            <div className="ml-7">
                <button className="btn btn-primary float-right" onClick= {() => <PostsForm onSubmit = {console.log("checking data")}  onPostCreate={createPost} />}> Create a new Post</button>
            </div>     
             <PostsList 
                posts={posts}
                onPostUpdate={updatedPost} 
                onPostDelete={deletePost}
            />
  
        </div>    
    );
}

export default PostsPage;