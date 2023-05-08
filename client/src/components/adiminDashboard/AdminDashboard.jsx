import React from 'react'
import AdminNav from '../navbar/AdminNav'
import AdminSideNav from '../navbar/AdminSideNav'
import MyCalender from '../chart/Calender'


function AdminDashboard() {
  return (
    <div>
    <div className='flex w-full'>
      <div>
        <AdminSideNav />
      </div>
      <div className='w-full'>
           <AdminNav />
           <div className='grid md:flex md:grid-cols-1 w-1/2 p-10 gap-28'>
              <MyCalender />
           </div>
      </div>
    </div>
  </div>
  )
}

export default AdminDashboard
