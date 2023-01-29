import React,  { useState}  from 'react'
import { Container, Grow, Grid, Paper} from '@mui/material';
import {useLocation} from 'react-router-dom'
import Posts from '../posts/Posts';
import Form from '../forms/Form';
import Pagination from '../Pagination'


function useQuery() {
    return new URLSearchParams(useLocation().search)
}


const Home = () => {

    
    const [currentId, setCurrentId] = useState(null);
    const query = useQuery();
    const page = query.get('page') || 1;

  return (
     
    <Grow in>
    <Container maxWidth="x1">
        <Grid  container justify="space-between" alignItems="stretch" spacing={4}>

        <Grid item xs={12} sm={6} md={3}>

            
            
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
                <Paper elevation={6}>
                    <Pagination page={page}/>
                </Paper>
        </Grid>
        <Grid direction="column-reverse" item xs={12} sm={6} md={9}>
                
      <Grid direction="column-reverse" item xs={12} sm={6} md={9}>
                <Posts setCurrentId={setCurrentId}/>
        </Grid>
        </Grid>
        </Grid>
    </Container>
</Grow>
  )
}

export default Home