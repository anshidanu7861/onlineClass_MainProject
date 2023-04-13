import { AuthService } from "../../frameWorks/services/authServies";
import { userInterface } from "../../types/authInterface";


export const authServiceInterface = (service: ReturnType<AuthService>)=> {

    const encriptPassword = (password: string, ) =>{
        return service.encrypt(password )
    }

    const comparePassword = (password: string, encriptPassword: string)=>{
        console.log(password, "nannna nannna");
        
        return service.ComparePassword(password, encriptPassword)
    }

    const encriptConfirmPassword = (confirmPassword: string) =>{
        return service.encrypt(confirmPassword)
    }

    const compareConfirmPassword = (confirmPassword: string, encriptConfirmPassword:string)=> {
        return service.ComparePassword(confirmPassword, encriptConfirmPassword)
    }



    return {
        encriptPassword,
        comparePassword,
        encriptConfirmPassword,
        compareConfirmPassword
    }
}

export type authServiceInterfaceType = typeof authServiceInterface;