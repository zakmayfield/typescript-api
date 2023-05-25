import express from 'express';
import { register } from './auth.controller.js';
export const authRouter = express.Router();
authRouter.post('/register', register);
//# sourceMappingURL=auth.router.js.map