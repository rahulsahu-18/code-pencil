import express from 'express'
import { login, logout, signup } from '../controller/userController';

const userRoutes = express.Router();

userRoutes.post('/register',signup);
userRoutes.post('/login',login);
userRoutes.post('/logout',logout);

export default userRoutes;