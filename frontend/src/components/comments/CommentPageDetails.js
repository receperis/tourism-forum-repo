import React ,{ useState, useEffect }from 'react';
import CommentsList from './CommentsList';
import CommentsApi from "../../api/CommentsApi";


export default function CommentPageDetails({match}) {
    const [comments, setComments] = useState([]);

    const getAllCommentsByPostId = () => {
        return CommentsApi.getCommentById(match.params.id) 
           .then(res => setComments(res.data));
    }
   
    useEffect(() => {
        getAllCommentsByPostId();
    }, []);

    const deleteComment = (comment) => {
        return CommentsApi.deleteComment(comment.id)
             .then(() => setComments(comments.filter(a => a.id !== comment.id)));
    }

    return (
            <div>
              <h1>All the comments to post id = {match.params.id} </h1>
               {
                   <CommentsList
                        comment= {comments}
                        onCommentDelete = {deleteComment} 
                    />
               }
            </div>
        );
  
}