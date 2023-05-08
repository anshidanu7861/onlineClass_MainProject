import React from 'react'
import AddCourse from '../../components/adiminDashboard/AddCourse'
import AdminNav from '../../components/navbar/AdminNav'
import AdminSideNav from '../../components/navbar/AdminSideNav'

function AddCoursePage() {
  return (
    <div>
        <div className='flex w-full'>
        <div>
            <AdminSideNav />
        </div>
        <div className='w-full'>
            <AdminNav />
            <div className='p-20'>

           <AddCourse />
            </div>
        </div>
        </div>
    </div>
  )
}

export default AddCoursePage
