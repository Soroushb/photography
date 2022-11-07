import * as api from '../api'
import { AUTH } from '../constants/actionTypes'
import { useNavigate } from "react-router-dom";

export const signIn = (formData, history) => async (dispatch) => {

    try{
        useNavigate("/")
    }catch(error){
        console.log(error)
    }

}

export const signUp = (formData, history) => async (dispatch) => {

    try{
        useNavigate("/")
    }catch(error){
        console.log(error)
    }

}