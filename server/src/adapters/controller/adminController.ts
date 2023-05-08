import asyncHandler from 'express-async-handler'
import dotenvConfig from "../../configDotenv";
import { Request, Response } from 'express';

const admin = {
    email: dotenvConfig.ADMIN_EMAIL,
    password: dotenvConfig.ADMIN_PASSWORD
}

const adminController = (

)=>{
    const adminLogin = asyncHandler(async(req: Request, res:Response)=>{
        let adminData: any = req.body
        if(adminData.email === admin.email && adminData.password === admin.password) {
            res.json(true)
        } else{
            res.json(false)
        }
    })

    return {
        adminLogin
    };
}


export default adminController;