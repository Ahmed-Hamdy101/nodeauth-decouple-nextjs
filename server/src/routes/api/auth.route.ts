//  for login , register, and logout functionality
import express, { Router } from 'express'
import UserController from '@src/controllers/authController.controller'
import authenticateToken from '@src/middleware/Auth/auth.middleware'
const authEndPoint = Router()
const userController = new UserController();

authEndPoint.route('/all').get(userController.readUsers);
authEndPoint.route('/register').post(userController.createUser);
authEndPoint.route('/login').post(userController.AuthenticatedLoginUser);
authEndPoint.route('/logout').get(authenticateToken, userController.logoutUser);
authEndPoint.route('/update').patch(userController.updateUser);
authEndPoint.route('/delete').post(userController.deleteUser);

// dynamic route last
authEndPoint.route('/:id').get(userController.readSpecificUser);


// middleware
export default  authEndPoint
