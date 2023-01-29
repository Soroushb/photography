import React, {useState} from 'react'
import { Avatar, Button, Paper, Grid, Typography} from '@mui/material'
import { useDispatch } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';
import { signIn, signUp} from '../../actions/auth'
import { useNavigate } from "react-router-dom";
import Input from './Input'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const initialState = { firstName: '', lastName:'', email:'', password: '', confirmPassword: ''}

const theme = createTheme();

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
      e.preventDefault();

      if(isSignUp) {
        setIsLoading(true)
        dispatch(signUp(formData, navigate))
        setTimeout(
          function() {
            setIsLoading(false)
            navigate("/")
            window.location.reload(false);
          }, 3000);

      }else{

        setIsLoading(true)
        dispatch(signIn(formData, navigate))

        setTimeout(
          function() {
            setIsLoading(false)
            navigate("/")
            window.location.reload(false);
          }, 3000);
      }
      console.log(formData)
    }

    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    const switchMode = () => {
        setIsSignUp((prevSignUp) => !prevSignUp)
        setShowPassword(false)
    }


    return (
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url("https://drive.google.com/uc?export=view&id=1E1w1GatAiXO3nVkTuYNvO0lgrV-NQQ7-")',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography sx={{ marginBottom: '1rem' }} component="h1" variant="h5">
                {isSignUp ? "Sign Up" : "Sign In"}
              </Typography>
              <form  onSubmit={handleSubmit} sx={{ mt: 1 }}>

              {
                        isSignUp && (
                            <>
                                <Input 
                                  required 
                                  fullWidth 
                                  name="firstName" 
                                  label="First Name" 
                                  autoFocus
                                  handleChange={handleChange} 
                                  />

                                <Input 
                                  margin='normal' 
                                  required 
                                  fullWidth 
                                  name="lastName" 
                                  label="Last Name" 
                                  handleChange={handleChange}/>
                            

                            </>
                        )
                }
                <Input
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  type="email"
                  autoFocus
                  handleChange={handleChange}
                />
                <Input
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  id="password"
                  type={showPassword ? 'text' : 'password'} 
                  handleShowPassword={handleShowPassword}
                  autoComplete="current-password"
                  handleChange={handleChange}
                />

                { isSignUp && 
                <Input 
                margin="normal"
                required
                fullWidth
                name="confirmPassword" 
                label="Confirm Password" 
                handleChange={handleChange} 
                type="password" /> }

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                { isSignUp ? 'Sign Up' : 'Sign In'  } 
                </Button>
                {isLoading && <CircularProgress/>}
                <Grid container>
                  <Grid item>
                    <Button  onClick={switchMode} variant="body2">
                      {isSignUp ? 'Already have an account? Sign in ' : "Don't have an account? Sign Up"}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
}

export default Auth