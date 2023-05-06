import React, {lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import ColorRingLoader from '../components/lodingSpinners/ColorRingLoader'
const AdminDashboard = lazy(()=>import('../pages/admin/AdminDashPage'))


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
      </Routes>
    </div>
  )
}

export default AdminRouters
