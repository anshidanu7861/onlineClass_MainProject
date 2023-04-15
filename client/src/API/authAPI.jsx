import React from 'react'
import axiosConfig from '../config/axiosConfig'

const authAPI = ()=>{
    const dosignup = async (signupData) =>{
        try{
           const response = await axiosConfig.post('/signup', signupData)
           return response.data
        }catch(err){
            throw{msg: err.response.data.message}
        }
    }

    const verifyEmail = async (dataURL) => {
        try{
            const response = await axiosConfig.post('/login', dataURL)
            return response.data
        }catch(err) {
            throw{msg: err.response.data.message}
        }
    }

    const CreateAccessToken = async () => {
        try{
            const response = await axiosConfig.get('/token')
            return response.data;
        }catch(err) {
            throw{msg: err.response.data.message}
        }
    }

    const googleLoginApi = async (email)=>{
        try{
            console.log(email, "only mail is coming");
            console.log('helloooo');
            const response = await axiosConfig.post('/googleLogin', email)
            return response.data
        }catch(err) {
            console.log(err);
        }
    }

    return { dosignup, verifyEmail, CreateAccessToken, googleLoginApi }
}

export default authAPI;