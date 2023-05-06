import React, { useState } from 'react'
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
const { successfulleyRgistration } = SweetAlert()

const handleSubmit = async (e)=>{
    console.log(e, "hi");
    let formStatus = await isValidForm(e)
    if(!formStatus) {
        invalidRegistration()
        return 
    }
    try{
        // Rergister api call
        const signupResponse = await dosignup(signForm)
        console.log('success');
        successfulleyRgistration()
        navigate('/login')
    } catch (error) {
        console.log(error.msg);
        invalidRegisterCred(error)
    }
}

const [userType, setUserType] = useState('');
// const [selectedOption, setSelectedOption] = useState('');

const handleUserTypeChange = (e) => {
    console.log(e.target.value);
  setUserType(e.target.value);
  if(userType === "mentor"){
    signForm.field = 'mentor'
  }else {
    signForm.field = 'student'
  }
 
};

const handleOptionChange = (e) => {
    console.log(e.target.value);
    if(userType == "student"){
        signForm.course = e.target.value
    }else{
        signForm.subject = e.target.value
    }
  setUserType('')
};

const courseOptions = [
  { value: 'Pluse one', label: 'Pluse one' },
  { value: 'Pluse two', label: 'Pluse tow' },
];

const subjectOptions = [
  { value: 'maths', label: 'Math' },
  { value: 'malaylaam', label: 'English' },
  { value: 'history', label: 'History' },
];

  return (
    <>
   
        <div className=' flex h-full justify-center p-20  items-center lg:px-6'>

            <div className=' w-1/2 m-autobg-[conic-gradient(var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 rounded-lg border  hover:shadow-blue-500/50 shadow-xl  py-10 px-9'>
                {/* <h1 className='text-2xl font-medium text-primary mb-7 text-center animate-pulse text-myblue hover:text-sky-600'>
                    Sign Up
                </h1> */}
                <div className='flex justify-center items-center'>

                <img className='w-40 ' src="\public\images\lo1.png" alt="" />
                </div>
                <form onSubmit={ handleSubmit }>
                    <div>
                        <p className='text-red-500 text-sm font-size: 0.75rem'>{errors.fname}</p>
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
                        <p className='text-red-500 text-sm font-size: 0.75rem'>{errors.lname}</p>
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
                        <p className='text-red-500 text-sm font-size: 0.75rem'>{errors.email}</p>
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
                        <p className='text-red-500 text-sm font-size: 0.75rem'>{errors.phone}</p>
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
                        <p className='text-red-500 text-sm font-size: 0.75rem'>{ errors.password }</p>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                            name='password'
                            onChange={ handleInputs }
                            value={ signForm.password }
                        /> 
                        <p className='text-red-500 text-sm font-size: 0.75rem'>{ errors.confirmPassword }</p>

                          <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='confrm_password'
                            placeholder='Confirm Password'
                            name='confirmPassword'
                            onChange={ handleInputs }
                            value={ signForm.confirmPassword }
                        /> 

                        <div>
                            <div className='flex gap-3'>
                                <label>
                                <input
                                name='field'
                                type="radio"
                                value="mentor"
                                checked={userType === 'mentor'}
                                onChange={handleUserTypeChange}
                                />
                                Mentor
                                </label>

                                <label>
                                <input
                                name='field'
                                type="radio"
                                value="student"
                                checked={userType === 'student'}
                                onChange={handleUserTypeChange}
                                />
                                Student
                                </label>
                            </div>
                            <div>
                                {
                                    userType == "student" && 
                                    <div>
                                        <select name="" onChange={handleOptionChange} id="">
                                            <option value="">Select course</option>
                                            {
                                                courseOptions.map((course)=>{
                                                    return(
                                                        <option value={course.value}>{course.label}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                }
                                {
                                    userType == "mentor" && 
                                    <div>
                                        <select name="" onChange={handleOptionChange} id="">
                                            <option value="">Select Your Subject</option>
                                            {
                                                subjectOptions.map((subject)=>{
                                                    return(
                                                        <option value={subject.value}>{subject.label}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                }
                            </div>
                            </div>        
                    </div>
                    
                    <p className='text-blue-900 text-right text-sm'>Already have an account?<span onClick={()=>{navigate('/login')}} className='text-green-500 underline ml-1 hover:text-red-500 hover:cursor-pointer text-sm'>Login</span></p>
                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark bg-gradient-to-r from-sky-500 to-myblue hover:from-myblue hover:to-sky-500 ...`}
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


