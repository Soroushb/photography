import React from "react";
import { Container, AppBar, Typography, Grow, Grid} from '@mui/material';
import Zoo from './Images/Zoo.jpg'
import Posts from "./components/posts/Posts";
import Form from "./components/forms/Form";
const App = () => {

    return(
        
        <Container maxWidth='lg'>
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Memories</Typography>
                <img src={Zoo} alt="memories" height="500"/>
            </AppBar>

            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App