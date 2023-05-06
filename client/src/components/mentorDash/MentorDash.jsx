import React from 'react'
import MentorNavbar from '../navbar/mentorNavbar';
import MentorSideNav from '../navbar/MentorSideNav';
import BarChart from '../chart/Barchart';
import PieChart from '../chart/Piechart';

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
       <PieChart percentage={50}/>
      </div>
      </div>
    </div>

    </div>
  
  </div>
  )
}

export default MentorDash;
