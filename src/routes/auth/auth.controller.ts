import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../shared/constants.js';
import { checkUsername, registerUser } from './auth.service.js';

export const register = async (req: Request, res: Response) => {
  if (!req.body || !req.body.username || !req.body.password) {
    return res.status(400).send('invalid input');
  }

  const { username, password } = req.body;

  const usernameExists = await checkUsername(username);

  if (usernameExists) {
    return res.status(400).send('username already exists');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await registerUser({ username, password: hashedPassword });
    const token = jwt.sign({ username }, JWT_SECRET);
    return res.json({ user, token });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e.message);
  }
};
