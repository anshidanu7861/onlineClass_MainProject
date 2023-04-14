import { authType } from "../../frameWorks/database/mongodb/repositories/userReposioryMongo";
import { userInterface } from "../../types/authInterface";
import { authServiceInterfaceType } from "../services/authServiesInterface";
import AppError from "../../utils/appErrors";
import { HttpStatus } from "../../types/httpStatus";

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
    if(!user) {
        throw new AppError ("this user does't exist", HttpStatus.UNAUTHORIZED)
    }else{
        const response = await authServices.comparePassword ( password, user.password)
        if(!response) {
            throw new AppError("Sorry, incorrect password", HttpStatus.UNAUTHORIZED)
        }
        const token = await authServices.generateAccessToken(user._id as string)
        const refreshToken = await authServices.generateRefreshToken(user._id as string)
        return { user, token, refreshToken }
    }
}


// export const googleLogin = async(
//     email: string,
//     userDBRepository: ReturnType<authType>,

// ) =>{
//     const user : userInterface | null = await userDBRepository.findEmail(email)
//     console.log(user, "usere kitty");
    
//     if(!user){
//         console.log('no user found');
        
//     }else{
//         console.log('success');
        
//     }

//     return user;
// }