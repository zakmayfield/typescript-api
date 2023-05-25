import { db } from '../../utils/db.server.js';
export const getPosts = async () => {
    return db.post.findMany();
};
//# sourceMappingURL=post.service.js.map