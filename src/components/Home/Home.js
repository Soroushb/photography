import React,  { useState, useEffect}  from 'react'
import { Container, Grow, Grid, Paper, AppBar, TextField, Button} from '@mui/material';
import {useNavigate, useLocation} from 'react-router-dom'
import { getPosts, getPostsBySearch } from '../../actions/posts'
import { useDispatch} from 'react-redux'
import { MuiChipsInput } from 'mui-chips-input'
import Posts from '../posts/Posts';
import Form from '../forms/Form';
import Pagination from '../Pagination'


function useQuery() {
    return new URLSearchParams(useLocation().search)
}


const Home = () => {

    
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);
    const query = useQuery();
    const navigate = useNavigate();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery')

    
    const searchPost = () => {

        if(search.trim() || tags) {
            dispatch(getPostsBySearch({search, tags: tags.join(',')}))
        }else{
            navigate('/')
        }
    }

    
    const handleKeyPress = (e) => {

        if(e.keyCode === 13){
            searchPost()
        }
    }


    const handleAdd = (tag) => setTags([...tags, tag])

    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete))

  return (
     
    <Grow in>
    <Container maxWidth="x1">
        <Grid  container justify="space-between" alignItems="stretch" spacing={4}>

        <Grid item xs={12} sm={6} md={3}>

                <AppBar position='static' color='inherit' sx={{borderRadius: 4,
                                                               marginBottom: '1rem',
                                                               display: 'flex',
                                                               padding: '16px',}}>
                    <TextField 
                    name="search" 
                    variant="outlined" 
                    label="Search Memories"
                    fullWidth
                    onKeyPress={handleKeyPress}
                    value={search}
                    onChange={(e) => {setSearch(e.target.value)}}/>
                    <MuiChipsInput 
                    sx={{margin: '10px 0'}}
                    value={tags}
                    onAdd={handleAdd}
                    onDelete={handleDelete}
                    label="Search Tags"
                    variant="outlined"/>
                    <Button onClick={searchPost} color="primary" variant="contained">Search</Button>
                </AppBar>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
                <Paper elevation={6}>
                    <Pagination page={page}/>
                </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={9}>
                <Posts setCurrentId={setCurrentId}/>
        </Grid>
            
        </Grid>
    </Container>
</Grow>
  )
}

export default Home