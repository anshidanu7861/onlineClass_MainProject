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

  const otpLogin = async (phone: string) =>{
    const user : userInterface | null = await userModel.findOne({'phone' : phone})
    return user
  }

  const getStudentDetails = async (field: string) =>{
    console.log(field);
    
    const students  = await userModel.find({"field" : field})
    return students
  }

  const getMentorsDetails = async (field: string) =>{
    const mentors = await userModel.find({'field' : field})
    return mentors
  }

  return  { doSignup,findEmail, googleLogin, otpLogin, getStudentDetails, getMentorsDetails };
}

export type authType = typeof userDBRepository;