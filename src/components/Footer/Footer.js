import React from 'react'
import { AppBar, Grid, Typography, Container} from '@mui/material';
import {BsLinkedin} from 'react-icons/bs'
import Link from '@mui/material/Link';

const Footer = () => {
  return (

    <AppBar sx={{backgroundColor: "#0F1626", marginTop: "1.5rem"}} position="static">
      <Container maxWidth="xl">
        <Grid display="flex" direction="column" justifyContent="center" alignItems="center" minHeight="15vh" container justify="center"> 
        <Link href="https://www.linkedin.com/in/soroush-bahrami-ba691b19b/" target="_blank">
        <BsLinkedin/>
        </Link>
        <Typography variant="h7" sx={{fontFamily: 'monospace'}} align="center">
            <br/>Copyright © 2022 Soroush Bahrami. All Rights Reserved.
        </Typography>
         
        </Grid>
      </Container>
    </AppBar>
  )
}

export default Footer