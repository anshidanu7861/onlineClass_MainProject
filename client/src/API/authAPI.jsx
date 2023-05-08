import React from 'react'
import axiosConfig from '../config/axiosConfig'
// import useAxiosPrivate from '../Hooks/axiosPrivate'

const authAPI = ()=>{ 

    const dosignup = async ( signupData ) =>{
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
            const response = await axiosConfig.post('/googleLogin', email)
            return response.data
        }catch(err) {
            console.log(err);
        }
    }

    const otpLoginApi = async (phoneNumber)=>{
        try{
            const response = await axiosConfig.post('/otpLogin', phoneNumber)
            return response.data
        }catch(err) {

        }
    }

    const getStudentsData = async (field) =>{
        try{
            const respose = await axiosConfig.get( `/getStudentsData/${field}` )
            console.log(respose.data);
            return respose.data
        }catch(err) {
            console.log(err.message)
        }
    }

    const getMentorsDetails = async (field) =>{
        try{
            const response = await axiosConfig.get(`/getMentorsData/${field}`)
            console.log(response);
            return response.data
        }catch(err) {
            console.log(err.message);
        }
    }

    return { dosignup,
             verifyEmail,
             CreateAccessToken, 
             googleLoginApi, 
             otpLoginApi, 
             getStudentsData,
             getMentorsDetails
            }
}

export default authAPI;