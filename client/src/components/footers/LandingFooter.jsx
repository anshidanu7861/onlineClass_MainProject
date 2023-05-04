import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { Link }from 'react-router-dom'
import { IconContext } from 'react-icons'
import { useNavigate } from 'react-router-dom'

function LandingFooter() {
  const navigate = useNavigate()
  return (
    
    <div className='bg-gradient-to-br from-myblue to-sky-700 h-72 w-full '>
        <h1 className='text-center font-serif font-semibold text-white pt-7'>PHOENIX GROUP OF EDUCATION</h1>
        
        <div className='grid md:grid-cols-3 pt-20 '>
          <div className='gap-2 flex ml-10'>
          <IconContext.Provider
          value={{
            color:"white",
            size:"25px"
          }} 
          >
           <Link to={'#'}><FaFacebookSquare /></Link>
           <Link to={'#'}><FaInstagramSquare /></Link>
           <Link to={'#'}><FaLinkedin /></Link>
           </IconContext.Provider>
          </div>
          <div className='flex justify-center'>
            <div className='bg-white p-1 border rounded-md flex'>
            <img className='w-9 h-9 rounded-full' src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1280px-Flag_of_India.svg.png" alt="" />
              <p className='p-2'>+91</p>
            <input className='bg-white border-0 ' type="text" placeholder='Enter Your Number' />
            <button className=' rounded-md p-1 bg-sky-300' type='submit'>Submit</button>
            </div>
          </div>
          <div className='flex justify-end mr-11 gap-1'>
            <div className='flex-col '>
               <h1 className='text-white font-extrabold font-sans'>Contact Us</h1>
               <div className='flex flex-row gap-4'>
                <h1 className='text-white font-light'>+91 9539391602,</h1>
                <h1 className='text-white font-light'>phoenixonlinekkv1@gmail.com</h1>
                </div>
              </div>
              <br />
           
          </div>
        </div>
      
        <br />
        <div className='bg-sky-500 bg-opacity-20 md:h-10 w-full'></div>
    </div>
   
  )
}

export default LandingFooter
