import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { userRouter } from './routes/user/user.router.js';
import { postRouter } from './routes/post/post.router.js';
import { authRouter } from './routes/auth/auth.router.js';
import { PORT } from './shared/constants.js';

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

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(PORT, () =>
  console.log(`🚀 Server running @ http://localhost:${PORT}`)
);