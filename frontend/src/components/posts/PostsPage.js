import React, { useEffect, useState } from "react";
import PostsApi from '../../api/PostsApi';
import PostForm from './PostForm';
import PostsList from "./PostsList";
import { Link } from 'react-router-dom'


function PostsPage() {
    const [posts, setPosts] = useState([]);
    const [createForm, setCreateForm] = useState(false);

    const getAll = () => {
        PostsApi.getAllPosts()
            .then((res) => {
                setPosts(res.data.sort((a,b) => b.id - a.id));
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

   /*  const commentPost = (post) => {
        return CommentsApi.getCommentById(post.id)
            .then((res) => console.log(res.data));
    } */

    const commentPost = (post) => {
        console.log("post details",post);
      /*   return CommentsApi.getCommentById(post.id)
        .then((res) =>  */
        <Link to={`/comments/${post.id}`}/>;
    }

    const onCreateNewPost = () => {
        setCreateForm(true);
    }

    const onCancelCreateForm = () => {
        setCreateForm(false);
    }


    return (
        <div>
            {createForm ? 
                <PostForm onSubmit={createPost} onCancel={onCancelCreateForm} />   
            :
                <>
                    <button className="btn btn-primary" onClick= {onCreateNewPost}> Create a new Post</button>
                    <PostsList 
                        posts={posts}
                        onPostUpdate={updatedPost} 
                        onPostDelete={deletePost}
                        onPostComment={commentPost}
                    />
                </>
            } 
            
        </div>    
    );
}

export default PostsPage;