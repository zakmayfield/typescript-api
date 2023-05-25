import { db } from '../../utils/db.server.js';
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
//# sourceMappingURL=user.service.js.map