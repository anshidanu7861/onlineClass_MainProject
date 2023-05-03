import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { Link }from 'react-router-dom'

function LandingFooter() {
  return (
    <div className='bg-gradient-to-br from-myblue to-sky-500 h-96'>
        <div className='md:grid grid-cols-3 md:p-20 p-5'>
        <div className=''>
           <Link to={'#'}><FaFacebookF /></Link>
           <Link to={'#'}><FaFacebookF /></Link>
           <Link to={'#'}><FaFacebookF /></Link>

        </div>
        <div>
        <h1 className='text-white font-serif font-semibold'>PHOENIX GROUP OF EDUCATION</h1>

        </div>
        <div>

        </div>
        </div>
     
    </div>
  )
}

export default LandingFooter
