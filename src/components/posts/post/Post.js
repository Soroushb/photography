import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from "@mui/material"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from "moment"

const Post = ({post}) => {
    return(
        
        <Card sx={{display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',}}>

        <CardMedia sx={{height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',}} image={post.selectedFile} title={post.title}/>

        <div sx={{position: 'absolute',
                  top: '20px',
                  left: '20px',
                  color: 'white',}}>
        
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        <div sx={{position: 'absolute',
             top: '20px',
             right: '20px',
             color: 'white',}}>

        <Button style={{color: 'white'}} size="small" onClick={() => {}}>
            <MoreHorizIcon fontSize="default"/>
        </Button>

        </div>
        
        <div sx={{display: 'flex',
                  justifyContent: 'space-between',
                  margin: '20px',}}> 
    
        <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag}`)}</Typography>
        <CardContent>
        <Typography sx={{padding: '0 16px'}} variant="h5" gutterBottom>{post.message}</Typography>
        </CardContent>

        <CardActions sx={{padding: '0 16px 8px 16px',
                          display: 'flex',
                          justifyContent: 'space-between',}}>
        <Button size="small" color="primary" onClick={() => {}}>
            <ThumbUpAltIcon fontSize="small"/>
            Like
            {post.likeCount}
        </Button>

        <Button size="small" color="primary" onClick={() => {}}>
            <DeleteIcon fontSize="small"/>
            Delete
        </Button>
        </CardActions>

        </div>

        </div>

        </Card>
    )
}

export default Post