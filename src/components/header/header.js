import React, {useState, useEffect} from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem} from '@mui/material';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import MenuIcon from '@mui/icons-material/Menu';
import {Link, useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode'

const pages = ['Products', 'Pricing', 'Blog', 'Login'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isLoading, setIsLoading] = useState(false)



  const location = useLocation();


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

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
    
    <AppBar sx={{backgroundColor: "#0F1626"}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CameraRollIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: "#FF533D" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Still-Shots
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={()=>{}}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <CameraRollIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

        
          <Toolbar>
              {user ? (
                <div>    
                    <Typography variant="h6">{user.result.name}</Typography>
                </div>
              ) : (
                  <Button 
                   to="/auth" component={Link} variant="contained" color="primary">
                  Sign in
                  </Button>
              )}
          </Toolbar>
          
          <Box sx={{ flexGrow: 0 }}>
              {user && (
                 <IconButton onClick={()=>{}} sx={{ p: 0 }}>
                 <Button sx={{marginRight: "10px"}} variant="contained" color="secondary" onClick={logout}>Logout</Button>
                 
                 <Tooltip title="Open settings">
                 <Avatar alt="Soroush Bahrami" src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                 </Tooltip>
                 </IconButton>
              )}
             
            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
