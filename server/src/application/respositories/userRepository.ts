import { userInterface } from "../../types/authInterface"
import { authType } from "../../frameWorks/database/mongodb/repositories/userReposioryMongo"


export const userRepository =  (repository: ReturnType<authType>)=> {
   const doSignup =  (userData:userInterface)=>{   
   return repository.doSignup(userData)
   }
   const findEmail = ( email:string)=>{return repository.findEmail(email)}
   const googleLogin = (email: string)=> {return repository.googleLogin(email)}
   const otpLogin = (phone: string)=>{return repository.otpLogin(phone)}
   
  return {
    doSignup,
    findEmail,
    googleLogin,
    otpLogin
  }
}

export default userRepository;

export type usertypeofRepository = typeof userRepository;