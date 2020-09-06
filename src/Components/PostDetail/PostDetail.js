import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import './PostDetail.css';




const PostDetail = () => {
    const {id} = useParams();
    const [ details , setDetails ] = useState([]);

    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setDetails(data))
    }, []);


    const [ comments, setComment ] = useState([]);
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    }, []);


    return (
        <div>

       <div className="detail">
           <h1 style={{textAlign: 'center', color: 'aqua'}}>Post Details</h1>
           <h2 style={{textAlign: 'center'}}>Title: {details.title}</h2>
            <h3 style={{textAlign: 'center'}}>Body: {details.body}</h3>
   </div>

<br/>
               <h2 style={{marginLeft: "15px", color: "blue", textAlign: 'center'}}>See All Comments For Id-{id}:</h2>
              {
            comments.map(( comment) => <Comment 
            key = { comment.id}
            comment={comment}></Comment>)
               } 
               </div>
        

                     
    );
};

export default PostDetail;