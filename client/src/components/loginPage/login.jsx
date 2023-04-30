import React from "react";
import {  useNavigate } from 'react-router-dom'
// TOASTYFY
import { ToastContainer } from 'react-toastify'
import loginValidation from "../../Hooks/loginValidation";
// Auth API
import authAPI from "../../API/authAPI";
import { invalidRegistration, invalidLogin, googleLoginError } from "../../config/toastifyConfig";
//Redux
import { setDetails } from "../../Redux/userSlice/userSlice";
import { useDispatch } from 'react-redux'

// GoogleLogin
import GoogleLoginButton from "../googleAuth/GoogleAuth";

function Login() {
    const { handleInput, isValidForm, loginForm, errors } = loginValidation()
    const { verifyEmail, googleLoginApi } = authAPI()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const otpLoginPage = ()=>{
        navigate('/otpLoginPage')
    }

    const handleSubmit = async (e)=>{
        let formStatus = await isValidForm(e)
        if(!formStatus) {
            invalidRegistration()
            return;
        }

        try{
            const emailVerifyResponse = await verifyEmail(loginForm)
            const { userId, fname, email, accessToken } = emailVerifyResponse
            dispatch(setDetails({ userId, fname, email, accessToken }))
            navigate('/')
        }catch(error) {
            invalidLogin()
            console.log(error.msg);
        };

    }

    const googleLogindata = async(userInfo)=>{
        try{
            const googleResponse = await googleLoginApi({email:userInfo.email})
            const {userId, fname, email, accessToken } = googleResponse
            dispatch(setDetails({userId, fname, email, accessToken }))
            navigate('/')
        }catch(err){
            googleLoginError()
            console.log(err);
        }
    }

  

    return(
        <>
        <div className=' w-full px-5  flex h-screen items-center lg:px-60 '>
            <div className='md:flex-col hidden w-1/2  rounded-lg border shadow-lg hover:shadow-pink-300 lg:h-7/1 items-center  md:flex justify-center   py-10 px-9'>
                <div className=''>
                <img className='h-12' src="\public\images\lo1.png" alt="phoenix icon " />
                </div>
                <div className=' items-center'>
                <img className='h-1/2 w-2/2'  src="https://coursegate.co.uk/wp-content/uploads/2021/09/Online-classroom-vector-illustration-768x512.jpg" alt="" />
                </div>
     
            </div>

                 <div className='w-full md:w-1/2 m-autobg-[conic-gradient(var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 rounded-lg border shadow-lg hover:shadow-blue-500/50   py-10 px-9'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center animate-pulse text-blue-300 hover:text-red-300'>
                    Sign Up
                </h1>

                <div className="flex items-start">
                <div>

                <button
                onClick={otpLoginPage}
                type="button" 
                className="  flex items-start  bg-gradient-to-t from-white to-white   justify-center  p-3 border border-black rounded-md focus:ring-2
                focus:ring-offset-1 focus:ring-violet-600">
                    <img className="" width={25} src="https://w7.pngwing.com/pngs/254/868/png-transparent-verified-ic-google-material-design-3-icon.png" alt="" />
                <p className='mt-1 ml-2 font-sans font-semibold'>OTP LOGIN</p>
                 </button>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>

                <GoogleLoginButton text = "Sign in With Google" handleUserInfo={ googleLogindata }/><br/>
                </div>
                </div>

                <form onSubmit={ handleSubmit }>
                    <div>
                        <p className='text-red-500 h-5'>{errors.email}</p>
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