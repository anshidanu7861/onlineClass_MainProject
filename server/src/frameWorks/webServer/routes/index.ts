
import express, { Application } from 'express'
import userAuth from './userRouters/userAuth'

const router = (app: Application ) =>{
    app.use('/', userAuth)
}

export default router
