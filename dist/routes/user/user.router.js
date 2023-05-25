import express from 'express';
import { getUsers, getUserById } from './user.service.js';
export const userRouter = express.Router();
userRouter.get('/', async (req, res) => {
    try {
        const users = await getUsers();
        return res.status(200).json(users);
    }
    catch (e) {
        return res.status(500).json(e.message);
    }
});
userRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await getUserById(id);
        res.json(user);
    }
    catch (e) {
        res.status(500).json(e.message);
    }
});
//# sourceMappingURL=user.router.js.map