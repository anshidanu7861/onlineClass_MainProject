
import express, { Application } from 'express'


const router = (app: Application ) =>{
    app.use('/auth')
}

export default router
