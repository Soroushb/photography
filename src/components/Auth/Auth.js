import React, {useState} from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@mui/material'
import Lock from '@mui/icons-material/Lock'
import Input from './Input'

const Auth = () => {
    const state = null
    const [showPassword, setShowPassword] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)
    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    const switchMode = () => {
        setIsSignUp((prevSignUp) => !prevSignUp)
        handleShowPassword(false)
    }

  return (
    <Container component="main" maxWidth="xs">
        <Paper elevation={3}>
            <Avatar>
                <Lock/>
            </Avatar>
            <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
            <form sx={{width: '100%', marginTop: '3px'}} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignUp && (
                            <>
                                <Input name="firstName" label="FirstName" handleChange={handleChange} autoFocus half/>
                                <Input name="firstName" label="FirstName" handleChange={handleChange} xs={6}/>

                            </>
                        )
                    }
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                    { isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary">
                { isSignUp ? 'Sign Up' : 'Sign In' }
          </Button>
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