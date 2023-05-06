import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import ColorRingLoader from '../components/lodingSpinners/ColorRingLoader'
const UserSignup = lazy(()=> import("../pages/user/userSignup"))
import { GoogleOAuthProvider } from '@react-oauth/google'
const UserLandingPage = lazy(()=>import ('../pages/user/LandingPage'))
const UserLogin = lazy(()=>import ('../pages/user/userLogin'))
const OtpLoginPage = lazy(()=>import( '../components/firebase/OtpLoginPage'))
const StudentDashPage = lazy(()=> import ( '../pages/user/StudentDashPage'))
const MentorDashPage = lazy(()=>import('../pages/user/MentorDashPage'))
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

// USER ROUTERS
function UserRouter() {
    return (
        <div>
          <Routes>

            <Route exact path='/signup' element={ 
              <Suspense fallback={ <ColorRingLoader /> }>
              <ErrorBoundary >
              <UserSignup />
            </ErrorBoundary>
            </Suspense>}>
            </Route>

            <Route exact path='/login' element={ 
              <Suspense fallback={<ColorRingLoader />}>
                <ErrorBoundary>
              <GoogleOAuthProvider clientId='565435053802-igdbdm16j4q6d29sfuhu5fm88ujkvahu.apps.googleusercontent.com'>
            <UserLogin />
            </GoogleOAuthProvider>
            </ErrorBoundary>
            </Suspense>}>
            </Route>

            <Route exact path='/' element={
            <Suspense fallback={ <ColorRingLoader /> }>
              <ErrorBoundary>
             <UserLandingPage />
             </ErrorBoundary>
            </Suspense>}>
            </Route>
 
            <Route exact path='/otpLoginPage' element={
              <Suspense fallback={<ColorRingLoader />}>
                <ErrorBoundary>
                <OtpLoginPage />
                </ErrorBoundary>
              </Suspense>
            }>
            </Route>

            <Route exact path='/studentDashboard' element={
              <Suspense fallback={<ColorRingLoader />}>
                <ErrorBoundary >
                <StudentDashPage />
                </ErrorBoundary>
              </Suspense>
            }>
            </Route>

            <Route exact path='/mentorDashboard' element={
              <Suspense fallback={<ColorRingLoader />}>
                <ErrorBoundary>
                <MentorDashPage />
                </ErrorBoundary>
              </Suspense>
            }>
            </Route>

          </Routes>
        </div>
    )
}

export default UserRouter;