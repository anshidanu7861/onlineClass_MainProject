import { AuthService } from "../../frameWorks/services/authServies";
import { userInterface } from "../../types/authInterface";


export const authServiceInterface = (service: ReturnType<AuthService>)=> {

    const encriptPassword = (password: string) =>{
        return service.encrypt(password)
    }

    const comparePassword = (password: string, encriptPassword: string)=>{
        return service.ComparePassword(password, encriptPassword)
    }


    return {
        encriptPassword,
        comparePassword
    }
}

export type authServiceInterfaceType = typeof authServiceInterface;