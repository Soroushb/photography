import React, {useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from "../../actions/posts";
import CameraIcon from '@mui/icons-material/Camera';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useNavigate } from "react-router-dom";


const Form = ({currentId, setCurrentId}) => {

    const [postData, setPostData] = useState({
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)
    const user = JSON.parse(localStorage.getItem('profile'))
    const temp = false;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post)
    }, [post])

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if(currentId){
            dispatch(updatePost({...postData, name: user?.result?.name}))
        }else{
            dispatch(createPost({...postData, name: user?.result?.name}))
           
        }
        clear();
    }

    const signInButton = () => {
        navigate("/auth")
    }

    if(!user?.result?.name){
        return(
        <Paper sx={{padding: "45px"}}>
            <Typography variant="h6" align="center" >
                In order to post or like other posts, you first need to sign in. <br/><br/><Button  onClick={() => signInButton()} sx={{backgroundColor: "#FF533D", color: "black", fontSize: "0.9"}}>Sign in</Button>
            </Typography>
        </Paper>)
    }

    const clear = () => {
        setCurrentId = null;
        setPostData({
        title: '',
        message: '',
        tags: '',
        selectedFile: ''})
        
    }
    return(
        <Paper sx={{ padding: 2}}>
            <form autoComplete="off" noValidate sx={{display: 'flex',
                                                    flexWrap: 'wrap',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',}}
                                                    onSubmit={handleSubmit}>
            
            
            <Typography variant="h5" align="center" sx={{marginBottom: "0.5rem"}}>
             {currentId ? <ModeEditIcon sx={{scale: "1.5", padding: "0.7%", borderRadius: "30%", color: "white", backgroundColor: "#FF533D"}}/> : <CameraIcon sx={{scale: "1.5", padding: "0.7%", borderRadius: "30%", color: "white", backgroundColor: "#FF533D"}}/>}
            </Typography>
            <TextField sx={{marginBottom: "0.5rem", marginTop: "0.5rem"}} fullWidth name="title" variant="outlined" label="Title or Location" fullWidthvalue={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
            {temp && (<TextField sx={{marginBottom: "0.5rem"}} fullWidth name="message" variant="outlined" label="Message" fullWidthvalue={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />)}

            <div sx={{width: '97%', margin: '10px 0' }}>
                <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/>
            </div>

            <Button sx={{marginBottom: 1, marginTop: 1, backgroundColor: "#FF533D"}} variant="contained" color="primary" size="large" type="submit" fullWidth>
                POST
            </Button>

            </form>
        </Paper>
    )
}

export default Form