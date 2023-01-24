import React, {useState, useEffect} from 'react';
import decode from 'jwt-decode'
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem} from '@mui/material';
import {Link, useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import Post from "../posts/post/Post";
import { Grid, CircularProgress } from "@mui/material"


const Profile = () => {

    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false)
    const posts = useSelector((state) => state.posts)
    const user = JSON.parse(localStorage.getItem('profile'))
      console.log(user);
    
      const dispatch = useDispatch();
      const navigate = useNavigate();
      
  return (
 
    !posts.length ? <CircularProgress/> : (
      <Grid sx={{display: 'flex', alignItems: 'center',}} container direction="reverse" alignItems="stretch" spacing={3}>
          {
          
              posts.slice(0).reverse().filter((post) => post.creator === user?.result?._id).map((post) => (
                  <Grid item key={post._id} xs={12} sm={4}>
                      <Post post={post}/>
                  </Grid>
              ))
          }
      </Grid>
  
  )
)
}

export default Profile