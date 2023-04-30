import React from 'react'
import LandingPageNavbar from '../navbar/LandingPageNavbar';

function LandingPage() {
  return (
    <div className=''>
   <LandingPageNavbar />
   <br />
    <div className='md:grid grid-cols-2 md:p-20 p-5 '>
      <div className=' h-96 flex flex-col justify-center items-center md:p-10 gap-3'>
        <h1 className='text-3xl font-bold text-slate-900 font-serif'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, excepturi</h1>
      <p className='font-sm text-gray-400 text-sm'>Phoenix Group of Education has the reputation, academic facilities, experienced faculty and accreditations to make it a preferred choice for an education in MEDICAL/ENGINEERING ENTARNCE COACHING, +1,+2 SCIENCE TUITION and ONLINE COACHING Using PHOENIX LEARNING APP.</p>
      </div>
      <div className=' '>
        <img src="https://tegain.com/static/images/spotlight-web.png" alt="image" className='h-96 md:p-5 rounded ' />
      </div>
    </div>

    <div className='md:grid grid-cols-2 md:p-20 p-5 '>
      <div className=''>
        <img src="https://static.vecteezy.com/system/resources/previews/005/051/189/original/boy-study-in-online-school-illustration-concept-flat-illustration-isolated-on-white-background-vector.jpg" alt="" className='h-96 md:p-5 rounded' />
      </div>
      <div className=' h-96 flex flex-col justify-center items-center md:p-10 gap-3'>
      <h1 className='text-3xl font-bold text-slate-900 font-serif'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, excepturi</h1>
      <p className='text-sm text-gray-400 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente consequuntur nobis perferendis quos cumque reprehenderit totam temporibus fuga in debitis.</p>
      </div>
    </div>

    </div>
  )
}

export default LandingPage;
