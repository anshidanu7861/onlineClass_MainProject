import React from "react";
import {  useNavigate } from 'react-router-dom'
// TOASTYFY
import { ToastContainer } from 'react-toastify'
// Auth API
import { invalidRegistration, invalidLogin } from "../../config/toastifyConfig";
// Validation
import adminLoginValidation from "../../Hooks/adminLoignValidation";
import adminAPI from "../../API/adminAPI";

function AdminLogin() {
    const { adminVerification } = adminAPI()
    const navigate = useNavigate()
    const {handleInput, isValidForm, adminLogin, error } = adminLoginValidation()

    const handleSubmit = async (e)=>{
        let formStatus = await isValidForm(e)
        if(!formStatus) {
            invalidRegistration()
            return;
        }

        try{
        
            const AdminLoginResponse = await adminVerification(adminLogin)
               if(AdminLoginResponse){
                navigate('/adminDashboard')
               } else{
                invalidLogin()
               }
        }catch(error) {
            invalidLogin()
            console.log(error.msg);
        };

    }

    return(
        <>
        <div className='flex h-full justify-center p-32  items-center '>

                 <div className='  m-autobg-[conic-gradient(var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 rounded-lg border  hover:shadow-blue-500/50 shadow-xl  py-10 px-9'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center animate-pulse text-myblue hover:text-sky-500'>
                    AdminLogin
                </h1>

                    <div className="w-96 flex justify-center"> 

                   <img className="w-30" src="\public\images\lo1.png" alt="" />
                    </div>
            <br />
                <form onSubmit={ handleSubmit }>
                    <div>
                        <p className='text-red-500 h-5'>{error.email}</p>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                            name='email'
                             onChange={ handleInput }
                            value={adminLogin.email}
                            />
 
                    </div>
                  
                    <div>
                        <p className='text-red-500'>{ error.password }</p>
                        <input
                            type='password'
                         className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                            name='password'
                             onChange={ handleInput }
                            value={ adminLogin.password }
                        /> 
                     
                  
                    </div>
                    
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

export default AdminLogin;