import React from 'react';
import { useSelector } from 'react-redux'
import Post from "../posts/post/Post";
import { Grid, CircularProgress, Typography } from "@mui/material"


const Profile = () => {

    const posts = useSelector((state) => state.posts)
    const user = JSON.parse(localStorage.getItem('profile'))
    console.log(user);

      
  return (
 
    <>
    <Typography variant='h4'>Your Photos:</Typography>
    {!posts.length ? <CircularProgress/> : (
      <Grid sx={{display: 'flex', alignItems: 'center',}} container direction="reverse" alignItems="stretch" spacing={3}>
          {
          
              posts.slice(0).reverse().filter((post) => post.creator === user?.result?._id).map((post) => (
                  <Grid item key={post._id} xs={12} sm={4}>
                      <Post post={post}/>
                  </Grid>
              ))
          }
      </Grid>
     )}
    </>
    
)
}

export default Profile