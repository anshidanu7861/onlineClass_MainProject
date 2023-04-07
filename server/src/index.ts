import express, { Application } from 'express'
import Server from './frameWorks/webServer/server'
import database from './frameWorks/database/mongodb/connection/connection'
import userRoute from './frameWorks/webServer/routes'
import expressConfig from './frameWorks/webServer/express'

const app: Application = express();

// EXPRESS CONFIG
expressConfig(app)

// CREAT SERVER
Server(app)

// Database Connection
database()

// Routes
app.use('/',userRoute,)

export default app;