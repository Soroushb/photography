import React from 'react'
import { AppBar, Typography} from '@mui/material';

const Navbar = () => {
  return (
    <div>
        <AppBar sx={{
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        }} 
        position="static" color="inherit">
       <Typography sx={{color: 'rgba(0,183,255, 1)'}} variant="h2" align="center">Memories</Typography>
      
       </AppBar>
</div>
  )
}

export default Navbar