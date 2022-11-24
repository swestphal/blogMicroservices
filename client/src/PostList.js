import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostList = () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/posts')

        setPosts(res.data)
    }

    useEffect(()=> {
        fetchPosts()
    },[])

    const renderedPosts = Object.values(posts);

    return (
        <div className='d-flex flex-row flex-wrap justify-content-between'>
            {renderedPosts.map((post) => {
                return(
                    <div key={post.id} className='card' style={{width:'30%', marginBottom:'20px'}}>
                        <div className='card-body'>
                            <p>{post.title}</p>
                            <CommentList postId={post.id}/>
                            <CommentCreate postId={post.id}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PostList;