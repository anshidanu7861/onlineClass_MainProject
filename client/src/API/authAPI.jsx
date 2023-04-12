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

    return { dosignup, verifyEmail }
}

export default authAPI;