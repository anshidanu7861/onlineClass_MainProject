import React from 'react'
import { useNavigate } from 'react-router-dom'
// API
import authAPI from '../../API/authAPI'
// TOASTIFY
import { invalidRegisterCred, invalidRegistration  } from '../../config/toastifyConfig'
import { ToastContainer } from 'react-toastify'
// COSTOM HOOK FOR VALIDATION
import userSignupValidation from '../../Hooks/signupValidation'
// IMPORT SWEET ALERT
import SweetAlert from '../sweetAlert/SuccessAlert'

function Signup() {
const navigate = useNavigate()
const { handleInputs, isValidForm, signForm, errors  } = userSignupValidation() 
const { dosignup } = authAPI()
const { successRgistration } = SweetAlert()

const handleSubmit = async (e)=>{
    let formStatus = await isValidForm(e)
    if(!formStatus) {
        invalidRegistration()
        return 
    }
    try{
        // Rergister api call
        const signupResponse = await dosignup(signForm)
        successRgistration()
        navigate('/')
    } catch (error) {
        console.log(error.msg);
        invalidRegisterCred(error)
    }
}

  return (
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



                <form onSubmit={ handleSubmit }>
                    <div>
                        <p className='text-red-500'>{errors.fname}</p>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='fname'
                            placeholder='First Name'
                            name='fname'
                            onChange={handleInputs}
                            value={signForm.fname}
                        />

                    </div>
                    <div>
                        <p className='text-red-500'>{errors.lname}</p>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='lname'
                            placeholder='Last Name'
                            name='lname'
                            onChange={ handleInputs }
                            value={signForm.lname}
                            />
                    </div>
                    <div>
                        <p className='text-red-500'>{errors.email}</p>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                            name='email'
                            onChange={ handleInputs }
                            value={signForm.email}
                            />

                    </div>
                    <div>
                        <p className='text-red-500'>{errors.phone}</p>
                        <input
                            type='tel'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='phone'
                            placeholder='Phone Number'
                            name='phone'
                            onChange={ handleInputs }
                            value={signForm.phone}
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
                            onChange={ handleInputs }
                            value={ signForm.password }
                        /> 
                        <p className='text-red-500'>{ errors.confirmPassword }</p>

                          <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='confrm_password'
                            placeholder='Confirm Password'
                            name='confirmPassword'
                            onChange={ handleInputs }
                            value={ signForm.confirmPassword }
                        /> 
                    <div className='flex'>
                        <div>
                        <input id='student' type="radio"  name='field' onChange={ handleInputs } value={ 'student' }/>
                        <label htmlFor="student" className='text-gray-400 pe-5'  >Student</label> 
                        </div>
                        <div>
                        <input id='mentor' type="radio"  name='field' className='' onChange={ handleInputs } value={ 'mentor' } required/>
                        <label htmlFor="mentor" className='text-gray-400'  >Mentor</label>
                        </div>
                    </div>
                    </div>
                    
                    <p className='text-blue-900 text-right text-sm'>Already have an account?<span onClick={()=>{navigate('/login')}} className='text-green-500 underline ml-1 hover:text-red-500 hover:cursor-pointer text-sm'>Login</span></p>
                    <div className='flex justify-center items-center mt-6'>
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

export default Signup


