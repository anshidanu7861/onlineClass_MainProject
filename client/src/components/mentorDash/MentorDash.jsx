import React from 'react'
import MentorNavbar from '../navbar/mentorNavbar';
import MentorSideNav from '../navbar/MentorSideNav';
import BarChart from '../chart/Barchart';
import MyCalender from '../chart/Calender';
import MentorPieChart from '../chart/MentorPieChart';

function MentorDash() {
  return (
    <div >
    <div className='flex w-full'>

    <div>
     <MentorSideNav />
    </div>
    <div className='w-full'>
      <MentorNavbar />
      <div>
      <div className=' grid md:flex  md:grid-cols-1 w-1/2 p-10 md:p-10  gap-28'>
        <BarChart/>
       <MentorPieChart percentage={30}/>
      </div>
      <div className='p-5 grid '>
       <MyCalender />
      </div>

      {/* <div className='flex gap-11 p-10'>

      <div className='w-40 h-40 bg-gray-400 border rounded-lg shadow-lg p-10'>
      </div>
      <div className='w-40 h-40 bg-red-400 p-10'>
        <p className=''>Total Students</p>
      </div>
      </div> */}

      </div>
    </div>

    </div>
  
  </div>
  )
}

export default MentorDash;
