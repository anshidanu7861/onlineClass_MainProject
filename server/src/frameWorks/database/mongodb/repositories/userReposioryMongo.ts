import { userInterface } from "../../../../types/authInterface";
import userModel from "../models/userModels";

export  function userDBRepository() {
  const doSignup = async (userData: userInterface )=>{
    const user = await userModel.create( userData )
    return user;
  }

  const findEmail = async (email: string) =>{
    const user : userInterface | null = await userModel.findOne({'email' : email})
    return user;
  }

  const googleLogin = async (email: string) =>{
    const user : userInterface | null = await userModel.findOne({'email' : email})
    return user;
  }

  return  { doSignup,findEmail, googleLogin };
}

export type authType = typeof userDBRepository;