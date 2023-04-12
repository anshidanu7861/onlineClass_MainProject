import React from "react";
import { useAsyncError, useNavigate } from 'react-router-dom'
// GOOGLE AUTHENTICATION
import { useGoogleLogin } from '@react-oauth/google'
// TOASTYFY
import { ToastContainer } from 'react-toastify'
import loginValidation from "../../Hooks/loginValidation";
import authAPI from "../../API/authAPI";
import { invalidRegistration, invalidLogin } from "../../config/toastifyConfig";


function Login() {

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });
    const navigate = useNavigate()
    const { handleInput, isValidForm, loginForm, errors } = loginValidation()
    const { verifyEmail } = authAPI()
    
    const handleSubmit = async (e)=>{
        let formStatus = await isValidForm(e)
        if(!formStatus) {
            invalidRegistration()
            return;
        }

        try{
            const loginResponse = await verifyEmail(loginForm)
        }catch(error) {
            invalidLogin()
            console.log(error.msg);
        }
    }

    return(
        <>
        <div className=' w-full px-5  flex h-screen items-center lg:px-60'>
            <div className='md:flex-col hidden w-1/2  rounded-lg border shadow-lg hover:shadow-pink-300 lg:h-4/5 items-center  md:flex justify-center   py-10 px-9'>
                <div className=''>
                <img className='' src="\public\images\lo1.png" alt="phoenix icon" />
                </div>

                <div className=' items-center'>
                <img className='h-1/2 w-2/2'  src="\public\images\BSC-Computer-Science-vs-BCA.jpg" alt="" />

                </div>
     
            </div>

            <div className='w-full md:w-1/2 m-autobg-[conic-gradient(var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 rounded-lg border shadow-lg hover:shadow-blue-500/50   py-10 px-9'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center animate-pulse text-blue-300 hover:text-red-300'>
                    Sign Up
                </h1>

                <button onClick={()=>login()} type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                 <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                 Sign in with Google
                </button>

                <form onSubmit={ handleSubmit }>
                    <div>
                        <p className='text-red-500'>{errors.email}</p>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                            name='email'
                            onChange={ handleInput }
                            value={loginForm.email}
                            />

                    </div>
                 
                    <div>
                        <p className='text-red-500'>{ errors.password }</p>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                            name='password'
                            onChange={ handleInput }
                            value={ loginForm.password }
                        /> 
                     
                  
                    </div>
                    
                    <p className='text-blue-900 text-right text-sm'>don't have an account?<span onClick={()=>{navigate('/signup')}} className='text-green-500 underline ml-1 hover:text-red-500 hover:cursor-pointer text-sm'>Register</span></p>
                    <div className='flex justify-center items-center mt-6'>
                        <input type="" />
                        <button
                            className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark bg-gradient-to-r from-gray-500 to-black hover:from-black hover:to-gray-500 ...`}
                            type='submit'
                            >
                            Submit
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>

    <ToastContainer />
    </>
    )
}

export default Login;