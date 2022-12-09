import { CREATE, FETCH_ALL, UPDATE, DELETE, START_LOADING, END_LOADING} from '../constants/actionTypes'
import * as api from '../api'

export const getPosts = (page) => async (dispatch) => {

    try{
        dispatch({type: START_LOADING})
        const { data } = await api.fetchPost(page);
        console.log(data)
        dispatch({type: FETCH_ALL, payload: data})
        dispatch({type: END_LOADING})
    }catch(err){
        console.log(err)
    }
}


export const getPostsBySearch = (searchQuery) => async(dispatch) => {

    try{
        dispatch({type: START_LOADING})
        const {data: {data}} = await api.fetchPostsBySearch(searchQuery);
        console.log(data)
    }catch(err){
        console.log(err)
    }
}


export const createPost = (post) => async (dispatch) => {

    try{
        dispatch({type: START_LOADING})
        const {data} = await api.createPost(post);
        dispatch({type: CREATE, payload: data })
        
    } catch(err){
        console.log(err)
    }
}


export const updatePost = (id, post) => async (dispatch) => {
    try{

        const { data } = await api.updatePost(id, post)
        dispatch({ type: UPDATE, payload: data })
        console.log("hey")

    }catch(err){

        console.log(err)
    }
}   


export const deletePost = (id) => async (dispatch) => {

    try{
        await api.deletePost(id);
        dispatch({type: DELETE, payload: id})
    }catch(err){
        console.log(err)
    }
}

export const likePost = (id) => async (dispatch) => {

    const user = JSON.parse(localStorage.getItem('profile'));

    try{

        const { data } = await api.likePost(id, user?.token)
        dispatch({ type: "LIKE", payload: data })

    }catch(err){
        console.log(err)
    }
}