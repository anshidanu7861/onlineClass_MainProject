import React from 'react'

function StudentNavbar() {
  return (
    <div className='md:grid grid-cols-2'>
      <div className='bg-white w-full h-1/2 md:grid grid-cols-2'>
        <img className=' pt-3 ml-20 h-20 ' src="\public\images\lo1.png" alt="" />
      </div>
      <div className='flex flex-col justify-center items-end mr-10'> 
      <link className='' rel="stylesheet" href="" />Home &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <link className='' rel="stylesheet" href="" />Mentors &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <link className='' rel="stylesheet" href="" />Profile
      </div>
    </div>
  )
}

export default StudentNavbar
