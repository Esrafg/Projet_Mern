import express from 'express';
import { createUser,getuserBYEmail,RefreshToken} from '../controllers/User.controller.js';
const router = express.Router();
router.post('/', createUser);
router.post('/login', getuserBYEmail);
router.post('/refreshToken/',RefreshToken); 
export default router; 
