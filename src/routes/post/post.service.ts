import { db } from '../../utils/db.server.js';
import { Post } from '@prisma/client';

export const getPosts = async (): Promise<Post[]> => {
  return db.post.findMany();
};
