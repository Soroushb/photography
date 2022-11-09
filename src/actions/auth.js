import * as api from '../api'
import { AUTH } from '../constants/actionTypes'
import { useNavigate } from "react-router-dom";

export const signIn = (formData, history) => async (dispatch) => {

    try{

        const { data } = await api.signIn(formData);

        dispatch({type: AUTH, data});
        useNavigate("/")

    }catch(error){
        console.log(error)
    }

}

export const signUp = (formData, history) => async (dispatch) => {

    try{

        const { data } = await api.signUp(formData);

        dispatch({type: AUTH, data});
        useNavigate("/")
    }catch(error){
        console.log(error)
    }

}