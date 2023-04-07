import { userInterface } from "../../types/authInterface"
import { authType } from "../../frameWorks/database/mongodb/repositories/userReposioryMongo"


export const userRepository =  (repository: ReturnType<authType>)=> {
   const doSignup =  (userData:userInterface)=>{   
   return repository.doSignup(userData)
   }
  return {
    doSignup
  }
}

export type usertypeofRepository = typeof userRepository