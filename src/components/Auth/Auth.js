import React, {useState} from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@mui/material'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';
import { signIn, signUp} from '../../actions/auth'
import { useNavigate } from "react-router-dom";
import Lock from '@mui/icons-material/Lock'
import Input from './Input'
import Icon from './Icon'

const initialState = { firstName: '', lastName:'', email:'', password: '', confirmPassword: ''}

const Auth = () => {
    const state = null
    const [showPassword, setShowPassword] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();

      if(isSignUp) {
        dispatch(signUp(formData, navigate))
      }else{

        setIsLoading(true)
        dispatch(signIn(formData, navigate))

        setTimeout(
          function() {
            setIsLoading(false)
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

    const googleSuccess = async (res) => {
      const result = res?.profileObj;
      const token = res?.tokenId;

      try{
        
        dispatch({type: 'AUTH', data: {result, token}})
        navigate('/')

      }catch(error){
        console.log(error)
      }
    }

    const googleFailure = () => {
      console.log("Google Sign in was unsuccessful.")
    }

  return (
    <Container component="main" maxWidth="xs">
        <Paper elevation={3} >
            <Avatar>
                <Lock/>
            </Avatar>
            <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
            <form sx={{width: '100%', marginTop: '3px'}} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignUp && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                <Input name="lastName" label="Last Name" handleChange={handleChange} xs={6}/>

                            </>
                        )
                    }
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                    { isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                </Grid>
                <GoogleLogin clientId='288654655104-la6t0qnaat20cgt6ivdil5agtul1nd3e.apps.googleusercontent.com' render={(renderProps) => (
                  <Button color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant="contained">
                    Google Sign In
                  </Button>
                )} onSuccess={googleSuccess} onFailure={googleFailure} cookiePolicy="single_host_origin"/>

                <Button type="submit" fullWidth variant="contained" color="primary" >
                { isSignUp ? 'Sign Up' : 'Sign In'  }
                </Button>
                {isLoading && <CircularProgress />}
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
            </form>
        </Paper>
    </Container>
  )
}

export default Auth