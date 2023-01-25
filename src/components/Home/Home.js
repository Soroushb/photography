import React,  { useState, useEffect}  from 'react'
import { Container, Grow, Grid, Paper, AppBar, TextField, Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import {useNavigate, useLocation} from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { MuiChipsInput } from 'mui-chips-input'
import api from '../../artApi/movieApi'
import Posts from '../posts/Posts';
import Form from '../forms/Form';
import Pagination from '../Pagination'


function useQuery() {
    return new URLSearchParams(useLocation().search)
}


const Home = () => {

    
    const [searchMovie, setSearchMovie] = useState('');
    const [tags, setTags] = useState([]);
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);
    const query = useQuery();
    const navigate = useNavigate();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery')
    let [movies, setMovies] = useState('')

    

    const getData = (movieTitle) => {
        
        api.getMovies(movieTitle)
        .then((response)=>{
            setMovies(response.data)
            console.log(movies)
        })
        .catch((error) => {
            console.log(error)
        })
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
                    label="Search For A Movie"
                    fullWidth
                    value={searchMovie}
                    onChange={(e) => {setSearchMovie(e.target.value)}}/>
                    <Button onClick={() => getData(searchMovie)} color="primary" variant="contained">Search</Button>
                </AppBar>
                
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
                <Paper elevation={6}>
                    <Pagination page={page}/>
                </Paper>
        </Grid>
        <Grid direction="column-reverse" item xs={12} sm={6} md={9}>
                {movies && (
                    movies?.data?.search?.movies.map((movie) => (
                        
        <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardMedia
        component="img"
        image={movie?.posterImage?.url}
        alt={movie?.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie?.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>        
    )))}
        </Grid>
        </Grid>
    </Container>
</Grow>
  )
}

export default Home