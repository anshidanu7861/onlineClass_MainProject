import { NextFunction, Request, Response } from "express";
import { HttpStatus } from "../../../types/httpStatus";
import {  authService } from "../../services/authServies";


const userAuthMiddleware = async(req : Request , res : Response , next : NextFunction)=>{
    const authHeader = req.headers['authorization'] 
    let token:string | null= null;
    console.log("Reached the userAuth middleware")
    if(authHeader  && authHeader.startsWith('Bearer'))
    {
         token = authHeader.split(" ")[1]
         try{
            const response :any = await authService().verifyAccessToken(token)
            
            req.body.userId = response?.payload as string
            next()
        }catch(err){
            console.log(err)
            res.status(HttpStatus.FORBIDDEN).json(err )
        }
    }
    if(!token){
        res.status(HttpStatus.UNAUTHORIZED).json({ err : "User is Unauthorized , No token recieved"} )
    }


}

export default userAuthMiddleware