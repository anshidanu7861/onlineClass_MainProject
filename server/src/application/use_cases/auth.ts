import { authType } from "../../frameWorks/database/mongodb/repositories/userReposioryMongo";
import { userInterface } from "../../types/authInterface";
import { authServiceInterfaceType } from "../services/authServiesInterface";


export const addUser = async(
    userData: userInterface,
    userDbRepository: ReturnType<authType>,
    authServices: ReturnType<authServiceInterfaceType>
    )=>{
        userData.email = userData.email?.toLowerCase()
        userData.password  = await authServices.encriptPassword(userData.password)
        const user = await userDbRepository.doSignup(userData)
        
    }
