import { AuthService } from "../../frameWorks/services/authServies";
import { userInterface } from "../../types/authInterface";
import jwt from 'jsonwebtoken'
import dotenvConfig from "../../configDotenv";


export const authServiceInterface = (service: ReturnType<AuthService>)=> {

    // ENCRYPT PASSWORD
    const encriptPassword = (password: string, ) =>{
        return service.encrypt(password )
    }

    // COMPARE PASSWORD
    const comparePassword = (password: string, encriptPassword: string)=>{
        return service.ComparePassword(password, encriptPassword)
    }

    // ENCRYPT CONFIRM PASSWORD
    const encriptConfirmPassword = (confirmPassword: string) =>{
        return service.encrypt(confirmPassword)
    }

    // COMPARE CONFIRM PASSWORD
    const compareConfirmPassword = (confirmPassword: string, encriptConfirmPassword:string)=> {
        return service.ComparePassword(confirmPassword, encriptConfirmPassword)
    }

    // CREATE ACCESS TOKEN
    const generateAccessToken = async (payload: string) => {
        const token =  jwt.sign({payload}, dotenvConfig.access_token_key, {expiresIn: '30s'})
        return token;
    }

    // CREATE REFRESH TOKEN
    const generateRefreshToken = async (payload: string) => {
        const token =  jwt.sign({payload}, dotenvConfig.refresh_token_key, {expiresIn: '1w'})
        return token;
    }

    // VERIFY REFRESH TOKEN
    const verifyRefreshToken = async (token: string) => {
        return jwt.verify(token, dotenvConfig.refresh_token_key)
    }


    return {
        encriptPassword,
        comparePassword,
        encriptConfirmPassword,
        compareConfirmPassword,
        generateAccessToken,
        generateRefreshToken,
        verifyRefreshToken,
    }
}

export type authServiceInterfaceType = typeof authServiceInterface;