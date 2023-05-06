import React from 'react'
import StudentSideNav from '../navbar/StudentSideNav'
import StudentNavbar from '../navbar/StudentNavbar'
import PieChart from '../chart/Piechart'
import BarChart from '../chart/Barchart'



function StudentDashboard() {
  return (
    <div >
      <div className='flex w-full'>

      <div>
       <StudentSideNav />
      </div>
      <div className='w-full'>
        <StudentNavbar />
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

export default StudentDashboard
