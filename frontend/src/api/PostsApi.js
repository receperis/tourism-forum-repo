import Api from "./Api";

class PostsApi {
    getAllPosts() {
        return Api.get('/posts');
    }

    getPostById(id) {
        return Api.get('/posts/'+id);
    }

    createPost(data) {
        return Api.post('/posts', data);
    }

    updatePost(data) {
        return Api.put('/posts', data);
    }

    deletePost(id) {
        return Api.delete('/posts/'+id);
    } 
}

export default new PostsApi();