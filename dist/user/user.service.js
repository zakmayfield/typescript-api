import { db } from '../utils/db.server.js';
export const getUsers = async () => {
    return db.user.findMany({
        select: {
            id: true,
            username: true,
            password: true,
        },
    });
};
export const getUserById = async (id) => {
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
export const createUser = async (body) => {
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
//# sourceMappingURL=user.service.js.map