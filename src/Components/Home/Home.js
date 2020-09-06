import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import { Grid, Container } from '@material-ui/core';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
    const [ posts, setPosts ] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    

    return (
        <div>
              <Header></Header>
             <Container>
                <Grid container spacing={3}>
            {
                posts.map( post =><Grid key={posts.id} item md={12}><Post post={post}></Post></Grid> )
            }

              </Grid>  
           </Container>
         <br/>

         <Footer></Footer>   
        </div>
    );
};

export default Home;
