import { userInterface } from "../../../../types/authInterface";
import userModel from "../models/userModels";

export  function userDBRepository() {
  const doSignup = async (userData: userInterface )=>{
    console.log(userData, 'db kk varumo??');
    
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

  const otpLogin = async (phone: string) =>{
    const user : userInterface | null = await userModel.findOne({'phone' : phone})
    return user
  }

  return  { doSignup,findEmail, googleLogin, otpLogin };
}

export type authType = typeof userDBRepository;