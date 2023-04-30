import React from 'react'
import { useNavigate } from 'react-router-dom'


function LandingPageNavbar() {

    const navigate = useNavigate()

  return (
    <div className='md:grid grid-cols-2'>
      <div className='bg-white w-full h-1/2 md:grid grid-cols-2'>
        <img className=' pt-3 ml-20 h-20 ' src="\public\images\lo1.png" alt="" />
      </div>
      <div className='flex flex-col justify-center items-end mr-10'> 
      <button type='submit' onClick={()=>{navigate('/login')}} className='border rounded-md border-x-cyan-500 border-t-blue-500 border-b-sky-400 shadow-lg hover:bg-gradient-to-r from-cyan-400 to-blue-900 h-10 w-36 text-blue-500 hover:text-white '>Login
      </button>
      </div>
    </div>
  )
}

export default LandingPageNavbar;
