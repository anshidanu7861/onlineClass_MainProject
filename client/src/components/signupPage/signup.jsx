import React from 'react'

function Signup() {

const handleSubmit = (()=>{
   
})

  return (
    <div className=''>

    <div className='h-screen flex bg-gray-bg1'>
      
            <div className='w-full max-w-md m-auto bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  rounded-lg border  shadow-default py-10 px-9'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center text-black'>
                    Sign Up
                </h1>
                <form >
                <div>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='name'
                            placeholder='Your Name'
                            
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div>
                        <label className='' htmlFor='phone'>Phone</label>
                        <input
                            type='phone'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='phone'
                            placeholder='Phone Number'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark bg-gradient-to-r from-gray-400 to-purple-500 hover:from-purple-500 hover:to-gray-500 ...`}
                            type='submit'
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

  )
}

export default Signup


