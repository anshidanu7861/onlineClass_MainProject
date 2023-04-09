import React from 'react'
import { useNavigate } from 'react-router-dom'
// API
import authAPI from '../../API/authAPI'
// TOASTIFY
import { invalidRegistration, invalidRegistrationCard } from '../../config/toastifyConfig'
// COSTOM HOOK FOR VALIDATION
import userSignupValidation from '../../Hooks/signupValidation'

function Signup() {
const navigate = useNavigate()
const { handleInputs, isValidForm, signForm, error  } = userSignupValidation() 
const { dosignup } = authAPI()

const handleSubmit = async (e)=>{
    let formStatus = await isValidForm(e)
    if(!formStatus) {
        invalidRegistration()
        return 
    }
    try{
        // Rergister api call
        const signupResponse = await dosignup(signForm)
        console.log(signupResponse);
    } catch (error) {
        invalidRegistrationCard(error)
        console.log(error);
    }
}

  return (
    <div className=''>
    <div className='h-screen flex bg-gray-bg1'>
      
            <div className='w-full max-w-md m-auto   rounded-lg border  shadow-default py-10 px-9'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center text-black'>
                    Sign Up
                </h1>
                <form onSubmit={handleSubmit}>
                <div>
                        <label htmlFor='fname'>First Name</label>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='fname'
                            placeholder='Your Name'
                            name='fname'
                            onChange={handleInputs}
                            value={signForm.fname}
                        />
                        <p className='text-red-500'>{error.fname}</p>

                    </div>
                    <div>
                        <label htmlFor='lname'>Last Name</label>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='lname'
                            placeholder='Your Name'
                            name='lname'
                            onChange={ handleInputs }
                            value={signForm.lname}
                        />
                        <p className='text-red-500'>{error.lname}</p>

                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                            name='email'
                            onChange={ handleInputs }
                            value={signForm.email}
                        />
                        <p className='text-red-500'>{error.email}</p>

                    </div>
                    <div>
                        <label className='' htmlFor='phone'>Phone</label>
                        <input
                            type='phone'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='phone'
                            placeholder='Phone Number'
                            name='phone'
                            onChange={ handleInputs }
                            value={signForm.phone}
                        />
                        <p className='text-red-500'>{error.phone}</p>

                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                            name='password'
                            onChange={ handleInputs }
                            value={signForm.password}
                        /> 
                        <p className='text-red-500'>{error.password}</p>
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark bg-gradient-to-r from-gray-400 to-purple-500 hover:from-purple-500 hover:to-gray-500 ...`}
                            type='submit'
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

  )
}

export default Signup


