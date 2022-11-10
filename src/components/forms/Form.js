import React, {useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from "../../actions/posts";



const Form = ({currentId, setCurrentId}) => {

    const [postData, setPostData] = useState({
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)
    const user = JSON.parse(localStorage.getItem('profile'))
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

    if(!user?.result?.name){
        return(
        <Paper>
            <Typography variant="h6" align="center">
                Please Sign In
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
                                            justifyContent: 'center',}}
                                            onSubmit={handleSubmit}>

            <Typography variant="h6">
             {currentId ? 'Editing' : 'Creating'}
            </Typography>
            <TextField name="title" variant="outlined" label="Title" fullWidthvalue={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
            <TextField name="message" variant="outlined" label="Message" fullWidthvalue={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
            <TextField name="tags" variant="outlined" label="Tags" fullWidthvalue={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />

            <div sx={{width: '97%', margin: '10px 0',}}>
                <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/>
            </div>

            <Button sx={{marginBottom: 10,}} variant="contained" color="primary" size="large" type="submit" fullWidth>
                Submit
            </Button>

            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
                Clear
            </Button>

            </form>
        </Paper>
    )
}

export default Form