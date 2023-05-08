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
    const student = await userModel.find({'field': field})
    return {student}
  }

  
  const getMentorsDetails = async (field: string) =>{
    const mentor = await userModel.find({'field': field})
    return {mentor}
  }

  return  { doSignup,findEmail, googleLogin, otpLogin, getStudentDetails, getMentorsDetails };
}

export type authType = typeof userDBRepository;