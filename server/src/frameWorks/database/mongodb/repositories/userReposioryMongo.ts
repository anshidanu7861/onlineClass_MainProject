import { userInterface } from "../../../../types/authInterface";
import { userRegistrationSchema } from "../models/userModels";

export  function userDBRepository() {
  const doSignup = async (userData: userInterface )=>{
    return await userRegistrationSchema.create( userData )
  }
  return { doSignup };
}

export type authType = typeof userDBRepository;