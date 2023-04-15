import express from 'express'
import  userAuthController  from '../../../../adapters/controller/authController'
import { userDBRepository } from '../../../database/mongodb/repositories/userReposioryMongo';
import { userRepository } from '../../../../application/respositories/userRepository';
import {  authService } from '../../../services/authServies';
import { authServiceInterface } from '../../../../application/services/authServiesInterface';

const router = express.Router();
const controller = userAuthController(
    userDBRepository,
    userRepository,
    authService,
    authServiceInterface,
)

// USER REGISTER
router.post('/signup', controller.register )
// VERIFY EMIAL
router.post('/login', controller.emailVerification )
// REFRESH TOKEN
router.get('/token', controller.jwtAuth)
// GOOGLE AUTH
router.post('/googleLogin', controller.googleVerification)

export default router;