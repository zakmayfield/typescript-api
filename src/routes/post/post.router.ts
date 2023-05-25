import express from 'express';
import type { Request, Response } from 'express';
import { getPosts } from './post.service.js';

export const postRouter = express.Router();

postRouter.get('/', async (req: Request, res: Response) => {
  try {
    const posts = await getPosts();
    return res.json(posts);
  } catch (e) {
    res.status(500).json(e.message);
  }
});
