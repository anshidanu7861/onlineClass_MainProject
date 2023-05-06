import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import UserRouter from './Router/userRouter'
import AdminRouters from './Router/adminRouters'

function App() {
  return(
    <div>
      <BrowserRouter>
      <UserRouter />
      <AdminRouters />
      </BrowserRouter>
    </div>
  )
}

export default App;
