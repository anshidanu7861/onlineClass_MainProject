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

    return { dosignup }
}

export default authAPI;