import React ,{ useState, useEffect }from 'react';
import CommentsList from './CommentsList';
import CommentsApi from "../../api/CommentsApi";

export default function CommentPageDetails({match}) {
    console.log("match",match.params.id);

    const id = Number(match.params.id);
    console.log("id",id);
    const [comments, setComments] = useState([]);

    const getAllCommentsByPostId = () => {
        return CommentsApi.getCommentById(match.params.id) 
            .then(res => setComments(res.data));
           // .then(res => console.log("comments data",res.data));
    }
   
    useEffect(() => {
        getAllCommentsByPostId();
    });
    return (
        
            <div>
            
               CommentPageDetails
               {
                   <CommentsList
                        comment= {comments}
                     /*    onCommentDelete = {deleteComment} 
                        onCommentUpdate = {updateComment} */
                    />
               }
            </div>
        );
  
}