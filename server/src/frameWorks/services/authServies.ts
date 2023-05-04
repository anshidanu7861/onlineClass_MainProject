import bcrypt, { genSalt } from 'bcrypt'


export const authService = ()=> {
    const encrypt = async (password: string) => {
        const genSalt = await bcrypt.genSalt(10)
        password = await bcrypt.hash(password, genSalt)
        return password;
    }

    const ComparePassword = async (password: string, encriptPassword: string)=> {
        const status = await bcrypt.compare(password, encriptPassword)
        return status;
    }

    return {
        encrypt,
        ComparePassword,
    }
}

export type AuthService = typeof authService;
