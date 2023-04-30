import express, { Application } from 'express'
import Server from './frameWorks/webServer/server'
import database from './frameWorks/database/mongodb/connection/connection'
import expressConfig from './frameWorks/webServer/express'
import router from './frameWorks/webServer/routes'

const app: Application = express();

// EXPRESS CONFIG
expressConfig(app)
// CREAT SERVER
Server(app)
// Database Connection
database()
// Routes
router(app)

export default app;