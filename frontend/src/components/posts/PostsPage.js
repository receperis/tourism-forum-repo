import React, { useEffect, useState } from "react";
import PostsApi from '../../api/PostsApi';
import PostsList from "./PostsList";
import PostUpdateForm from './PostUpdateForm';

function PostsPage() {
    const [posts, setPosts] = useState([]);
    const [createForm, setCreateForm] = useState(false);

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
                setCreateForm(false);
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

    const createNewPost = () => {
        setCreateForm(true);
    }


    return (
        <div>
            <div className="ml-7">
                <button className="btn btn-primary float-right" onClick= {() => createNewPost()}> Create a new Post</button>
            </div>
            {createForm ? 
                <PostUpdateForm 
                    onSubmit={createPost}
                />
             : 
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