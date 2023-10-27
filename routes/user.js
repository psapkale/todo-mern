import express from 'express';
import { getProfile, login, logout, register } from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.post('/login', login);
router.get('/logout', logout);
router.post('/new', register);
router.get('/profile', isAuthenticated, getProfile);

export default router;
