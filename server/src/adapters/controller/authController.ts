import { Request, Response } from "express";
import { userInterface } from "../../types/authInterface";
import { usertypeofRepository } from "../../application/respositories/userRepository";
import { authType } from "../../frameWorks/database/mongodb/repositories/userReposioryMongo";
import { addUser } from "../../application/use_cases/auth";
import { AuthService } from "../../frameWorks/services/authServies";
import { authServiceInterfaceType } from "../../application/services/authServiesInterface";
import asyncHandler from 'express-async-handler'
import { isValidEmail, googleLogin, otpLogin } from "../../application/use_cases/auth";

const userAuthController = ( 
  userDBRepository: authType,
  userRepository: usertypeofRepository,
  authService: AuthService,
  authServiceInterface: authServiceInterfaceType
  )=>{
  const userDBrepository = userRepository(userDBRepository()) 
  const authServices = authServiceInterface(authService())

  const register = asyncHandler( async (req:Request, res: Response) =>{
    let userData: userInterface = req.body
    const response = await addUser(userData, userDBrepository, authServices)
    res.json(response)
  })

  const jwtAuth = asyncHandler(async (req: Request, res: Response)=>{
    try{
      let newAccessToken = await authServices.generateAccessToken(
        req.cookies.JWT_REFRESH_TOKEN
      )
      res.status(200).json({ accessToken: newAccessToken });
    }catch(err) {
      res.status(401).json(err)
    }
   
  })

   const emailVerification = asyncHandler(async (req: Request, res:Response)=>{
    let { email, password } : { email: string, password: string } = req.body
    const response = await isValidEmail(email, password, userDBrepository, authServices)
    res.cookie('refreshToken', response.refreshToken, {httpOnly: true})
    res.json(response)
   })

   const googleVerification = asyncHandler(async (req: Request, res: Response)=>{
    let { email } : { email: string } = req.body
    const response = await googleLogin(email, userDBrepository, authServices )
    res.cookie('refreshToken', response.refreshToken, {httpOnly: true })
    res.json(response)
   })

   const otpVerification = asyncHandler(async(req:Request, res:Response)=>{
    let { phone } : { phone:string } = req.body
    const response = await otpLogin(phone, userDBrepository, authServices)
    res.json(response)
   })

  return {
    register,
    emailVerification,
    jwtAuth,
    googleVerification,
    otpVerification
  }
}


export default userAuthController;



