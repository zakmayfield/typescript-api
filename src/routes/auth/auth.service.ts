import { db } from '../../utils/db.server.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../shared/constants.js';

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

export const generateToken = async (username: string) => {
  return jwt.sign({ username }, JWT_SECRET);
};
