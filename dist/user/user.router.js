import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getUsers, getUserById, createUser, checkUsername, } from './user.service.js';
import { JWT_SECRET } from '../index.js';
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
userRouter.post('/', async (req, res) => {
    if (!req.body || !req.body.username || !req.body.password) {
        return res.status(400).send('invalid input');
    }
    const { username, password } = req.body;
    const usernameExists = await checkUsername(username);
    if (usernameExists) {
        return res.status(400).send('username already exists');
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await createUser({ username, password: hashedPassword });
        const token = jwt.sign({ username }, JWT_SECRET);
        return res.json({ user, token });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json(e.message);
    }
});
//# sourceMappingURL=user.router.js.map