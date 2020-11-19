
import React ,{ useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import CommentCard from './CommentCard';
import CommentsApi from "../../api/CommentsApi";

function CommentsPage() {
    const [comments, setComments] = useState([]);

    const getAll = () => {
        CommentsApi.getAllComments()
            .then(res => setComments(res.data));
    }

    useEffect(() => {
        getAll();
    }, []);

    const createComment = (commentData) => {
        console.log("comment data",commentData);
        return CommentsApi.createComment(commentData)
        .then((res)=> {
            setComments([res.data, ...comments]);
        });
    };

    const deleteComment = (comment) => {
       return CommentsApi.deleteComment(comment.id)
            .then(() => setComments(comments.filter(a => a.id !== comment.id)));
    }
 
    return (
        <div>
           <CommentForm onSubmit = {createComment} />
           {
               <CommentCard 
                    comments= {comments}
                    onCommentDelete = {deleteComment} 
                />
           }
        </div>
    );
}

export default CommentsPage;