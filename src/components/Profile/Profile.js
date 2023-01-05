import React, {useState, useEffect} from 'react';
import decode from 'jwt-decode'
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem} from '@mui/material';
import {Link, useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Profile = () => {

    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        const token = user?.token;
    
        if(token){
          const decodedToken = decode(token)
          
          if(decodedToken.exp * 1000 < new Date().getTime()){
            logout()
          }
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')))
      }, [location])

      const logout = () => {
        setIsLoading(true)
        dispatch({type: 'LOGOUT'})
        navigate('/')
        setUser(null)
        setTimeout(
          function() {
            window.location.reload(false);
            setIsLoading(false)
          }, 3000);
      }
    
      const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
      console.log(user);
    
      const dispatch = useDispatch();
      const navigate = useNavigate();
    
  return (
    <div>
        <Box align="center">
        <Avatar sx={{ bgcolor: "#FF533D", width: 80, height: 80  }}>{user.result.name.charAt(0)}</Avatar>
        </Box>
   
    </div>
  )
}

export default Profile