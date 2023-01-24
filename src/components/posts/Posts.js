import React from "react";
import { useSelector } from 'react-redux'
import Post from "./post/Post";
import { Grid, CircularProgress } from "@mui/material"
import { motion } from "framer-motion"



const Posts = ({setCurrentId}) => {

    const posts = useSelector((state) => state.posts)

    console.log(posts)
    return(
        
        !posts.length ? <CircularProgress/> : (
            <Grid sx={{display: 'flex', alignItems: 'center',}} container direction="reverse" alignItems="stretch" spacing={3}>
                {
                
                    posts.slice(0).reverse().map((post) => (
                        <Grid item key={post._id} xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default Posts