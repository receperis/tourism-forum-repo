import React from "react";
import PostCard from "./PostCard";
import PostsApi from '../../api/PostsApi';
import PostForm from './PostForm';

function PostsPage() {
    //console.log(PostsApi.getAllPosts());
    return (
        <div>
             Posts page
             <PostForm />

        </div>
       
    );
}

export default PostsPage;