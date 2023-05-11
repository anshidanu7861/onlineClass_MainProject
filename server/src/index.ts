import express, { Application } from 'express'
import Server from './frameWorks/webServer/server'
import database from './frameWorks/database/mongodb/connection/connection'
import expressConfig from './frameWorks/webServer/express'
import router from './frameWorks/webServer/routes'
import ErrorHandlingMidleware from './frameWorks/webServer/middlewares/errorMiddleware'
import AppError from './utils/appErrors'

const app: Application = express();

// EXPRESS CONFIG
expressConfig(app)
// CREAT SERVER
Server(app)
// Database Connection
database()
// Routes
router(app)

app.use(ErrorHandlingMidleware)

app.all('*', (req, res, next)=>{
    next(new AppError('Not found', 404))
})

export default app;