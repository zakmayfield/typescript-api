import bcrypt from 'bcrypt';
import { checkUsername, generateToken, registerUser } from './auth.service.js';
// register a new user
export const register = async (req, res) => {
    if (!req.body || !req.body.username || !req.body.password) {
        return res.status(400).send('invalid input');
    }
    const { username, password } = req.body;
    // validate unique username input
    const usernameExists = await checkUsername(username);
    if (usernameExists) {
        return res.status(400).send('username already exists');
    }
    try {
        // password hash
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await registerUser({ username, password: hashedPassword });
        // generate token
        const token = generateToken(username);
        return res.json({ user, token });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json(e.message);
    }
};
// login an existing user
export const login = async (req, res) => {
    if (!req.body || !req.body.username || !req.body.password) {
        return res.status(400).send('invalid input');
    }
    try {
        const { username, password } = req.body;
        const user = await checkUsername(username);
        if (!user) {
            return res.status(400).send('user does not exist');
        }
        // compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).send('invalid credentials');
        }
        // generate token
        const token = await generateToken(username);
        return res.json({ user, token });
    }
    catch (e) {
        return res.status(500).json(e.message);
    }
};
//# sourceMappingURL=auth.controller.js.map