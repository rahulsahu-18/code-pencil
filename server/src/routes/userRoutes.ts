import express from 'express'
import { login, logout, signup, userDetials } from '../controller/userController';
import { verifyToken } from '../middleware/verifyToken';

const userRoutes = express.Router();

userRoutes.post('/register',signup);
userRoutes.post('/login',login);
userRoutes.post('/logout',verifyToken,logout);
userRoutes.get('/userInfo',verifyToken,userDetials);

export default userRoutes;