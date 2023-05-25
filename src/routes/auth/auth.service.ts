import { db } from '../../utils/db.server.js';

export const registerUser = async (body: {
  username: string;
  password: string;
}) => {
  const { username, password } = body;

  return db.user.create({
    data: {
      username,
      password,
    },
  });
};

export const checkUsername = async (username: string) => {
  return db.user.findUnique({
    where: {
      username,
    },
  });
};
