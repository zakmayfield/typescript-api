import express from 'express';
import { register, login } from './auth.controller.js';
export const authRouter = express.Router();
authRouter.post('/register', register);
authRouter.post('/login', login);
//# sourceMappingURL=auth.router.js.map