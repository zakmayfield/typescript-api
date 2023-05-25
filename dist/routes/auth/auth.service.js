import { db } from '../../utils/db.server.js';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../shared/constants.js';
export const registerUser = async (body) => {
    const { username, password } = body;
    return db.user.create({
        data: {
            username,
            password,
        },
    });
};
export const checkUsername = async (username) => {
    return db.user.findUnique({
        where: {
            username,
        },
    });
};
export const generateToken = async (username) => {
    return jwt.sign({ username }, JWT_SECRET);
};
//# sourceMappingURL=auth.service.js.map