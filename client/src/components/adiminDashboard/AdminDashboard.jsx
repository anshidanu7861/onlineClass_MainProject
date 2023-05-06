import React from 'react'
import AdminNav from '../navbar/AdminNav'
import AdminSideNav from '../navbar/AdminSideNav'

function AdminDashboard() {
  return (
    <div>
    <div className='flex w-full'>
      <div>

        <AdminSideNav />
      </div>
      <div className='w-full'>
           <AdminNav />
      </div>
    </div>
  </div>
  )
}

export default AdminDashboard
