import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentList = ({postId}) => {
    const [comments, setComments] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchComments = async(postId) => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
        
        setComments(res.data)
    }

    useEffect(()=> {
        fetchComments(postId)
    },[postId])

    return (
        <ul>
            {comments.length>1 && comments.map((comment, index) => comment.content && 
                (<li key={comment.id}>{comment.content}</li>)
            )}
        </ul>
    )
}

export default CommentList;