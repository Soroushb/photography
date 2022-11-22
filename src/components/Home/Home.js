import React,  { useState, useEffect}  from 'react'
import { Container, Grow, Grid} from '@mui/material';
import { getPosts } from '../../actions/posts'
import { useDispatch} from 'react-redux'

import Posts from '../posts/Posts';
import Form from '../forms/Form';

const Home = () => {

    
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])

  return (
     
    <Grow in>
    <Container>
        <Grid  container justify="space-between" alignItems="stretch" spacing={4}>

        <Grid item xs={12} sm={3}>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={9}>
                <Posts setCurrentId={setCurrentId}/>
            </Grid>
            
        </Grid>
    </Container>
</Grow>
  )
}

export default Home