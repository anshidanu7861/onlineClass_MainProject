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
        userData.confirmPassword = await authServices.encriptPassword(userData.confirmPassword)
        const user = await userDbRepository.doSignup(userData)
        
    }


export const isValidEmail = async(
    email: string , 
    password: string,
    userDBRepository: ReturnType<authType>,
    authServices: ReturnType<authServiceInterfaceType>
) =>{
    email = email.toLocaleUpperCase()
    const user : userInterface | null = await userDBRepository.findEmail(email)
    
    if(user) {
        const response = await authServices.comparePassword ( password, user.password)
        if(!response) {
            throw (error: Error)=>{
                console.log(error);
            }
        }
    }else{
        throw (err: Error)=> {
            console.log(err);
            
        }
    }
    return { user }
}
