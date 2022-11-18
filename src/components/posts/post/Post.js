import React from "react";
import { Card, CardActions, CardMedia, Button, Typography, Tab} from "@mui/material"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from "moment"
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

const Post = ({post, setCurrentId}) => {

    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'))

    const Likes = () => {
        if (post.likes.length > 0) {
          return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
            ? (
              <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
            ) : (
              <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }
    
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
      };

    return(
        
        
        <Card 
        className="postCard"
        sx={{display: 'flex',
        flexDirection: 'column',
       // width: '25vw',
        justifyContent: 'space-between',
        height: '100%',
        position: 'relative',}}>
        <a target="_blank" href={post.selectedFile}>
        <CardMedia sx={{height: 0,
        paddingTop: '100%',
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
        
        <Typography className="cardText"  variant="h6">By {post.name}</Typography>
        <Typography className="cardText" variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <div 
            className="postCard"
            sx={{position: 'absolute',
             top: '19px',
             right: '20px',
             color: 'white',}}>

        <Button style={{color: 'white'}} 
                size="small" 
                onClick={() => setCurrentId(post._id)}>
            Edit
            <MoreHorizIcon fontSize="default"/>
           
        </Button>
        </div>
        )}
        
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
        <Button sx={{color: "white"}} size="small" disabled={!user?.result} color="primary" onClick={() => dispatch(likePost(post._id))}>
            <Likes/>
        </Button>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small"/>
            Delete
        </Button>
        )}
        </CardActions>

        </Card>
    )
}

export default Post