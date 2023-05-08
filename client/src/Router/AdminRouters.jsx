import React, {lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import ColorRingLoader from '../components/lodingSpinners/ColorRingLoader'
const AdminDashboard = lazy(()=>import('../pages/admin/AdminDashPage'))
const AdminLoginPage = lazy(()=>import('../pages/admin/adminLoginPage'))
const AddCoursePage = lazy(()=>import('../pages/admin/AddCoursePage'))


function AdminRouters() {
  return (
    <div>
      <Routes>
        <Route exact path='/adminDashboard' element={
            <Suspense fallback={ <ColorRingLoader /> }>
               <AdminDashboard /> 
            </Suspense>
        }>

        </Route>

        <Route exact path='/admin' element={
            <Suspense fallback={ <ColorRingLoader /> }>
               <AdminLoginPage /> 
            </Suspense>
        }>
        </Route>

        <Route exact path='/addCourse' element={
            <Suspense fallback={ <ColorRingLoader /> }>
               <AddCoursePage /> 
            </Suspense>
        }>
        </Route>


      </Routes>
    </div>
  )
}

export default AdminRouters
