import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Tab} from "@mui/material"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from "moment"
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

const Post = ({post, setCurrentId}) => {

    const dispatch = useDispatch();

    

    return(
        
        <Card 
        className="postCard"
        sx={{display: 'flex',
        flexDirection: 'column',
       // width: '25vw',
        justifyContent: 'space-between',
        borderRadius: '10px',
        height: '100%',
        position: 'relative',}}>

        <a target="_blank" href={post.selectedFile}>
        <CardMedia sx={{height: 0,
        paddingTop: '56.25%',
        //backgroundColor: 'rgba(0, 0, 0, 0.5)',
        //backgroundBlendMode: 'darken',
        }}
         image={post.selectedFile} title={post.title}
         
         //onClick = { () => {  Tab.open(post.selectedFile,'Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');}}
         />
        </a>
        
        

        <div 
        className="postCard"
        sx={{position: 'absolute',
                  top: '20px',
                  left: '20px',
                  color: 'white',
                  display: 'flex',
                  justifyContent: "center",
                  }}>
        
        <Typography className="cardText"  variant="h6">By {post.creator}</Typography>
        <Typography className="cardText" variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div 
            className="postCard"
            sx={{position: 'absolute',
             top: '20px',
             right: '20px',
             color: 'white',}}>

        <Button style={{color: 'white'}} 
                size="small" 
                onClick={() => setCurrentId(post._id)}>
            Edit
            <MoreHorizIcon fontSize="default"/>
           
        </Button>

        </div>
        
        <div className="postCard" sx={{display: 'flex',
                  justifyContent: 'space-between',
                  margin: '20px',}}> 
        
        <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => ` #${tag}`)}</Typography>
        </div>
        <Typography className="postCard" sx={{padding: '0 16px'}} variant="h5" gutterBottom>{post.title}</Typography>
    

        <CardActions  className="postCard"
                          sx={{padding: '0 16px 8px 16px',
                          display: 'flex',
                          justifyContent: 'space-between',}}>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
            <ThumbUpAltIcon fontSize="small"/>
            &nbsp; Like &nbsp;
            {post.likeCount}
        </Button>

        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small"/>
            Delete
        </Button>
        </CardActions>

        </Card>
    )
}

export default Post