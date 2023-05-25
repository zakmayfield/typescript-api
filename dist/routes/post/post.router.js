import express from 'express';
import { getPosts } from './post.service.js';
export const postRouter = express.Router();
postRouter.get('/', async (req, res) => {
    try {
        const posts = await getPosts();
        return res.json(posts);
    }
    catch (e) {
        res.status(500).json(e.message);
    }
});
//# sourceMappingURL=post.router.js.map