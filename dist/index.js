import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { userRouter } from './routes/user/user.router.js';
import { postRouter } from './routes/post/post.router.js';
import { authRouter } from './routes/auth/auth.router.js';
import { PORT } from './shared/constants.js';
import { authenticateToken } from './middleware/authMiddleware.js';
dotenv.config();
if (!process.env.PORT) {
    process.exit(1);
}
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);
// demo authenticated route
app.get('/api/protected', authenticateToken, (req, res) => {
    const headers = req.headers;
    res.json({
        headers,
    });
});
app.get('/api', (req, res) => {
    res.send('hello');
});
app.listen(PORT, () => console.log(`🚀 Server running @ http://localhost:${PORT}`));
//# sourceMappingURL=index.js.map