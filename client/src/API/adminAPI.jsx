import React from 'react'
import axiosConfig from '../config/axiosConfig'

const adminAPI = () =>{
    const adminVerification = async(adminLoginData) =>{
        console.log(adminLoginData);
        try{
            const response = await axiosConfig.post('/admin/adminLogin', adminLoginData)
            return response.data
        }catch(err) {
            console.log(err);
        }
    }
    return {
        adminVerification
    }
}

export default adminAPI