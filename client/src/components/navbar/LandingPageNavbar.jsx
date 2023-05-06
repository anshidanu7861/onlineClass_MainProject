import React from 'react'
import { useNavigate, Link } from 'react-router-dom'


function LandingPageNavbar() {

    const navigate = useNavigate()

  return (
    <div className='md:grid grid-cols-2 '>
      <div className='bg-white  '>
        <img className=' pt-3 ml-20 h-20 ' src="\public\images\lo1.png" alt="" />
      </div>
      <div className='flex justify-end gap-5  items-center mr-10 '> 
        {/* <Link to={'#'}><span className='text-blue-500'>About</span></Link> */}
      <button type='submit' onClick={()=>{navigate('/signup')}} className='font-medium border rounded-md border-x-cyan-500 border-t-blue-500 border-b-sky-400 shadow-lg hover:bg-gradient-to-r from-cyan-400 to-blue-900 h-10 w-36 text-blue-500 hover:text-white '>
        Apply Now
      </button>
      </div>
    </div>
  )
}

export default LandingPageNavbar;
