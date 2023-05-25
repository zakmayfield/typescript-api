import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../shared/constants.js';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).send('missing token');
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).send('error verifying token');
    }

    req.user = user;

    next();
  });
};
