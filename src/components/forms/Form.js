import React, {useState} from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPost } from "../../actions/posts";

const Form = () => {

    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })

    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(createPost(postData))
    }

    const clear = () => {

        
    }
    return(
        <Paper sx={{ padding: 2}}>
            <form autoComplete="off" noValidate sx={{display: 'flex',
                                                    flexWrap: 'wrap',
                                            justifyContent: 'center',}}
                                            onSubmit={handleSubmit}>

            <Typography variant="h6">
            Creating Memories
            </Typography>
            <TextField name="creator" variant="outlined" label="Creator" fullWidthvalue={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
            <TextField name="title" variant="outlined" label="Title" fullWidthvalue={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
            <TextField name="message" variant="outlined" label="Message" fullWidthvalue={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
            <TextField name="tags" variant="outlined" label="Tags" fullWidthvalue={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />

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