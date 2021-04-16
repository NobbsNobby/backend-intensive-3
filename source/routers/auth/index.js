// Core
import express from 'express';

// Instruments
import { login, logout } from './handlers';
import { limiter, authMiddleware } from '../../utils';

export const router = express.Router();

router.post('/login', [ limiter(5, 60 * 1000), authMiddleware(process.env.PASSWORD) ], login);
router.post('/logout', [ limiter(5, 60 * 1000) ], logout);

export { router as auth };
