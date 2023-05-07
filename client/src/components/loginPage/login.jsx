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
            const accessToken = emailVerifyResponse.token
            const { _id, fname,email, field, } = emailVerifyResponse.user
            dispatch(setDetails({ _id, fname, email,field, accessToken }))
            if(field === 'mentor') {
                navigate('/mentorsDashboard')
            }else{
                navigate('/studentDashboard')
            }
        }catch(error) {
            invalidLogin()
            console.log(error.msg);
        };

    }

    const googleLogindata = async(userInfo)=>{
        try{
            const googleResponse = await googleLoginApi({email:userInfo.email})
            const accessToken = googleResponse.token
            const {_id, fname, email, field } = googleResponse.user
            dispatch(setDetails({_id, fname, email,field, accessToken }))
            if(field === 'mentor'){
                navigate('/mentorsDashboard')
            }else{
                navigate("/studentDashboard")
            }
        }catch(err){
            googleLoginError()
            console.log(err);
        }
    }

  

    return(
        <>
        <div className='flex h-full justify-center p-32  items-center lg:px-6'>

                 <div className='  m-autobg-[conic-gradient(var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 rounded-lg border  hover:shadow-blue-500/50 shadow-xl  py-10 px-9'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center animate-pulse text-myblue hover:text-sky-500'>
                    Sign In
                </h1>
                <div className="flex items-start">
                <div>

                <button
                onClick={otpLoginPage}
                type="button" 
                className="  flex items-start  bg-gradient-to-t from-white to-white   justify-center  p-3 border border-black rounded-md focus:ring-2
                focus:ring-offset-1 focus:ring-myblue">
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
                        <button
                            className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark bg-gradient-to-r from-sky-500 to-myblue hover:from-myblue hover:to-sky-500`}
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