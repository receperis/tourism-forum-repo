import React, { useState, useEffect }  from "react";
import Api from "../../api/Api";
import PostList from "./PostList";
import PostsForm from "./PostsForm";

function PostsPage(postData) {
    const [posts, setPosts] = useState([]);
   
    useEffect(() => {
        Api.get("/posts")
            .then((res) => setPosts(res.data));
        }, []);

    const createPost = (postData) => {
        return Api.post('/posts', postData)
            .then((r) => console.log(r))
    };
    
    return (
        <div>
            <PostsForm onSubmit = {createPost} />

            <PostList posts= {posts} />
        </div>
    );
}

export default PostsPage;