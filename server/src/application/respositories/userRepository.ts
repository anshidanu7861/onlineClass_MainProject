import { userInterface } from "../../types/authInterface"
import { authType } from "../../frameWorks/database/mongodb/repositories/userReposioryMongo"


export const userRepository =  (repository: ReturnType<authType>)=> {
   const doSignup =  (userData:userInterface)=>{   
   return repository.doSignup(userData)
   }

   const findEmail = ( email:string)=>{return repository.findEmail(email)}
   
  return {
    doSignup,
    findEmail,
  }
}

export default userRepository;

export type usertypeofRepository = typeof userRepository;