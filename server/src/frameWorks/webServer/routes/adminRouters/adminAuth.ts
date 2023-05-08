import express from 'express'
import adminController from '../../../../adapters/controller/adminController'

const router = express.Router()

const controller = adminController()

router.post('/adminLogin', controller.adminLogin)

export default router