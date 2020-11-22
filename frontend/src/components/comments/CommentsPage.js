
import React ,{ useState, useEffect } from "react";
import CommentsList from './CommentsList';
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


  /*   const createComment = (commentData) => {
        return CommentsApi.createComment(commentData)
        .then((res)=> {
            setComments([res.data, ...comments]);
        });
    }; */

    const updateComment  = (comment) => {
        return CommentsApi.updateComment(comment)
            .then(res => console.log(res.data));
    }

    const deleteComment = (comment) => {
       return CommentsApi.deleteComment(comment.id)
            .then(() => setComments(comments.filter(a => a.id !== comment.id)));
    }
 
    return (
        
        <div>
           {/* <CommentForm onSubmit = {createComment}/>  */}
           {
               <CommentsList
                    comment= {comments}
                    onCommentDelete = {deleteComment} 
                    onCommentUpdate = {updateComment}
                />
           }
        </div>
    );
}

export default CommentsPage;