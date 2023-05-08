
import express, { Application } from 'express'
import userAuth from './userRouters/userAuth'
import adminAuth from './adminRouters/adminAuth'

const router = (app: Application ) =>{
    app.use('/', userAuth)
    app.use('/admin',adminAuth)
}

export default router
