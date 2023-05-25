import { db } from '../../utils/db.server.js';
import { AuthUser } from '../../shared/types.js';

export const getUsers = async (): Promise<AuthUser[]> => {
  return db.user.findMany({
    select: {
      id: true,
      username: true,
      password: true,
    },
  });
};

export const getUserById = async (id: string): Promise<AuthUser> => {
  return db.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      username: true,
      password: true,
    },
  });
};
