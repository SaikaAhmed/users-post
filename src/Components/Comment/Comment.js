import React from 'react';
import FakeData from '../../FakeData/FakeData';



const Comment = (props) => {
    let { id,  name, email, body } = props.comment;

    if( id % 5 === 0) 
        id = 5;
        else id = id % 5;

    const userImage = FakeData.find (img => img.id === id )
    console.log(userImage.url);
    


    return (

           <div style={{display: 'flex',backgroundColor:"lightgrey" , margin:"10px" }}>
               <div>
                   <img style={{width:"50px", height:"55px", borderRadius:"50%",marginTop:"10px", marginLeft:"10px" }} src={userImage.url} alt=""/>
                   </div> 
                   
          <div style={{marginLeft: "20px"}}>
            <h3>Name: {name}</h3>
            <h5>Email: {email}</h5>
            <h4>Message: {body}</h4>
            </div>
        </div>
        
    );
};

export default Comment;