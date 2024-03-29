import React from 'react'
import { AppBar, Typography} from '@mui/material';

const Navbar = () => {
  return (
    <div>
        <AppBar sx={{
        borderRadius: 5,
        margin: '10px 0',
        display: 'flex',
        minHeight: 200,
        marginBottom: '20px',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url("https://drive.google.com/uc?export=view&id=1ghNTy1wcGvwbs1DYCZOR0b1vYNbGBO_V")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.85
        }} 
        position="static" color="inherit">
        
        <Typography variant="h1" align="center" sx={{color: "white", opacity: 0.7}}>STILL-SHOTS</Typography>
       </AppBar>
</div>
  )
}

export default Navbar