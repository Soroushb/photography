import React from "react";
import { useSelector } from 'react-redux'
import Post from "./post/Post";
import { Grid, CircularProgress } from "@mui/material"


const Posts = () => {

    const posts = useSelector((state) => state.posts)

    console.log(posts)
    return(
        
        !posts.length ? <CircularProgress/> : (
            <Grid sx={{display: 'flex', alignItems: 'center',}} container alignItems="stretch" spacing={3}>
                {
                    posts.map((post) => (
                        <Grid item key={post._id} xs={12} sm={6}>
                            <Post post={post}/>
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default Posts