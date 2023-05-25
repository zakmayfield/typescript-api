import express from 'express';
import type { Request, Response } from 'express';
import { getUsers, getUserById } from './user.service.js';

export const userRouter = express.Router();

userRouter.get('/', async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

userRouter.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await getUserById(id);
    res.json(user);
  } catch (e) {
    res.status(500).json(e.message);
  }
});
