import { db } from '../../utils/db.server.js';
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
//# sourceMappingURL=auth.service.js.map