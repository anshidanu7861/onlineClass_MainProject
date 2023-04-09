import { userInterface } from "../../../../types/authInterface";
import userModel from "../models/userModels";

export  function userDBRepository() {
  const doSignup = async (userData: userInterface )=>{
    const user = await userModel.create( userData )
    return user;
  }
  return  {doSignup};
}

export type authType = typeof userDBRepository;