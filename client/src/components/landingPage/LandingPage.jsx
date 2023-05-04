import React, { useEffect } from 'react'
import LandingPageNavbar from '../navbar/LandingPageNavbar';
import LandingFooter from '../footers/landingFooter';
import Aos from 'aos'
import 'aos/dist/aos.css'

function LandingPage() {
  useEffect(()=>{
    Aos.init({duration: 2000})
  })
  return (
    <div className=''>
   <LandingPageNavbar />

    <div className='md:grid grid-cols-2 md:p-20 p-5 '>
      <div className=' h-96 flex flex-col justify-center items-center md:p-10 gap-3' data-aos = "fade-right">
        <h1 className='text-3xl font-bold text-slate-900 font-serif'>Upgrade Your Skills, Unleash Your Potential with Phoenix Group Of Education - Your Ultimate Learning Destination</h1>
      <p className='font-sm text-gray-400 text-sm'>Phoenix Group of Education has the reputation, academic facilities, experienced faculty and accreditations to make it a preferred choice for an education in MEDICAL/ENGINEERING ENTARNCE COACHING, +1,+2 SCIENCE TUITION and ONLINE COACHING Using PHOENIX LEARNING APP.</p>
      </div>
      <div className=' ' data-aos = "fade-left">
        <img src="https://learndigital.withgoogle.com/static/digital-workshop/assets/imgs/homepage/img_digital-workshop_hero_xs.webp" alt="image" className='h-96 md:p-5 rounded ' />
      </div>
    </div>

    <div className='md:grid grid-cols-2 md:p-20 p-5 '>
      <div className='' data-aos = "fade-up">
        <img src="https://static.vecteezy.com/system/resources/previews/005/051/481/original/schoolboy-learning-online-course-on-mobile-illustration-concept-flat-illustration-isolated-on-white-background-vector.jpg" alt="" className='h-96 md:p-5 rounded' />
      </div>
      <div className=' h-96 flex flex-col justify-center items-center md:p-10 gap-3' data-aos = "fade-up">
      <h1 className='text-3xl font-bold text-slate-900 font-serif'>Join the Learning Revolution with Phoenix Group Of Education - Unleashing Your Potential, One Click at a Time</h1>
      <p className='text-sm text-gray-400 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente consequuntur nobis perferendis quos cumque reprehenderit totam temporibus fuga in debitis.</p>
      </div>
    </div>

    <div className='lg:grid grid-cols-2 md:p-20 p-5  justify-center content-center'>
    <div className='flex flex-col justify-center md:p-10' data-aos = "fade-up">
      <h1 className='justify-center items-center md:p-10 text-7xl font-extrabold font-serif bg-gradient-to-r from-blue-600 via-sky-500 inline-block text-transparent bg-clip-text' >About Us <br /> <p className='font-medium text-xl font-sans'> PHOENIX GROUP OF EDUCATION</p></h1>
    </div>
      <div className='h-auto flex flex-col  justify-center md:p-20 gap-3 bg-opacity-60 bg-gradient-to-br from-myblue to-sky-500 border rounded-md' >
        <h1 className='text-white '>Phoenix Group of Education has the reputation, academic facilities, experienced faculty and accreditations to make it a preferred choice for an education in MEDICAL/ENGINEERING ENTARNCE COACHING ,+1,+2 SCIENCE TUITION and ONLINE COACHING Using PHOENIX LEARNING APP. Phoenix Group of Education has an option to cater the student in academics as well as co-curricular activities. Our alumni stand testimony to our quality. A word of opportunities awaits you at Phoenix Group of Education.
        Phoenix Group of Education is one of the major educational institute in Malabar region, started in 2009 at kalikavu in Malappuram district. Now it extended her root to five vivid places in Malabar.Phoenix Group of Education is a product of visionary thought by Mr SHABEER PULATH Physics and hard work of selfless personalities such as Mr ILSHAD SABAH Biology, Mr SIMIL SEBASTIAN Mathematics, Mr PRADEEP Chemistry, Mujeeb Rahman AP Director-pookottumpadam, Shihabudheen T Director-nilambur Manoj KP Director-wandoor, Swapna Admin-wandoor and Bindu Admin-wandoor.
      </h1>
      </div>
    </div>

    <div className='bg-gray-100'>

    <div className='grid grid-cols-2 md:grid-cols-4 md:p-10 p-5  justify-center content-center gap-3 '  data-aos = "fade-up">
      <div className='border rounded-md h-auto flex flex-col justify-center md:p-10 gap-3 hover:bg-gradient-to-br from-myblue to-sky-500 shadow-lg'> 
          <h1 className='font-semibold text-center'>NEET BATCH</h1>
          <p className='p-5 text-xs'>Target Group - Students who completed STD XII
          Duration - One Year (June - April)
          Class Timing: 8.30 am – 5.00 pm
          Admission Time - April – August
          Admission Criteria - Class XII Mark Basis / NEET Rank or Score
          </p>
      </div>
      <div className='border rounded-md h-auto flex flex-col justify-center md:p-10 gap-3 hover:bg-gradient-to-br from-myblue to-sky-500 shadow-lg'>
          <h1 className='font-semibold text-center '>JEE BATCH</h1>
          <p className='p-5 text-xs'>Target Group - Students who completed STD XII
            Duration - One Year (June - April)
            Class Timing: 8.30 am – 5.00 pm
            Admission Time - April – August
            Admission Criteria - Class XII Mark Basis / JEE Rank, Score or Percentile
          </p>
      </div>
      <div className='border rounded-md h-auto flex flex-col justify-center md:p-10 gap-3 hover:bg-gradient-to-br from-myblue to-sky-500 shadow-lg'>
        <h1 className='font-semibold text-center '>IIT SPECIAL BATCH</h1>
        <p className='p-5 text-xs'>Target Group - Students who completed STD XII
          Duration - One Year (June - February)
          Class - Monday to Saturday
          Class Timing: 8.30 am – 5.00 pm
          Admission Time - April – August
          Admission Criteria - Class XII Mark Basis / JEE Rank, Score or Percentile
      </p>
      </div>
      <div className='border rounded-md h-auto flex flex-col justify-center md:p-10 gap-3 hover:bg-gradient-to-br from-myblue to-sky-500 shadow-lg'>
        <h1 className='font-semibold text-center'>DIRECT BATCH</h1>
        <p className='p-5 text-xs'>Target Group - Students who completed STD X
          Duration - Two Year
          Class Timing: 8.30 am – 5.00 pm
          Admission Time - April – June
          Admission Criteria - Class X Mark Basis / PTSE Rank or Score
          </p>
      </div>
      <div className='border rounded-md h-auto flex flex-col justify-center md:p-10 gap-3 hover:bg-gradient-to-br from-myblue to-sky-500 shadow-lg'>
        <h1 className='font-semibold text-center'>MEDICAL / ENGINEERING </h1>
        <p className='p-5 text-xs'>Target Group - Students who awaiting STD XII Result
          Duration – 40 days (Classes start immediately after the completion of plus two board examinations and lasts up to NEET)
          Class Timing: 8.30 am – 5.00 pm
          Admission Time - February – April
          Admission Criteria - Class XI Mark Basis / Mega test Rank or Score
         </p>
      </div>
      <div className='border rounded-md h-auto flex flex-col justify-center md:p-10 gap-3 hover:bg-gradient-to-br from-myblue to-sky-500 shadow-lg'>
        <h1 className='font-semibold text-center'>+1 SCIENCE TUITION </h1>
        <p className='p-5 text-xs'>Target Group - Students who completed STD XI
          Duration - One Year (May – March)
          Class – Morning Batch - Monday to Friday
          Class Timing: 7.00 AM – 8.30 AM (Morning Batch)
          Admission Time - April – June
          Admission Criteria - Class X Mark Basis / PTSE Rank or Score
          </p>
      </div>
      <div className='border rounded-md h-auto flex flex-col justify-center md:p-10 gap-3 hover:bg-gradient-to-br from-myblue to-sky-500 shadow-lg'>
        <h1 className='font-semibold text-center'>+2 SCIENCE TUITION </h1>
        <p className='p-5 text-xs'>Target Group - Students who completed STD X
          Duration - One Year (April – March)
          Holiday batch - Sunday, Saturday and all Holidays
          Admission Time - April – June
          Admission Criteria - Class XI Mark Basis / Mega test Rank or Score
         </p>
      </div>
      <div className='border rounded-md h-auto flex flex-col justify-center md:p-10 gap-3 hover:bg-gradient-to-br from-myblue to-sky-500 shadow-lg'>
        <h1 className='font-semibold text-center'>SPECIAL NIGHT REVISION</h1>
        <p className='p-5 text-xs'>Target Group - Students who studied in STD XI or XII
          Duration – Three Months (December – March)
          Class – Monday to Saturday
          Admission Time – November - January
          Admission Criteria - Class XI / XII Mark Basis / Mega test Rank or Score
          </p>
      </div>

    </div>
    </div>
    <LandingFooter />
    </div>
  )
}

export default LandingPage;
