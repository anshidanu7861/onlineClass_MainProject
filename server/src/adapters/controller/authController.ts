import { Request, Response } from "express";
import { userInterface } from "../../types/authInterface";
import { usertypeofRepository } from "../../application/respositories/userRepository";
import { authType } from "../../frameWorks/database/mongodb/repositories/userReposioryMongo";
import { addUser } from "../../application/use_cases/auth";
import { AuthService } from "../../frameWorks/services/authServies";
import { authServiceInterfaceType } from "../../application/services/authServiesInterface";
import asyncHandler from 'express-async-handler'

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
  return {
    register
  }
}


export default userAuthController;



