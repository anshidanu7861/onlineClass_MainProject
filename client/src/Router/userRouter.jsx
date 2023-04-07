import React from 'react';
import { Route, Routes } from 'react-router-dom'

import UserSignup from "../pages/user/userSignup";
import UserLogin from '../pages/user/userLogin';

// USER ROUTERS
function UserRouter() {
    return (
        <div>
          <Routes>
            <Route exact path='/signup' element={ <UserSignup />}></Route>
            <Route exact path='/login' element={ <UserLogin />}></Route>
          </Routes>
        </div>
    )
}

export default UserRouter;