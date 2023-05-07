import React from 'react'
import StudentListMentorSide from '../../components/mentorDash/StudnetListMentorSide'
import StudentSideNav from '../../components/navbar/StudentSideNav'
import StudentNavbar from '../../components/navbar/StudentNavbar'
import MentorSideNav from '../../components/navbar/MentorSideNav'
import MentorNavbar from '../../components/navbar/mentorNavbar'

function StudentListPage() {
  return (
    <div className='flex'>
        <div>
            <MentorSideNav />
        </div>
        <div className='w-full'>
            <MentorNavbar />
        <div className='p-5'>

      <StudentListMentorSide />
        </div>
        </div>
    </div>
  )
}

export default StudentListPage
